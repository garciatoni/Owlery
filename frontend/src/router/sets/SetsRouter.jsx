import { Route, Routes } from 'react-router-dom';

import { AllSets, Set } from '../../components';

export const SetsRouter = () => {
  return (
    <Routes>

        <Route path="/" element={ <AllSets /> }/>
        
        <Route path="/:id/*" element={ <Set /> }/>




        {/* <Route path="/localitzacio/:city/*" element={<SelectionMap />} />
        <Route path="/edifici/:refcat/*" element={ <Building /> } /> */}



    </Routes>
  )
}
