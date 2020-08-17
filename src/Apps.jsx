import React from 'react';
//import PropTypes from 'prop-types';
import List from './List';
import Add from './Add';
import MyForm from './MyForm';
import FormDemo from './FormDemo';
/*const propTypes={
    todos:PropTypes.array.isRequired,
    addList:PropTypes.func.isRequired
    getPassword:PropTypes.func.isRequired
}*/
class Apps extends React.Component{
    /*constructor (props){
        super(props);
        this.state={
            todos:['吃饭','睡觉','打豆豆'],
            pwd:''
        };
        this.addList=this.addList.bind(this);
        this.getPassword=this.getPassword.bind(this);
    }
   
    addList(todo){
        const {todos}=this.state;
        todos.unshift(todo);
        this.setState({todos});

    } 
    getPassword(password){
        this.setState({
            pwd:password
        });
    }*/
    render(){
       /* const {todos}= this.state;
        return (
            <div>
              <h2>Simple TODO list</h2>
              <Add count={todos.length} addList={this.addList}/>
              <List todos={todos}/>
              <MyForm getPassword={this.getPassword}/>
              <FormDemo />
            </div>*/
            return (
            <div>
            <FormDemo />
            </div>
        )
    }


}
//Apps.propTypes=propTypes;
export default Apps;
