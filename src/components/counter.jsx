import React, { Component } from 'react';

class Counter extends React.Component {
    
    // Update Phase
    componentDidUpdate(prevProps, prevState){
        console.log("PrevProps", prevProps);
        console.log("PrevState", prevState);
        if(prevProps.counter.value != this.props.counter.value){
            // Ajax call to get new data based on changes in state objecta and props

        }
    }

    //Unmouting Phase
    componentWillUnmount(){
        console.log("Console-Unmount");
    }
    // constructor(){
    //     super();
    //     this.handleIncrement= this.handleIncrement.bind(this);
    // }
    
    render() { 
        console.log("Counter-Rendered");
        return (
            <div>
                <span className = {this.getBadgeClasses()}> {this.formatValue()}</span>
                <button 
                    onClick= {() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm"> 
                    Increment 
                </button>
                <button 
                    onClick= {() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"> 
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses(){
        return this.props.counter.value === 0 ? "badge bg-warning m-2" : "badge bg-primary m-2";
    }
    

    formatValue(){
        const {value} = this.props.counter;
        return value ===  0 ? 'Zero' : value;
    }
}
 
export default Counter;