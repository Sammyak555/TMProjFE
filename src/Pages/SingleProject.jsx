
import { Button, Td, Tr, Icon, useToast } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletingProject, getproject } from "../Redux/Operation/action";

const SingleProject = ({ el }) => {
  const user = useSelector((store) => store.userReducer.userDetails)
  const dispatch = useDispatch()

  console.log(user)

  const handleDelete = (el) => {
    console.log(el)
    dispatch(deletingProject(el._id, user._id)).then(() => dispatch(getproject(user._id)))
      .catch((e) => console.log(e))
    window.location.reload()
  }


  return (
    <Tr>
      <Td>{el._id}</Td>
      <Td>{el.projName}</Td>
      <Td>
        {user.name}
      </Td>
      <Td>
        <Button bgColor={"#B2F5EA"}>
          <Icon
            as={RiDeleteBin6Line}
            w={6}
            h={6}
            onClick={() => handleDelete(el)}
          />
        </Button>
      </Td>
    </Tr>
  )
}

export default SingleProject