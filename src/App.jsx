import './App.css';
import { Component } from 'react';
import Kompa from './components/Kompa';
import Kompa2 from './components/Kompa2';

class App extends Component {
  state = {
    title: 'React App title',
    page: {
      title: 'Home',
    }
  }

  titleHandler = () => {
    this.state.title === 'React App title' 
        ? 
        this.setState({title:"promjena"})
        :
        this.setState({title:"React App title"})

  }
  render () {
    return (
      <div className='App'>
        <h1>{ this.state.title }</h1>
        <h2>{ this.state.page.title }</h2>
        <Kompa titleHandler={this.titleHandler} />
        <Kompa2 title={this.state.title} />
        <button onClick={this.titleHandler} 
        >Promjeni</button>
        <button onClick={() => this.setState({page: {title: "About"}})}>Page change</button>
      </div>
    )
  }
}

export default App;
