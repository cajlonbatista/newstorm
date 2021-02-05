import React from 'react';

import { remote } from 'electron';
import { useLocation } from 'react-router-dom';

import Inline from 'svg-inline-react';

import { BarContainer } from './styles';

import logo from '../../assets/svgs/logo';
import minimize from '../../assets/svgs/minimize';
import maximize from '../../assets/svgs/maximize';
import close from '../../assets/svgs/close';

const menu = [
  {
    path: '/',
    title: 'Storm Panel',
  },
  {
    path: '/add',
    title: 'Add - Storm Panel'
  }
];


const TitleBar = () => {
  const location = useLocation();

  return (
    <BarContainer>
      <div>
        <Inline src={logo} />
      </div>
      <article onClick={() => window.length}>
        {
          menu.map(item => (
            (item.path === location.pathname)
              ?
              <span>{item.title}</span>
              :
              <span></span>
          ))
        }
      </article>
      <div>
        <div onClick={() => {
          const action = remote.getCurrentWindow();
          action.minimize();
        }}>
          <Inline src={minimize} />
        </div>
        <div onClick={() => remote.getCurrentWindow().maximize()}>
          <Inline src={maximize} />
        </div>
        <div onClick={() => remote.getCurrentWindow().close()}>
          <Inline src={close} />
        </div>
      </div>
    </BarContainer>
  );
};

export default TitleBar;