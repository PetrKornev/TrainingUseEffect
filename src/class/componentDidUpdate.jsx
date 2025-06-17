import React from 'react';

class LifecycleComponentDidUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count % 2 === 0;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(this.state.count);
    }
  }

  render() {
    return (
      <>
        <div>Текущее состояние счетчика: {this.state.count}</div>
        <p>
          <button onClick={this.increment}>Увеличить счетчик</button>
        </p>
      </>
    );
  }
}

export default LifecycleComponentDidUpdate;
