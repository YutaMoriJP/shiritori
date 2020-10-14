import React from 'react';
import {
  styles,
  playground,
  box1,
  box2,
  formStyle,
  shiritoriStyle,
} from './style';

class Words extends React.Component {
  constructor(props) {
    super(props);
    this.handleEventP1 = this.handleEventP1.bind(this);
  }
  handleEventP1(event) {
    event.preventDefault();
    const { handleTurn, handleSubmit } = this.props;
    handleTurn();
    const word = event.target.querySelector('input[type="text"]').value;
    handleSubmit(word);
  }
  render() {
    const { shiritori } = this.props;
    return (
      <div style={playground}>
        <div style={box1}>
          <p style={styles}>
            The words from P1 are:
            <span style={shiritoriStyle}>
              {shiritori.length === 0
                ? ' No words said, enter your word below'
                : shiritori.map((word, index) => (
                    <p key={word + index}>
                      {index % 2 ? 'Player 2 said: ' : 'Player 1 said '}
                      {word}
                    </p>
                  ))}
            </span>
          </p>
          <form onSubmit={this.handleEventP1}>
            <input
              type="text"
              placeholder="Your word..."
              style={formStyle}
            ></input>
            <input
              type="submit"
              style={{
                ...formStyle,
                cursor: 'pointer',
                background: 'seagreen',
                color: 'white',
              }}
            ></input>
          </form>
        </div>
        <div style={box2}>
          <p style={styles}>
            The words from P2 are:
            <span style={shiritoriStyle}>
              {shiritori.length === 0
                ? ' No words said, enter your word below'
                : shiritori.map((word, index) => (
                    <p key={word + index}>
                      {index % 2 ? 'Player 2 said: ' : 'Player 1 said '}
                      {word}
                    </p>
                  ))}
            </span>
          </p>
          <form>
            <input
              type="text"
              placeholder="Your word..."
              style={formStyle}
            ></input>
            <input
              type="submit"
              style={{
                ...formStyle,
                cursor: 'pointer',
                background: 'seagreen',
                color: 'white',
              }}
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Words;
