import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {

    render() { 
        console.log("Counters-Rendered");
        // define all the properties we want to use from parent class for simplicity of code
        const {onReset,counters, onDelete, onIncrement} = this.props;
        return (
            <div>
                <button 
                    onClick= {onReset}
                    className="btn btn-primary btn-sm m-2"> 
                    Reset 
                </button>
                {counters.map(counter => 
                    <Counter 
                        // this is used internally by react and can't be used in code
                        key={counter.id} 
                        // Raising the event to inherit from the parent: App
                        onDelete={onDelete} 
                        onIncrement= {onIncrement}
                        // includes all the data in the counter object
                        counter= {counter} 
                    />
                )}
            </div>
        );
    }
}
 
export default Counters;