import {useGetSets} from '../../hooks'


export const AuthPage = () => {

  const {getAllSets} = useGetSets();

  getAllSets();
  
  return (
    <div>AuthPage
      <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card" alt="" />
      <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409742&type=card" alt="" />


      
    </div>
  )
}
