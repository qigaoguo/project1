import React from 'react'
import PropTypes from 'prop-types'
const propTypes={
    todos:PropTypes.array.isRequired
}
class List extends React.Component{
    render(){
        const {todos}=this.props;
        return (
            <ul>
              {
                  todos.map((todo,index)=><li key={index}>{todo}</li>)
              }
            </ul>
        )
    }

}
List.propTypes=propTypes;
export default List;