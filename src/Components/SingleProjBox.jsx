import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleProjBox = ({el}) => {
  const navigate = useNavigate()

    const handleClick = (el) => {
        navigate(`/projectdetails/${el._id}`)
        
    }
  
    return (
    
        <div key={el._id} className='singleProjectBox' onClick={()=>handleClick(el)}>
                <p>{el.projName}</p>
        </div>
  )
}

export default SingleProjBox