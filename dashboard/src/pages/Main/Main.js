import React, { useState } from 'react';

import Inline from 'svg-inline-react';

import LastNews from '../../components/LastNews/LastNews';

import { MainContainer, Search } from './styles';

import searchicon from '../../assets/svgs/search';

const Main = () => {
  const [search, setSearch] = useState('');
  return (
    <MainContainer>
      <Search>
        <div>
          <input placeholder='Find a news' value={search} onChange={e => setSearch(e.target.value)} />
          <Inline src={searchicon} />
        </div>
      </Search>
      {
        (search === '')
          ?
          <LastNews />
          :
          <></>
      }
    </MainContainer>
  );
};

export default Main;
