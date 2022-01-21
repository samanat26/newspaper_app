
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Enews from './components/Enews';

//router...................................
import {

  Routes,
  Route,

} from "react-router-dom";

export default class App extends Component {
  pageSize=9;
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
        <Route exact path="/" element={<Enews key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
          <Route exact path="/general" element={<Enews key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
          <Route exact path="/business" element={<Enews key="business" pageSize={this.pageSize} country="in" category="business" />}></Route>
          <Route exact path="/entertainment" element={<Enews key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
          <Route exact path="/health" element={<Enews key="health" pageSize={this.pageSize} country="in" category="health" />}></Route>
          <Route exact path="/science" element={<Enews key="science" pageSize={this.pageSize} country="in" category="science" />}></Route>
          <Route exact path="/sports" element={<Enews key="sports" pageSize={this.pageSize} country="in" category="sports" />}></Route>
          <Route exact path="/technology" element={<Enews key="technology" pageSize={this.pageSize} country="in" category="technology" />}></Route>



          {/* <Route path="/about" element={ }>

          </Route> */}

        </Routes>

      </div>
    )
  }
}


