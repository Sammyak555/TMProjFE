import { Input, Select, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FcParallelTasks } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import "../PageCss/Issue.css"
import { AddingTask, getproject } from '../Redux/Operation/action';

const Issue = () => {
  const [data, setData] = useState({})
  const user = useSelector((store) => store.userReducer.userDetails)
  const allUsers = useSelector((store) => store.userReducer.allUsers)
  const dispatch = useDispatch()
  console.log(user)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
}

  const submitIssue = (e) => {
    e.preventDefault()
    dispatch(AddingTask(user._id,data))
    dispatch(getproject)
  }

  return (
    <div>
      <div className='issuebox'>
        <h2>Create Issue</h2>
        <br />
        <div className='FormDiv'>
          <form>
            <label>Select Project</label>
            <Stack spacing={3}>
              <Select name='project' onChange={handleChange} size='md'>
                <option value={""}>Select</option>
                {
                  user.projects &&
                  user.projects.map((el) => {
                    return (<option value={el._id}>{el.projName}</option>)
                  })
                }
              </Select>
            </Stack>
            <br />
            <label>Issue Type</label>
            <br />
            <Stack spacing={3}>
              <Select name='issue' onChange={handleChange} size='md'>
                <option value={""}>
                  Select
                </option>
                <option value={"task"}>
                  Task
                </option>
                <option value={"bug"}>
                  Bug
                </option>
              </Select>
            </Stack>
            <br />

            <div>
              <label>Issue</label>
              <br />
              <Input type="text" name='issueDescription' onChange={handleChange} placeholder='Write the Issue' />
            </div>
            <br />
            <div>

              <label>Asignee</label>

              <Input name={user.name} onChange={handleChange} placeholder={user.name} value={user.name} />
            </div>
            <br />


            <label>Assign Issue to: </label>

            <Stack spacing={3}>
              <Select name='persontobeAssigned'  onChange={handleChange} size='md'>
                <option value={""}>Select</option>
                {
                  allUsers &&
                  allUsers.map((el) => {
                    return (<option value={el._id}>{el.name}</option>)
                  })
                }
              </Select>
            </Stack>
            <br />
            <button className='issuebutton' onClick={submitIssue}>Assign Issue</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Issue