import React from 'react';


class NumberList extends React.Component {

    render() {
        const numbers = this.props.numbers;
        const listItems = numbers.map((a, index) => {
                console.log("index["+ index +"]");
                return (<li key={a.id}>{a.name}</li>);
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