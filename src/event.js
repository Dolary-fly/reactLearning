import React from 'react';
//const { Component } = require("react");

//react事件采用小驼峰命名
// {/* 例如<button onclick="activateLasers()">
//   Activate Lasers
// </button>
// ----->
// <button onClick={activateLasers}>
//   Activate Lasers
// </button> */}

// 不可以通过返回flase阻断默认行为，必须显式使用preventDefault
// class Tag extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={tagValue:true};
//     this.handleClick=this.handleClick.bind(this);
//   }

//   handleClick(){
//     this.setState(state=>({tagValue:!state.tagVlaue}));
//   }
//   render(){
//     return(
//       <button onClick={this.handleClick}>
//         {this.state.tagValue ? 'ON':'OFF'}
//       </button>
//     );
//   }
// }
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
   // this.handleClick = this.handleClick.bind(this);
  }

  handleClick=()=> {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
export default Toggle;