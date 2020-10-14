import React from 'react';
import ReactDOM from 'react-dom';
import Words from './words';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLight: true, shiritori: [], turn: true };
    //    this.state = { isLight: true, shiritori: { p1: [], p2: [] }, turn: true };
    this.handleClick = this.handleClick.bind(this);
    this.handleTurn = this.handleTurn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClick() {
    const { isLight } = this.state;
    document.body.style.backgroundColor = isLight ? 'black' : 'white';
    document.body.style.color = isLight ? 'lightseagreen' : 'black';
    this.setState({ isLight: !isLight });
  }
  handleTurn() {
    const { turn } = this.state;
    this.setState({ turn: !turn });
  }
  handleSubmit(word) {
    const { shiritori } = this.state;
    shiritori.push(word);
    this.setState({ shiritori: shiritori });
  }
  render() {
    const { isLight, shiritori, turn } = this.state;
    console.log(shiritori);
    return (
      <div>
        <button
          onClick={this.handleClick}
          style={{
            cursor: 'pointer',
            backgroundColor: isLight ? 'black' : 'white',
            color: isLight ? 'lightseagreen' : 'black',
            padding: '10px',
            fontSize: '1.5rem',
            fontFamily: 'sans-serif',
          }}
        >
          {isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
        <h1
          style={{
            fontSize: '3rem',
            fontFamily: 'sans-serif',
            textAlign: 'center',
          }}
        >
          Hello, World: Welcome to the First Ever Shiritori Game
        </h1>
        <p
          style={{
            color: this.state.isLight ? 'black' : 'lightseagreen',
            padding: '20px',
            border: '5px solid lightseagreen',
            borderRadius: '5px',
            background: this.state.isLight ? 'white' : 'black',
            fontSize: '2rem',
            fontFamily: 'courier',
            textAlign: 'center',
            fontWeight: 900,
          }}
        >
          Who's Turn is it? {turn ? 'p1' : 'p2'}
        </p>
        <Words
          shiritori={shiritori}
          handleTurn={this.handleTurn}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
