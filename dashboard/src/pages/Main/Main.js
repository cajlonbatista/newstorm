import React, { useState } from 'react';

import { CircleLoading } from 'react-loadingg';
import Inline from 'svg-inline-react';
import axios from 'axios';

import LastNews from '../../components/News/News';

import { MainContainer, Search } from './styles';

import searchicon from '../../assets/svgs/search';

const Main = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const onSearch = () => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_URL}api/search?tag=${search}`)
      .then(res => {
        setLoading(false);
        console.log(res.data.docs);
        setResult(res.data);
      }).catch(err => console.log(err));
  };

  return (
    <MainContainer>
      <Search>
        <div>
          <input placeholder='Find a news' value={search} onChange={e => setSearch(e.target.value)} onKeyDown={e => {
            if (e.keyCode === 13) {
              onSearch();
            }
          }} />
          <Inline src={searchicon} />
        </div>
        <div></div>
      </Search>
      {
        (loading === false)
          ?
          (result === undefined || result.length === 0)
            ?
            <LastNews />
            :
            <></>
          :
          <CircleLoading />
      }
    </MainContainer>
  );
};

export default Main;
