import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {addTasks, removeTask} from '../redux/userSlice.ts'
import { nanoid } from "@reduxjs/toolkit";

const TaskList = () => {

    const tasks = useAppSelector((state)=>state.user.tasks);
    const count = useAppSelector((state)=>state.user.count);
    const [task, setTask] = useState('');
    const dispatch = useAppDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(useAppSelector((state)=>state.user));
    console.log(tasks);
    console.log(task);
    const onTaskChanged = e=>setTask(e.target.value)
    const reload=()=>window.location.reload();
    const handleAddTask = () =>{
        dispatch(addTasks({
            name: task,
            _id: nanoid(),
        }));
        setShow(false);
    }

    return ( 
        <div style={{border: "1px solid black", borderRadius: "10px"}}>
            <Row>
                <Col lg={6}>
                    <p>Daily Tasks</p>
                </Col>
                <Col lg={6}>
                    <Button variant="primary" onClick={handleShow}>
                        Add
                    </Button>
                </Col>
            </Row>
            
            {count>0 && tasks.map((task)=>(
                console.log(task),
                <Row key={task.id}>
                    <Col><input type={"checkbox"}></input></Col>
                    <Col style={{paddingBottom: "10px", fontSize: "larger", textAlign: "start"}}>{task.name}</Col>
                    <Col style={{paddingRight: "5rem"}}><Button className="btn btn-danger text-white"onClick={()=>{dispatch(removeTask(task._id))}}>Delete</Button></Col>
                </Row>
            ))}
                
                {count === 0 && <p>No tasks</p>}
            


            <Modal show={show} onHide={handleClose} style={{alignItem: "center"}}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Task!</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{textAlign: "center"}}>
                    <input type="text" value={task} onChange={onTaskChanged}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleAddTask}>
                        Add
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
     );
}
 
export default TaskList;