"use strict";
import React from 'react';
import Navbar from './Navbar.jsx';
import { Link } from 'react-router';


export default class extends React.Component{
  constructor() {
    super();
  }

  render(){
    return (
      <div>
        <Navbar/>
      </div>
    )
  }
};
