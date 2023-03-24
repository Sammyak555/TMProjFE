import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Container,
    RadioGroup,
    Radio,
    Stack,
    Textarea,
    Select,
  } from '@chakra-ui/react'
  import React, { useState } from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import "../ComponentCss/ProjectCreate.css"
import { AddingProject, getproject } from '../Redux/Operation/action'
import { getUserDetails } from '../Redux/User/action'
  
  
  const ProjectCreate = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [data, setData] = useState({})
    const user = useSelector((store) => store.userReducer.userDetails)
    const project = useSelector((store) => store.projectReducer.Allprojects)
    const dispatch=useDispatch()
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value })
    }
    const handleadd = (e) => {
      e.preventDefault();
      console.log(data)
      
      dispatch(AddingProject(data,user._id)).then(()=>{
        dispatch(getUserDetails)
      })
    // console.log(data)
    // console.log(user)
    }
    console.log(project)
    
  
    return (
      <>
        <Button className='add' colorScheme='white' onClick={onOpen} variant={'ghost'}>CREATE PROJECT</Button>
        <Container>
          <Modal 
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            size="4xl"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Project Details</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                
                  <div className='name'>
                    <FormLabel fontWeight={"normal"}>Project Name</FormLabel>
                    <Input ref={initialRef} name="projName" onChange={handleChange} type="text" placeholder='First name' />
                  </div>
                  
                
                <br />
                <h2>Description</h2>
            
                  <div className='name'>
                   <Textarea onChange={handleChange} name='projDescription'  placeholder='Add Description'></Textarea>
                  </div>
                
                <Stack spacing={3}>
 
  
  <Select onChange={handleChange} name='projCategory' defaultValue={'software'}  size='md'>
    <option value={"software"}>
        Software
    </option>
    <option value={"software"}>
        Software
    </option>
    <option value={"software"}>
        Software
    </option>
  </Select>
</Stack>
  
              </ModalBody>
  
              <ModalFooter>
                <Button onClick={(e)=>{handleadd(e);onClose();}} colorScheme="green" mr={3}>
                  ADD ADDRESS
                </Button>
                <Button onClick={onClose}>CANCEL</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Container>
      </>
    )
  }
  
  export default ProjectCreate