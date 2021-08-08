import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarsContext from './CarsContext';

class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red'
      },
    };

    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState((prevState) => ({
      ...prevState,
      cars: {
        ...prevState.cars,
        [car]: side,
      },
    }));
  }

  changeSignal(signalColor) {
    this.setState((prevState) => ({
      ...prevState,
      signal: {
        ...prevState.signal,
        color: signalColor,
      },
    }));
  }

  render() {
    const { state, moveCar, changeSignal } = this;
    const context = { ...state, moveCar, changeSignal };

    const { children } = this.props;

    return (
      <CarsContext.Provider value={ context }>
        { children }
      </CarsContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
