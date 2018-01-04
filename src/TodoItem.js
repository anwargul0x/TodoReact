import React from 'react';
import './itemStyle.css'

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.condTrue = this.condTrue.bind(this);
        this.condFalse = this.condFalse.bind(this);
        this.condToggle = this.condToggle.bind(this);
        this.updateItem = this.updateItem.bind(this);

        this.state = {
            isClicked: false
        }
    }
    condToggle() {
        const isNotClicked = !this.state.isClicked
        this.setState({
            isClicked: isNotClicked
        })
    }
    updateItem(evt) {
        evt.preventDefault();
        if(this.input.value.trim() !== ''){
            this.props.edit(this.props.fireId[this.props.index], this.input.value);
            this.condToggle();
        }
        else {alert('Empty string is unacceptable');
            this.condToggle();}
    }

    condTrue() {
        return (
            <form onSubmit={this.updateItem} className="list-form">

                <input type="text"
                    ref={(value) => {
                    this.input = value;
                    }}
                    defaultValue={this.props.details.name}
                    onChange={this.props.updateTask} />
                <div className="update-span-btn">
                <button type="submit">Update</button>

                <button onClick={(evt) => {
                        evt.stopPropagation();
                        this.condToggle();
                    }}>Cancel</button>
                </div>
            </form>)
    }
    condFalse() {
       
        return (
            <li className='list'>
                <div className="list-value-span">{this.props.details.name}</div>
                <div className="list-span-btn">
                    <button onClick={(evt) => {
                        evt.stopPropagation();
                        this.condToggle();
                    }}>Edit</button>
                    <button onClick={(evt) => {
                        evt.stopPropagation();
                        this.props.del(this.props.fireId[this.props.index], this.props.index)
                    }}>Delete</button>
                </div> </li>
        )
    }


    render() {
        let isClicked = this.state.isClicked;
        return (
        <section> 
                {isClicked ? this.condTrue() : this.condFalse()}</section>
        )
    }
}
export default TodoItem;