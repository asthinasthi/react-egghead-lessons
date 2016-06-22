import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  render(){
    let txt = this.props.txt;
    let age = this.props.age;
    return (<div>
      <h1>First JSX hello</h1>
      <h2>Second JSX says hello too ...</h2>

      <p>{age} {txt}</p>
    </div>)
  }
}

App.propTypes ={
  txt : React.PropTypes.string,
  age : React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'First Text',
  age: 18
}
ReactDOM.render(
  <App age = {18} txt="Till I die ..."/>,
  document.getElementById('app')
);
export default App
