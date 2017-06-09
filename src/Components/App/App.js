import React, { Component } from 'react';
import Wheel from '../Wheel';

import data from '../../data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: 0,
      people: data.people.map((x, i) => Object.assign({}, x, { _id: i })),
    }
  }
  componentDidMount() {
    document.addEventListener('mousewheel', this.handleScroll.bind(this));
    document.addEventListener('DOMMouseScroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    document.removeEventListener('mousewheel', this.handleScroll);
    document.removeEventListener('DOMMouseScroll', this.handleScroll);
  }
  handleScroll(e) {
		const { people } = this.state;
    var e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    if (delta < 0 && e.wheelDelta < -100) {
      if (this.state.selected === 0) return this.setState({ selected: people.length - 1 })
      return this.setState({ selected: this.state.selected - 1})
    }
    if (delta > 0 && e.wheelDelta > 100) {
      if (this.state.selected === people.length - 1) return this.setState({ selected: 0 })
      return this.setState({ selected: this.state.selected + 1})
    }
  }
  handleSelect(id) {
    this.setState({ selected: id })
  }
  render() {
    const { selected, people } = this.state;
    return (
      <div className="App">
          <Wheel
            people={people}
            selected={selected}
            onSelect={this.handleSelect.bind(this)}
            radius={window.innerHeight / 3}
          />
      </div>
    );
  }
}

export default App;
