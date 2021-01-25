import React, { Component } from 'react';
import Goals from './components/goals';

class App extends Component {

  state = {
    goals: []
  }

  componentDidMount() {
    fetch('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true')
    .then(res => res.json())
    .then((data) => {
      this.setState({ goals: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <Goals goals={this.state.goals} />
    )
  }
}

export default App;
