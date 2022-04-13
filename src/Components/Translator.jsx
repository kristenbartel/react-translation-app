import React from 'react';

class Translator extends React.Component {
    constructor(props) {
        super(props);
            this.state ={
                text: props.initialText || '' //will have the initial text from the App.js ||/OR what ever you type in??
            }
        }
        render() {
            return (
                <div>   
                    <h1>Translator</h1>
                    <input type='text' onChange={(event) => { //this sets an onChange value that expects an event Object from the browser and prints the console.log() below
                        console.log(event.target.value);
                    }}/> 
                    <p>{this.state.text}</p>
                </div>
            );
        }
        // below is a helper method _ is used to indicate this helper
        _updateText = (newText) => {
            this.setState({text: newText}, () => {
                console.log(`Text updated to: ${newText}`)
            })
        }
    }
    export default Translator;