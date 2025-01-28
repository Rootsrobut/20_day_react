import React from 'react';
import ComponentB from './ComponentB';

//   #########################################   part 1 ######################################################

// class ComponentA extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "ComponentA"
//         };
//         console.log('ComponentA constructor');
//         // this.setState({    //component do not mount and you are change state
//         //     name:'Ca'
//         // })
//     }

//     static getDerivedStateFromProps(nextProps, nextState) {
//         console.log('ComponentA getDerivedStateFromProps');
//         // If you need to update state based on props, return an updated state here
//         // For now, it just logs and returns null to indicate no state change
//         // this.setState({
//         //     name:'Ca'
//         // })
//         return null;
//     }

//     componentDidMount() {
//         console.log('ComponentA componentDidMount');
//         // this.setState({    this is right place  
//         //     name:'Ca'
//         // })
//     }

//     render() {
//         console.log('ComponentA render');
//         // this.setState({    //go to infinit loop because setState call implicit re-render
//         //     name:'Ca'
//         // })
//         return (
//             <>
//                 <h1>{this.state.name}</h1>
//             </>
//         );
//     }
// }

// export default ComponentA;










//   #########################################   part 2 ######################################################

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
                <ComponentB/>
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