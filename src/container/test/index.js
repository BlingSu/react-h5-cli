import React, { Component } from 'react';
import {connect} from 'react-redux'
import './test.scss'

class Test extends Component {
  render() {
    return (
      <div>
        <button>减少</button>
        <button>num</button>
        <button>增加</button>
      </div>
    );
  }
}

export default Test
