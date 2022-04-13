import React from 'react';
import './App.css';

// component imports
import Translator from './Components/Translator';

function App() {
  return (
   <div className='App'>
     <Translator initialText="salutations"/> 
     {/* above is just a variable that holds a value/prop that is passed to the Components (props) */}
   </div>
  );
}

export default App;
