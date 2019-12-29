import React, {Component} from 'react';
import './App.css';
import Person from './Components/Person/Person';;

class App extends Component{

    state = {
        persons: [
            {name: 'Nitesh1', age: 25},
            {name: 'Nitesh2', age: 23},
            {name: 'Nitesh3', age: 27}
        ],
        otherState: "Some Other Value",
        showPersons: false
    }
    switchNameHandler = (newName) => {
        console.log("switch Handler");

        this.setState ( {
            persons: [
                {name: newName, age: 25},
                {name: 'Nitesh5', age: 23},
                {name: 'Nitesh6', age: 27}
            ] })}    

        nameChangedHandler = (event) => {
            console.log("name changed handler");

            this.setState ( {
                persons: [
                    {name: "Max!!!", age: 25},
                    {name: event.target.value, age: 23},
                    {name: 'Nitesh6', age: 27}
                ]
            })
        }

        togglePersonsHandler = () => {
            console.log("togglePersonsHandler done");
          let doesShow = this.state.showPersons;
          console.log(doesShow);
          this.setState({showPersons : !doesShow});
          console.log(doesShow);

        }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        if (this.state.showPersons){
            persons = (<div>
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
              </div>);
        }
        return(
            <div className="App">
                <p>Welcome to React!!!</p>
                <button style={style} onClick = {this.togglePersonsHandler}>
                Switch Person
                </button>
                {persons}
               {/* {this.state.showPersons === true ?
                <div>
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
              </div> : null } */}
          
            </div>
        );
    }
}
export default App;