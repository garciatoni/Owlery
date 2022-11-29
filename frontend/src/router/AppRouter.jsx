import { Route, Routes } from 'react-router-dom';
// import { AuthPage } from '../auth';

import { AllSets } from '../components/AllSets/AllSets.jsx';

export const AppRouter = () => {
  return (
    <Routes>

        <Route path="" element={ <AllSets /> }/>
        {/* <Route path="/*" element={ <AuthPage /> }/> */}

    </Routes>
  )
}
