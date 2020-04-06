import React, { Component } from 'react';

import {Row, Col} from 'antd';
import Customcontrol from './containers/Customcontrol/customcontrol';
import Counter from './containers/Counter/Counter';
import Results from './containers/Results/Results';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Row className="inline">
          <Col md={6}>
              <Customcontrol/>
          </Col>
          <Col md={10}>
              <Counter />
          </Col>
          <Col md={6}>
              <Results/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
