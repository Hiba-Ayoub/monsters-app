import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
        }
        this.handleClick2=this.handleClick1.bind(this)
    }

    
        // state = {
        //   name:'hiba',   
        // }
    handleClick1(){
        console.log("btnOneClick");
    }
    handleClick3=()=>{
        console.log(this,"btn3Click");

    }
    // handleClick1
    render() {
        return (
            <div>
               
            <button onClick={this.handleClick1()}>1</button>    
            <button onClick={this.handleClick1}>2</button>    
            <button onClick={this.handleClick2}>3</button>    
            <button onClick={this.handleClick3}>4</button>    
          
            </div>
        )
    }
}
