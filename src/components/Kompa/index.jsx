import { Component } from 'react';

export default class Kompa extends Component {
    render() {
        return (
        <div>
            <h1>Component Kompa</h1>
            <button onClick={this.props.titleHandler}>promijeni iz kompe</button>
        </div>
    );
  }  
}
