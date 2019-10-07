import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      agentsArr: []
    }
  }
  constructUIDS (arr = []) {
    return arr.map((data, i) => {
      return {
        name: data,
        index: i
      }
    })
  }
  componentDidMount () {
    fetch('https://damp-garden-93707.herokuapp.com/getlistofagents').then((data) => {
        if (data.status === 200) {
          data.json().then((obj) => {
            obj = obj.data || {}
            this.setState({
              agentsArr: this.constructUIDS(obj.listofagents)
            })
          }).catch((ex) => {
            console.log("Something went wrong!")
          })
        }
      })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>List of agents: </h2>
        </div>
        <div className="content">
        {
          this.state.agentsArr.map((obj) => <p key={btoa(obj.index)} className='a-name'>{obj.name}</p>)
        }
        </div>
      </div>
    );
  }
}

export default App;
