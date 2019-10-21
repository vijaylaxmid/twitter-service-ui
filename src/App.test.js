/**
 author: Vijaylaxmi Nagurkar
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Home from './pages/Home';


it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('App renders without crashing enzyme', () => {
  shallow(<App />);
});

it('App matches snapshot', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
})

it('Home Page loaded correctly', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
})
