import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Lifecycle Hooks - Automatically hook-into certain parts of the application and perform a task
// Mount: This is when the instance of the component is created - constructor, render, componentDidMount (called in-order)
// Update: This is when the props or the state of components change in the application - render, componentDidUpdate (called in-order)
// Unmount: When we delete a component - componentDidUnmount
