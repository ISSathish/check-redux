import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { updateTaskList } from "./taskSlice";


const MyVerticallyCenteredModal=(props)=>{

  const {selectedTask}=useSelector((state)=>state.tasks)

    const [title,setTitle]=useState("")

    const [id,setId]=useState(0)
    const dispatch=useDispatch()

    const updateTask=()=>{
        props.onHide()

        dispatch(updateTaskList({id,title}))
    }

    useEffect(()=>{
      setTitle(selectedTask.title)
      setId(selectedTask.id)
    },[selectedTask])

    return(
        <div>
            <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          UpdateTask
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Task Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Task Name" 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="primary" type="submit" onClick={(e)=>updateTask(e)}>Update Task</Button>
      </Modal.Footer>
    </Modal>

        </div>
    )
}

export default MyVerticallyCenteredModal