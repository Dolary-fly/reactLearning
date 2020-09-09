import React from 'react';

class ListNumber extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        const numbers=this.props.number;
        console.log(numbers);
        //key在兄弟节点中必须唯一，而不需要全局唯一
        //设置key的原因是，key帮助react识别那些元素改变了，比如添加和删除。
        const listItems=numbers.map((numbers)=>
            <li key={numbers}>{numbers*2}</li>
        );
        console.log(listItems);
        return(
            <ul>
                {listItems}
            </ul>
        )
    }
}

export default ListNumber;