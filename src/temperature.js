import React from 'react';

const scaleNames={
    c:"设置温度",
    f:"华氏温度"
}

//摄氏温度和华氏温度相互转换的函数
function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}
function toFarenheit(celsius){
    return (celsius * 9 / 5) + 32;
}
function toconvert(temperature,convert){//华氏温度得出摄氏温度或者摄氏温度得出华氏温度
    // const output=convert(temperature);
    // return output;
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class BoilOrNot extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        if(this.props.celsius>=100){
            return(
                <p>
                    the water would boil
                </p>
            )
        }
        return(
            <p>
                the water would not boil
            </p>
        )
    }
    
}

class TemperatureInput extends React.Component{
    // constructor(props){
    //     super(props);
    //    // this.state={temperature:''};
    // }
    handleChange=(event)=>{
       // this.setState({temperature:event.target.value})//改变温度state
        this.props.onTemperatureChange(event.target.value);
    }
    render(){
        const scale=this.props.scale;
        return(
            <fieldset>
                <legend>enter temperature in {scaleNames[scale]}</legend>
         
                <input type="text" value={this.props.temperature} onChange={this.handleChange}/>
                
            </fieldset>
        )
    }
}

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={scale:'c',temperature:''};
    }

    handleCelsiusChange=(temperature)=>{
        this.setState({scale:'c',temperature});

    }
    handleFahrenheitChange=(temperature)=>{
        this.setState({scale:'f',temperature});
    }

    render(){
        const scale=this.state.scale;
        const temperature=this.state.temperature;
        const celsius=scale==='f'?toconvert(temperature,toCelsius):temperature;
        const fahrenheit=scale==='c'?toconvert(temperature,toFarenheit):temperature;
        return(

            //将父组件的props传给子组件
            <div>
                <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilOrNot celsius={parseFloat(celsius)}/>
            </div>
        )
        
        
    }
}


export default Calculator;