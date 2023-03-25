import { Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import "../PageCss/Project.css"
import { getproject, updatingTask } from '../Redux/Operation/action'
import { getallUserDetails, getUserDetails } from '../Redux/User/action'

const Project = () => {
  const dispatch = useDispatch()
  const params = useParams();
  const [taskid,setTasid] = useState('')
  const [ taskval, setTaskval] = useState('')
  const user = useSelector((store) => store.userReducer.userDetails)
  const allUsers = useSelector((store) => store.userReducer.allUsers)
 

  useEffect(() => {
    dispatch(getUserDetails)
    dispatch(getallUserDetails)
    dispatch(updatingTask(user._id,myProject._id,taskid,taskval)).then(()=> dispatch(getUserDetails))
  }, [taskid,taskval])
  let project = user.projects
  var detailedProject;
  if (project) {
    detailedProject = project.filter((el) => {
      if (el._id === params.prodId) {
        return el
      }
    })
  }

  const myProject = detailedProject[0]
  
  const handleTask = () => {
  if(user&&myProject){
      
      // dispatch(updatingTask())
      console.log(user._id,myProject._id,taskid,taskval)
    }
  
  }
  
  return (
    <div className='projectDetailded'>
      <div >
        {
          myProject &&
          <h3> {`${myProject.projName} Details`}</h3>
        }
      </div>

      <div className="user-table">
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            {/* <TableCaption>All project Data</TableCaption> */}
            <Thead>
              <Tr>
                <Th>task name</Th>
                <Th>Assigned to</Th>
                <Th>task status </Th>
                <Th>change status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                myProject &&
                myProject.tasks.map((el) => {
                  return (
                    <Tr>
                      <Td>{el.taskName}</Td>
                      <Td>
                        {
                          allUsers &&
                          allUsers.map((user) => {
                            if (user._id === el.AssignedTo) {
                              return (
                                <h2>{user.name}</h2>
                              )
                            }
                          })
                        }
                      </Td>
                      <Td>
                        
                       {
                        (  el.taskDone===true )&&<h1>Done</h1>
                        }
                        {
                        (  el.taskInprocess===true )&&<h1>Inprocess</h1>
                        }
                        {
                        (  el.taskTodo===true )&&<h1>Todo</h1>
                        }
                      </Td>
                      <Td>
                        <select name="task" onChange={(e)=>{setTasid(el._id);setTaskval(e.target.value);handleTask()}}>
                          <option value="">Select</option>
                          <option value="taskTodo">Todo</option>
                          <option value="taskInprocess">Inprocess</option>
                          <option value="taskDone">Done</option>
                        </select>
                      </Td>
                    </Tr>
                  )
                })
              }
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>

  )
}

export default Project