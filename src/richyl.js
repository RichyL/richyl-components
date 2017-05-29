import React from 'react';

class RichyL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: "no message"};
    // This binding is necessary to make `this` work in the callback
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(txt) {
    console.log("txt="+txt.target.value);
    let msg=txt.target.value;

    this.setState(prevState  => ({
      message: msg //<-- this works

      /*message: txt.target.value  //<-- this does not works and gives
      and gives an error of "TypeError: Cannot read property 'value' of null"
      */
    }));
  }

  render() {
    return (
      <div>
      <h1>{this.props.salutation} RichyL</h1>
      <input type="text" onBlur={evt=>this.handleInput(evt)} />
      <h2>Message:{this.state.message}</h2>
      </div>
    );
  }
}

export {RichyL}

//------------------------------------------------------------------------------

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export {Toggle}
