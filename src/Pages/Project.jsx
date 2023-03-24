import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import "../PageCss/Project.css"
import { getproject } from '../Redux/Operation/action'
import { getallUserDetails, getUserDetails } from '../Redux/User/action'

const Project = () => {
  const dispatch = useDispatch()
  const params = useParams();
  const user = useSelector((store) => store.userReducer.userDetails)
  useEffect(()=>{
    dispatch(getUserDetails)
    dispatch(getallUserDetails)
  },[])
  let project = user.projects
  var detailedProject;
  if(project){
     detailedProject = project.filter((el) => {
      if(el._id===params.prodId){
        return el
      }
    })
  }
  
  console.log(detailedProject)
  return (
    <div className='projectDetailded'>
      <h3>Project Details</h3>

    </div>
  )
}

export default Project