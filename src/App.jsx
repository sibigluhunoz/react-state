import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    title: 'React App title'
  }
  render () {
    return (
      <div className='App'>
        <h1>{ this.state.title}</h1>
        <button onClick={() => this.state.title === 'React App title' 
        ? 
        this.setState({title:"promjena"})
        :
        this.setState({title:"React App title"})} 
        >Promjeni</button>
      </div>
    )
  }
}

export default App;
