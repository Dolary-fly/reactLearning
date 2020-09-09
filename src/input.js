//受控组件：组件的状态可以根据用户的输入进行实时的改变

import React from "react";
class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''};
    }

    handleChange=(event)=>{
        this.setState({value:event.target.value});
    }

    handleSumit=(event)=>{
        alert("name is"+this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form  onSubmit={this.handleSumit}>
                name:<input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value="提交"/>
            </form>
        );
    }
}

export default NameForm;