import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends React.Component {

  state= {
    counters: [
        {id: 1, value: 0 },
        {id: 2, value: 0 },
        {id: 3, value: 0 },
        {id: 4, value: 0 }
    ]
};

// Lifecycle Hooks: Mounting Phase
// Constructor
// called ONLY once when a component is rendered and placed in a DOM - initializes the props
// We can access props if we make this constructor parameterised and pass props to the constructor of base class

constructor(){ 
  //calls the constructor of base class
  super();
  console.log("App-Constructor");
};

//This fucntion is called when the component is rendered and is used to make AJAX calls to the server
componentDidMount(){
  // Ajax call to this.setState({xyz component}) - To set the state for the data 
  console.log("App-Mounted");
};


handleIncrement = (counter) => {
    // cloning the array
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
};

handleReset = () => { 
    const counters= this.state.counters.map( c => {
        c.value = 0;
        return c;
    });

    this.setState({counters});
};

handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
};

  // Returns an element i.e Virtual DOM - when a component is rendered, all its children are also rendered
  render() { 
    console.log("App-Rendered");
    return (
            <React.Fragment>
                <NavBar totalCounters = {this.state.counters.filter( c => c.value > 0).length}/>
                <main 
                  className="container">
                  <Counters  
                    counters= {this.state.counters}
                    onReset= {this.handleReset} 
                    onIncrement= {this.handleIncrement}
                    onDelete= {this.handleDelete}
                  />
                </main>
            </React.Fragment>
    );
  }
}
 
export default App;
