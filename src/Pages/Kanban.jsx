import { Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProjectCreate from '../Components/ProjectCreate'
import "../PageCss/Kanban.css"
import { getUserDetails } from '../Redux/User/action'
import SingleProject from './SingleProject'


const Kanban = ({ onOpen }) => {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.userReducer.userDetails)

  useEffect(() => {
    dispatch(getUserDetails)
  }, [])

  let projects = (user.projects)

  // console.log(projects)
  return (
    <div className='AllProjects'>
      <div className='AllProjects-header'>
        <h2>{"> Projects"}</h2>
        <ProjectCreate />
      </div>
      <div className='projectboxes'>
        {
          projects &&
          projects.map((el) => {
            return (
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
                projects &&
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