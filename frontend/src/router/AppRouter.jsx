import { Route, Routes } from 'react-router-dom';
// import { AuthPage } from '../auth';

import { AllSets } from '../components';
import { SetsPage } from '../components';

export const AppRouter = () => {
  return (
    <Routes>

        <Route path="/*" element={ <SetsPage /> }/>
        <Route path="sets/*" element={ <SetsPage /> }/>
        {/* <Route path="/*" element={ <AuthPage /> }/> */}

    </Routes>
  )
}
