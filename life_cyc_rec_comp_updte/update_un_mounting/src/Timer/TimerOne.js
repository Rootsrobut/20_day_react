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
        console.log(nextProps);
        console.log(nextState);
        return true;
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
           this.timer=setInterval(()=>{
            this.setState((prevstate)=>{
               return {time:prevstate.time+1}
            })
          },1000);
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('TimeOne getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate(){
        console.log('TimeOne componentdidUpdate');
        console.log('------------------------------------------');
        // if(this.state.time === 10){
        //     clearInterval(this.timer);
        // }
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);
        console.log('snapShot',snapShot);
    }
    componentWillUnmount(){
        console.log("TimerOne componentWillUnmount");
        clearInterval(this.timer);
    }
}

export default Timer;