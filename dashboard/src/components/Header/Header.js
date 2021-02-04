import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import Inline from 'svg-inline-react';

import { HeaderContainer } from './styles';

import { homeActive, homeInative } from '../../assets/svgs/home.js';
import { addActive, addInative } from '../../assets/svgs/add.js';
import logo from '../../assets/svgs/logo.js';
import exit from '../../assets/svgs/exit';

const menu = [
  {
    path: '/',
    iconActive: homeActive,
    iconInative: homeInative,
  },
  {
    path: '/add',
    iconActive: addActive,
    iconInative: addInative,
  }
];

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Link to='/'>
        <Inline src={logo} />
      </Link>
      <div>
        {
          menu.map(item => (
            (location.pathname === item.path)
              ?
              <Link key={item.path} to={item.path} style={{
                borderColor: '#F1554C',
                backgroundColor: '#F3F5FB'
              }}>
                <Inline src={item.iconActive} />
              </Link>
              :
              <Link key={item.path} to={item.path}>
                <Inline src={item.iconInative} />
              </Link>
          ))
        }
      </div>
      <Link to='#exit'>
        <Inline src={exit} />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
