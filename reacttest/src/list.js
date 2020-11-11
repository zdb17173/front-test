import React from 'react';



class ListComp extends React.Component {
    render() {
        return (<li>{this.props.value.id}{this.props.value.name}</li>);
    }
}



class NumberList extends React.Component {

    render() {
        const numbers = this.props.numbers;
        const listItems = numbers.map((a, index) => {
                console.log("index["+ index +"]");
                //key在轮询中应尽可能添加，如实在无法添加可以用index代替。
                //key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。
                //key应该放在组件上
                //key在兄弟节点上应唯一但不需要全局唯一
                return (<ListComp key={a.id} value={a} />);
            } 
        );
        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        );
    }
}
  

export default NumberList;