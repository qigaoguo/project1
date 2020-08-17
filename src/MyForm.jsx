import React from 'react';
import PropTypes from 'prop-types';
const propTypes={
    handleSubmit:PropTypes.func.isRequired,
    handleChange:PropTypes.func.isRequired
}
class MyForm extends React.Component{
    constructor (props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        //this.getPassword=this.getPassword.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    //console.log(this.state.pwd);
    handleSubmit(event){
        const name=this.nameInput.value;
        const {pwd}=this.state.pwd;
        alert(`准备5提交的用户名为${name},密码为${pwd}`);
        event.preventDefault();
       

    }
    handleChange(event){
        const pwd=event.target;
        this.getPassword(pwd);
    }
    render(){
        return (
           <form action="/test" onSubmit={this.handleSubmit}>
              用户名：<input type="text" ref={input=>{this.nameInput=input}}/>
              密码：<input type="password" value={this.props.pwd} onChange={this.handleChange}/>
              <input type="submit" value="登录" />
           </form> 
        )
    }

}
MyForm.propTypes=propTypes;
export default MyForm;

