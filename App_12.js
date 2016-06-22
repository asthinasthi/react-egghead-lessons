import React from 'react';
import ReactDOM from 'react-dom';

//generic Inner compoment
let Mixin = InnerComponent => class extends React.Component{
  constructor(){
    super();
    this.update = this.update.bind(this);
    this.state = {val: 0};
  }
  update(){
    this.setState({val: this.state.val + 1});
  }
  componentWillMount(){
    console.log('will mount');
  }
  componentDidMount(){
    console.log('did mount');
  }

  render(){
    return (<InnerComponent
      update = {this.update}
      {...this.state}
      {...this.props}/>);
  }
}

const Button = (props) => <button onClick={props.update}>{props.txt} - {props.val}</button>
let MixinButton = Mixin(Button);

const Label = (props) => <label onMouseMove={props.update}>{props.txt} - {props.val}</label>
let MixinLabel = Mixin(Label);

class App extends React.Component{
  render(){
      return(<div>
          <MixinButton txt="Button"/>
          <MixinLabel txt="Label"/>
      </div>);
  }
}

export default App
