import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Kanban from '../Pages/Kanban'
import Project from '../Pages/Project'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Kanban />}/>
            <Route path='/create-project' element={<Project />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes