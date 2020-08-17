import React from 'react';
import './styles/App.css';
import './styles/three.css';
import ThreeScene from './components/3d/ThreeScene.component';
class App extends React.Component {
  render(){
    return(<>
    <ThreeScene/>
    </>)
  }
}

export default App;
