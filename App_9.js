import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(){
    super();
    this.state = {val: 0};
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({val: 1+this.state.val});
  }

  componentWillMount(){
    console.log('mounting ...');
  }

  componentDidMount(){
    console.log('mounted ...');
  }

  componentWillUnmount(){
    console.log('unmounted ...');
  }
  render(){
    console.log('rendering ...');
    return (<div>
        <button onClick={this.update}>{this.state.val}</button>
    </div>)
  }
}

class Wrapper extends React.Component{
  constructor(){
    super();
  }
  mount(){
    ReactDOM.render(<App/>, document.getElementById('a'))
  }
  unMount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unMount.bind(this)}>UnMount</button>
        <div id="a"></div>
      </div>
    )
  }
}


ReactDOM.render(
  <Wrapper />,
  document.getElementById('app')
);
export default App
