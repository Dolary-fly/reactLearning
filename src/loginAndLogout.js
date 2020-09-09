import React from 'react';

function UserCreeting(props){
    return(
        <h3>welcome</h3>
    )
}
function GuestCreeting(props){
    return(
        <h3>please login</h3>
    )
}
// function Greeting(props){
//     const isLogin=props.isLogin;
//     if(isLogin){
//         return(
//             <UserCreeting/>

//         );
//     }
//     else{
//         return(
//             <GuestCreeting/>
//         );
//     }
// }

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state={isLogin:false};
    }
    handleClick=()=>{
        // this.setState(state=>({
        //     isLogin:!state.isLogin
        // }))
        this.setState({isLogin:!this.state.isLogin})
    }
    render(){
        const isLogin=this.state.isLogin;
        let button;
        if(isLogin){
            return(
                <div>
                    <UserCreeting/>
                    <button onClick={this.handleClick}>
                        {'LoginOut'}
                    </button>
                </div>
            )
        }
        else{
            return(
                <div>
                    <GuestCreeting/>
                    <button onClick={this.handleClick}>
                        {'LogIn'}
                    </button>
                </div>
            )
        }
    }
}
export default LoginControl;