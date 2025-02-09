// import { useContext } from "react";
// import colorContext  from '../context';

// const GrandChildComponent = () => {
//     const values = useContext(colorContext);
//     console.log(values);
//     return <p style={{ color:values.color }}>Color: {values.color}</p>;
// };
// export default GrandChildComponent;


import  colorContext  from '../context';

const GrandChildComponent = () => {
    return (
        <colorContext.Consumer>
            {(values) => (
                <p style={{ color: values.color }}>Color: {values.color}</p>
            )}
        </colorContext.Consumer>
    );
};

export default GrandChildComponent;
