import React from 'react';

class LifecycleComponentWillUnmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('Таймер очищен');
  }

  render() {
    return (
      <>
        <p>Таймер: {this.state.time}</p>
      </>
    );
  }
}

export default LifecycleComponentWillUnmount;
