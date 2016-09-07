"use strict";
import React from 'react';
import { expect }  from 'chai';
import { mount } from 'enzyme';


import Layout from '../../app/components/Layout.jsx';

describe('<Layout/>', () => {
  var wrapper;

  before(()=>{
    wrapper = mount(
      <Layout />
    );
  });

  it('renders five <Choices /> components (game buttons) by default', () => {

  });

});
