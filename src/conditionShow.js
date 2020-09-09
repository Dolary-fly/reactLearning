import React from "react";
import "./conditionShow.css"

function Warning(props){
    if(!props.isWarning)
        return null;
    return(
        <div>
            warning
        </div>
    )
}
class Page extends React.Component{
    constructor(props){
        super(props);
        this.state={showWarning:true};
    }

    handleClick=()=>{
        this.setState({showWarning:!this.state.showWarning})
    }
    render(){
        return(
            <div>
                <Warning isWarning={this.state.showWarning} class="warningDiv"/>
                <button onClick={this.handleClick}>
                    {this.state.showWarning?'hide':'show'}
                </button>
            </div>
        )
    }
}

export default Page;