const {response} = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const {setJWT} = require('../helpers/jtw')

const createUser = async(req, res = response) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        console.log(user);

        if (user) {
            return res.status(400).json({
                status: 'failed',
                msg: 'Existe un usuario con ese correo'
            })
        }

        user = new User(req.body);

        //Encriptar password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt );

        await user.save();

        const token = await setJWT(user.id, user.name);

        res.status(201).json({
            status: 'success',
            uid: user.id,
            name: user.name,
            token
        });
        
    }catch(error){
        console.log(error);
        res.status(500).json({
            status: 'failed',
            msg: '500 ERROR_MESSAGE',
        })
    }


};

const loginUser = async(req, res = response) => {
    const { email, password } = req.body;

    try{

        const user = await User.findOne({ email });

        if ( !user ) {
            return res.status(400).json({
                status: 'failed',
                msg: 'El usuario o contraseña incorrectos'
            })
        }

        //Confirmar las passwords
        const validPassword = bcrypt.compareSync(password, user.password);
        if ( !validPassword ) {
            return res.status(400).json({
                status: 'failed',
                msg: 'La contraseña es incorrecta',
            })
        }

        //Generar JSON WEN TOKEN JWT
        const token = await setJWT(user.id, user.name);

        res.json({
            status: 'success',
            uid: user.id,
            name: user.name,
            token
        });

    }catch(error){
        console.log(error);
        res.status(500).json({
            status: 'failed',
            msg: '500 ERROR_MESSAGE',
        })
    }
};

const renewToken = async (req, res = response) => {

    const {uid, name} = req

    const token = await setJWT(uid, name);
    
    res.json({
        status: 'success',       
        token
    })

}

module.exports = {
    createUser,
    loginUser,
    renewToken
};