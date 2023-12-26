import React from "react";

import { useSelector } from "react-redux";

const Header = () => {

    const {taskList}=useSelector((state)=>state.tasks)
    return(
        <div>
            <h1 className="text-success text-center my-4">Task Management</h1>
            <p className="text-center">currently ${taskList.length} task pending</p>
        </div>
    )
}

export default Header