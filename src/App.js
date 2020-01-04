import React, {Component} from 'react';
import './App.css';
import Person from './Components/Person/Person';

class App extends Component{

    state = {
        persons: [
          {id: "qwuy1", name: 'Nitesh2', age: 23},
          {id: "bjcbek1", name: 'Nitesh3', age: 27},
          {id: "qweer", name: 'Nitesh1', age: 25},
        ],
        otherState: "Some Other Value",
        showPersons: false
    }
    // switchNameHandler = (newName) => {
    //     console.log("switch Handler");
    //     this.setState ( {
    //         persons: [
    //             {name: newName, age: 25},
    //             {name: 'Nitesh5', age: 23},
    //             {name: 'Nitesh6', age: 27}
    //         ] })}    

            nameChangedHandler = ( event, id ) => {
              const personIndex = this.state.persons.findIndex(p => {
                return p.id === id;
              });
          
              const person = {
                ...this.state.persons[personIndex]
              };
          
              // const person = Object.assign({}, this.state.persons[personIndex]);
          
              person.name = event.target.value;
          
              const persons = [...this.state.persons];
              persons[personIndex] = person;
          
              this.setState( {persons: persons} );
            }

        togglePersonsHandler = () => {
            console.log("togglePersonsHandler done");
          let doesShow = this.state.showPersons;
          console.log(doesShow);
          this.setState({showPersons : !doesShow});
          console.log(doesShow);
        }

        deletePersonHandler = (personIndex) =>{
          // const persons = this.state.persons;
          // const persons = this.state.persons.slice();
          const persons = [...this.state.persons];
          persons.splice(personIndex,1);
          this.setState({persons:persons})
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
            persons = (
            <div>
              {this.state.persons.map((person, index) => {
                return <Person  
                name={person.name} 
                age={person.age}
                key={person.id}
                // click={this.deletePersonHandler}/>
                click={()=>this.deletePersonHandler(index)}
                changed={(event)=>this.nameChangedHandler(event,person.id)}/>
              })}           
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