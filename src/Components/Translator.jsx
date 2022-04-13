import React from 'react';
import rot13 from 'rot-thirteen';

class Translator extends React.Component {
    constructor(props) {
        super(props);
            this.state ={
                text: props.initialText || '', //will have the initial text from the App.js ||/OR what ever you type in??
                translated: rot13(props.initialText) || ''
            }
        }
        render() {
            return (
                <div>   
                    <h1>Translator</h1>
                    <input type='text' onChange={(event) => { //this sets an onChange value that expects an event Object from the browser and prints the console.log() below
                        console.log(event.target.value);
                        this._updateText(event.target.value); //updateText function is passed the input value and run through the helper func below, so the input value event.target.value is run through as newText and the updated state setState is changed to the new object text: newText
                    }}/> 
                    {/* below are where the above states are rendered and state changes are displayed */}
                    <p>{this.state.text}</p> 
                    <p>{this.state.translated}</p>
                </div>
            );
        }
        // below is a helper method _ is used to indicate this helper
        _updateText = (newText) => {
            this.setState({text: newText, translated: rot13(newText)}, () => {
                console.log(`Text updated to: ${newText}`)
            })
        }
    }
    export default Translator;