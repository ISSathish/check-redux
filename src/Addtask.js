import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { addTaskList } from './taskSlice';

import { useDispatch } from 'react-redux';

const Addtask=()=>{

    const dispatch=useDispatch()

    const [title,setTitle]=useState("")

    const addTask=(e)=>{
        e.preventDefault();
        console.log(title)
        dispatch(addTaskList({title}))
        setTitle("")
    }

    return( 
     <div>
    <section className='my-4'>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Task Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Task Name" 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={(e)=>addTask(e)}>
                New Task
            </Button>
        </Form>
    </section>
    </div>
    )
}

export default Addtask