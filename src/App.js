import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './App.css';
import TodoForm from './TodoForm';
import Footer from './footer';
import * as firebase from 'firebase';
import './itemStyle.css';
import './Config/config';

let database = firebase.database();

class App extends Component {
 constructor (){
   super();
  this.updateTask = this.updateTask.bind(this);
  this.AddTask    =  this.AddTask.bind(this); 
  this.Delete1    = this.Delete1.bind(this);
  this.Edit       =  this.Edit.bind(this);
  
  this.state = {
   tasks:[
   ], 
   currentTask : ''
  };
}

//Life Cycle Method
  componentDidMount() {
    database
      .ref()
      .on('value', (snapshot) => {
        let data = snapshot.val();
        if(data !== null){

        
        let keyValue;
        let arr = [];
        let key1 = [];

        for (var key in data) {
          keyValue = data[key];
          arr.push(keyValue);
          key1.push(key);
          this.setState({
            tasks: arr,
            id: key1
          });
        }
      }
      else 
      this.setState({
        tasks:[]
      })
      });
  }

//Add function
  AddTask(e) {
    e.preventDefault();
    let currentTask = this.state.currentTask.trim();
    if (currentTask !== "") {
      database.ref().push({
        name: currentTask
      });
      this.setState({
        currentTask: ''
      })
    }
    else alert("Please Type something...!!");
  }

//Delete Function
  Delete1(location,index) {
    database.ref(`/${location}`).remove();
}

  //Edit function
  Edit(location, newVal) {
    database.ref(`/${location}/name`).set(newVal);
  }
 
  //Update Function
  updateTask (newValue){
        this.setState({
          currentTask : newValue.target.value
        })
      }


  render() {
    
    return ( <div className="main-div">
      <h1 className="heading">Todo App <span className="sub-title">A Simple List For You !</span></h1>
      <div className="Rendered">
        <TodoForm currentTask={this.state.currentTask} updateTask={this.updateTask} addTask = {this.AddTask}/> 
          <section className="list-container">
          <ul className="sec-ul"> {this.state.tasks.length !==0? this.state.tasks.map((task,index)=>{
                return <TodoItem key={index} fireId={this.state.id}  details={task}  
                index={index}  del={this.Delete1} edit={this.Edit}/>  
                                                                        }
                                                        ) 
            : <h3>Please Type Something !!!</h3>}  
          </ul>
          </section>  
            </div>
            <Footer/>
              </div>
 
            );
            }
}
export default App;
