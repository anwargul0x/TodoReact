import React from 'react';
import './todoForm.css';
import './itemStyle.css';


const TodoForm = (props)=>{
    return (
        <section className="form-section">
        <form onSubmit={props.addTask}>
            <input type="text" value={props.currentTask} onChange={props.updateTask} placeholder="Feed me some Tasks...!"/>
            <button type="submit">Add</button>
        </form>
        <hr />
    </section>
    )
}

export default TodoForm;