import React from 'react';

// class App extends React.Component{
//   render(){
//     return <h1>JSX transpiled hello world!</h1>
//   }
// }

// class App extends React.Component{
//   render(){
//     return React.createElement("h1", null, "Hello world in Vanilla JS");
//   }
// }

// const App = () => <h1>Stateless const component says Hi!!</h1>

const App = () => React.createElement("h1", null, "Vanilla JS const says hi...");
export default App
