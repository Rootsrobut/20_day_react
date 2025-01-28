import React from 'react'

class ComponentA extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "ComponentA",
            data:[]
        };
        console.log('ComponentA constructor');
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        console.log('ComponentA getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('ComponentA componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json()).then(data=>this.setState({data:data}))
    }

    render() {
        console.log('ComponentA render');
        return (
            <>
                <h1>{this.state.name}</h1>
                <ul>
                    {this.state.data.map((a)=>{
                         return (
                            <li>{a.username}</li>
                         )
                    })}
                </ul>
            </>

        );
    }
}

export default ComponentA;