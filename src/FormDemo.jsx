import React from 'react';
export default class FormDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            value:""
        }
    }
    handleSumit = () =>{
        console.log(this.state.value);
    }

    onChangeHandler = (e) =>{
        e.preventDefault();
        this.setState({
            value:e.target.value
        })
        console.log(this.state.value);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSumit}>
                    <input type="text" value={ this.state.value} onChange= { this.onChangeHandler}/>
                    <input type="submit" value="tijiao"></input>
                </form>
            </div>
        )
    }
}