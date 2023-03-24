import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Issue from '../Pages/Issue'
import Kanban from '../Pages/Kanban'
import Project from '../Pages/Project'
import SingleProjBox from './SingleProjBox'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Kanban />}/>
            <Route path='/issues' element={<Issue />}/>
            <Route path='/projectdetails/:prodId' element={<Project />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes