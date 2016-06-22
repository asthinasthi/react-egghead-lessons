import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      txt: 'this is a state txt',
      age: 21
    }
    this.update = this.update.bind(this)
}
    update(e){
      this.setState({txt: e.target.value})
  }
  render(){
    return (<div>
        <Widget txt={this.state.txt} update = {this.update}/>
        <Widget txt={this.state.txt} update = {this.update}/>
        <Widget txt={this.state.txt} update = {this.update}/>
        <Widget txt={this.state.txt} update = {this.update}/>
    </div>)
  }
}
//stateless Component
const Widget = (props) => {
  return (<div>
    <input type="text" onChange = {props.update}/>
    <h2>{props.txt}</h2>
  </div>)
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
export default App
