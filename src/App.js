import React, {Component} from 'react';
import './App.css';
import Person from './Components/Person/Person';

class App extends Component{

    state = {
        persons: [
            {name: 'Nitesh1', age: 25},
            {name: 'Nitesh2', age: 23},
            {name: 'Nitesh3', age: 27}
        ],
        otherState: "Some Other Value"
    }

    switchNameHandler = (newName) => {
        this.setState ( {
            persons: [
                {name: newName, age: 25},
                {name: 'Nitesh5', age: 23},
                {name: 'Nitesh6', age: 27}
            ]
        })}    

        nameChangedHandler = (event) => {
            this.setState ( {
                persons: [
                    {name: "Max!!!", age: 25},
                    {name: event.target.value, age: 23},
                    {name: 'Nitesh6', age: 27}
                ]
            })
        }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return(
            <div className="App">
                <p>Welcome to React!!!</p>
                <button style={style} onClick = {() => this.switchNameHandler("Maximillian")}>Switch Person</button>
                <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} >
                </Person>

                <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                click = {this.switchNameHandler.bind(this,"Max!")}
                changed={this.nameChangedHandler}>
                </Person>

                <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}>
                </Person>
            </div>
        );
    }
}
export default App;