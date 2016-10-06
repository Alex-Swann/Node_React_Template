"use strict";
import React from 'react';
import { expect }  from 'chai';
import { mount } from 'enzyme';


import Layout from '../../app/components/Layout.jsx';
import Navbar from '../../app/components/Navbar.jsx';

describe('<Layout/>', () => {
  var wrapper;

  before( () => {
    wrapper = mount(
      <Layout />
    );
  });

  it('should contain a Navbar component', () => {
    expect(wrapper.find(Navbar)).to.have.length(1);
  });

});
