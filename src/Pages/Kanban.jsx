import { Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProjectCreate from '../Components/ProjectCreate'
import "../PageCss/Kanban.css"
import SingleProject from './SingleProject'

const getProjects = async () => {
    return await axios.get('http://localhost:5550/users/641d5b0af383b010e8296e5d')
    .then((res) => res.data)
}

const Kanban = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        getProjects().then((data)=>setProjects(data.projects))
    },[setProjects])

    
    const handleCreate = () => {

    }
  return (
    <div className='AllProjects'>
        <div className='AllProjects-header'>
        <h2>{"> Projects"}</h2>
        <div className='fixedProject' onClick={handleCreate}>CREATE PROJECT</div>
        </div>
        <div className='projectboxes'>
            {
                projects.length>0&&
                projects.map((el) => {
                    return(
                        <div key={el._id} className='singleProjectBox'>
                            <p>{el.projName}</p>
                        </div>
                    )
                })
            }
        </div>
        <div className="user-table">
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>All User Data</TableCaption>
            <Thead>
              <Tr>
                <Th>sr.no.</Th>
                <Th>id</Th>
                <Th>name</Th>
                <Th>block user</Th>
                <Th>delete user</Th>
              </Tr>
            </Thead>
            <Tbody>
            {
                projects.length>0&&
                projects.map((el) => {
                    return <SingleProject key={el._id} el={el} />
                })
            }
              
            </Tbody>
          </Table>
        </TableContainer>
    
      </div>
      
    </div>
  )
}

export default Kanban