import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const TaskForm = ({ show, handleClose, addTask, editTask, taskToEdit }) => {
    const [task, setTask] = useState({ 
        name: '', 
        priority: 'Medium', 
        status: 'To Do' 
    });

    useEffect(() => {
        if (taskToEdit) {
            setTask(taskToEdit);
        } else {
            setTask({ name: '', priority: 'Medium', status: 'To Do' });
        }
    }, [taskToEdit]);

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (task.name.trim() === '') return;
        taskToEdit ? editTask(task) : addTask(task);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton className="border-0">
                <Modal.Title>{taskToEdit ? 'Edit Task' : 'Add Task'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={task.name}
                            onChange={handleChange}
                            placeholder="Enter task name"
                            className="rounded-3"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Priority</Form.Label>
                        <Form.Select
                            name="priority"
                            value={task.priority}
                            onChange={handleChange}
                            className="rounded-3"
                        >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Select
                            name="status"
                            value={task.status}
                            onChange={handleChange}
                            className="rounded-3"
                        >
                            <option>To Do</option>
                            <option>In Progress</option>
                            <option>Done</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="border-0">
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmit} className="rounded-pill px-4">
                    {taskToEdit ? 'Update Task' : 'Add Task'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TaskForm;
