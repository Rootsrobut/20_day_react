import React from "react";
class Timer extends React.Component{
    constructor(){
        super();
        this.state={
            time:0
        }
        this.timer=null;
        console.log("TimerOne Constructor");
    }
    static getDerivedStateFromProps(){
        console.log("Timer getDerivedStateFromProps");
        return null;
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(this.props.time)
        return nextProps.timerOn !== this.props.timerOn || nextState.time%5===0;
    }
    render(){
        console.log('TimerOne render');
        return (<><h1>Timer Spend</h1>
                {new Date(this.state.time*1000).toISOString().slice(11,19)}
        </>);
    }
    componentDidMount(){
           console.log('TimeOne componentDidMount');
           console.log('------------------------------------------');
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('TimeOne getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapShot){
        console.log('TimeOne componentdidUpdate');
        console.log('------------------------------------------');
        if(prevProps.timerOn!==this.props.timerOn){
             if(this.props.timerOn){
                this.timer=setInterval(()=>{
                    this.setState((prevState)=>({time:prevState.time+1}))
                },1000);
             }
             else{
                clearInterval(this.timer);
             }

        }
    }
    componentWillUnmount(){
        console.log("TimerOne componentWillUnmount");
    }
}

export default Timer;