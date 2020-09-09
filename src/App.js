import React from 'react';
//import './App.css';
//import Comment from'./comment';
//import Clock from './Clock';
//import Toggle from './event' ;
import LoginControl from './loginAndLogout';
import Page from './conditionShow';
import ListNumber from './listAndKey';
import NameForm from './input';
import Calculator from './temperature';
//import Greeting from './loginAndLogout'
// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };

// {/* <Comment 
//           date={comment.date}
//           text={comment.text}
//           author={comment.author}
//       />
//       <Clock/> */}

// {/* <Greeting isLogin={false}/> */}
function App() {
  return (
    <div className="App">
      <LoginControl/>
      <Page/>
      <ListNumber number={[1,2,3,4]}/>
      <NameForm/>
      <Calculator/>
    </div> 
   
  );
}

export default App;
