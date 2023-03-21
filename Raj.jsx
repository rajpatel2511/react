import React from "react";
import RajNames from "./RajNames";

const list1=["Raj","Jay","Jyot"];
const list2=["parth","vatsal","dhrumil"];
const list3=["ABC","DEF","XYZ"];


class Raj extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: list1};
        this.changelist = this.changelist.bind(this);
        this.reset = this.reset.bind(this);
    }

    changelist(){
        this.setState({ name : list2 });
        this.changelist2 = this.changelist2.bind(this);
   }

    changelist2(){
        this.setState({ name : list3 });
    }
  reset(){
        this.setState({ name : list1 });
    }
    render(){
    return (<><RajNames names={this.state.name} />
        <button onClick={this.changelist}>chagelist</button>
        <button onClick={this.changelist2}>chagelist2</button>
        <button onClick={this.reset}>Reset</button></>
    )};
}

export default Raj;