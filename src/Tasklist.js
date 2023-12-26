import React, {useState} from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from "./Updatetask";

import { useSelector,useDispatch } from 'react-redux';
import { setselectedTask,removeTaskList, checkBox } from "./taskSlice";

const Tasklist=()=>{

  const {taskList}=useSelector((state)=>state.tasks)
  const dispatch=useDispatch()

    const updateTask=(task)=>{
        console.log("update task")
        setModalShow(true)
        dispatch(setselectedTask(task))
        console.log(task)
    }

    const deleteTask=(task)=>{
        console.log("delete task")
        dispatch(removeTaskList(task))
    }

    const [modalShow, setModalShow] = useState(false);

    const handlecheckBox=(i)=>{
      let c=taskList && taskList.map((task,index)=>{
        console.log("checkBox")
        return task.id===i ? task.checkBox ? {...task,checkBox:false}:{...task,checkBox:true}:task
      })

      console.log(c)
      dispatch(checkBox(c))
      
    }

    return(
        <div>
               <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>check</th>
          <th>Task Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          taskList && taskList.map((task,index)=>{
            return(
              <tr key={task.id}>
                <td>{index+1}</td>
                {
                  !task.checkBox ? (
                    <>
                    <td>
                      <input type="checkbox" onClick={()=>handlecheckBox (task.id)} />
                    </td>
                    <td>{task.title}</td>
                    </>
                  ):
                  (
                    <>
                    <td>
                      <input type="checkbox" onClick={()=>handlecheckBox(task.id)} />
                    </td>
                    <td><del>{task.title}</del></td>
                    </>
                  )
                  }
                
                
                <td>
                  <Button variant="primary" className="mx-3"
                  onClick={()=>updateTask(task)}
                  >
                  <i class="bi bi-pencil-square"></i></Button>
                  <Button variant="primary"
                  onClick={()=>deleteTask(task
                  
                  )}>
                  <i class="bi bi-trash"></i></Button>
                </td>
            </tr>
            )

            })
        }
        

        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      </tbody>
    </Table>
    
        </div>
    )
}

export default Tasklist