import React from 'react'
import PropTypes from 'prop-types'
const propTypes={
    count:PropTypes.number.isRequired,
    addList:PropTypes.func.isRequired
}
class Add extends React.Component{
    constructor (props){
        super(props);
        this.add=this.add.bind(this);
    }
    add(){
        const todo=this.todoInput.value.trim();
        if(!todo){
            return
        }
        this.props.addList(todo);
        this.todoInput.value='';
    }
    render(){
        return (
            <div>
              <input type="text" ref={input=>this.todoInput=input}/>
              <button onClick={this.add}>add #{this.props.count+1}</button>
            </div>
        )
    }
}
Add.propTypes=propTypes;
export default Add;