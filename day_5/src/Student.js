import React from 'react';


// class Student extends React.Component {
//     render(){
//         const {name,age,marks}=this.props;
//         return (
//             <div className='info'>
//                 <p>Hi My name is {name} </p>
//                 <p>My age is {age}</p>
//                 <p>My score is {marks} %</p>
//             </div>
//             );
//     }

// }

function Student(props) { 
        const {name,age,marks}=props;
        // props.name='puspa' // this will not work props can not modify
        return (
            <div className='info'>
                <p>Hi My name is {name} </p>
                <p>My age is {age}</p>
                <p>My score is {marks} %</p>
            </div>
            );
}


export default Student;