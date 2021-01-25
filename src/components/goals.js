import React, { Component } from 'react';
// Simon Brandoné

class Goals extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedGoal:{targets:[]},
      selectedDesc:{descs:''}
    }
  }

renderDesc () {
  var descs = this.state.selectedDesc.description
  return (<h4 className="card-desc" key={"desc"+252}>{descs}</h4>)
};


renderTargets () {
  var targets = this.state.selectedGoal.targets
    var rows = targets.map((target, i) => (
      <p className="card-text" key={"target"+i}>{target.title}</p>
      ))
      return rows;
};

goalClicked(goal) {
  this.setState({selectedGoal:goal});
  this.setState({selectedDesc:goal})
}

render () {
  return (
    <div className="container">
      <div className="title-container">
      <h1 className="title-text">FN Goals</h1>
      </div>
      <div className="card-container">
      {this.props.goals.map((goal, i) => (
        <div className="card" onClick={()=> {this.goalClicked(goal)}} key={"goal"+i}>
          <ul className="card-body">
            <h5 className="card-title">Goal {i+1}:  {goal.title}</h5>
          </ul>
        </div>
      ))}
      </div>
      <div className="card-info">
        {this.renderDesc()}
        {this.renderTargets()}
      </div>
    </div>
  )
};
}

export default Goals