import React from 'react';
// setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式，返回值为数字。
//toLocaleTimeString()将本地时间转换为字符串
class Clock extends React.Component{//组件名称大写
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }

    //尝试每秒进行更新，添加生命周期方法
    //componentDidMount()会在组件已经被渲染到 DOM 中后运行，所以在这里设置计时器
    componentDidMount(){
        this.timerID=setInterval( ()=>this.tick(),1000 );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        //使用state时不要直接修改this.state.what,而是使用setState({what:"what"})
        //react可能会将多个setState调用合并为一个，存在异步更新问题
        this.setState({
            date:new Date()
        });
    }
    render(){
        return(
            <div>
                <h1>demo2</h1>
                <h1>hello Dolary</h1>
                <h2>this time is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;