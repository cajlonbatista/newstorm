import React, { useState } from 'react';

import { CircleLoading } from 'react-loadingg';
import Inline from 'svg-inline-react';
import axios from 'axios';

import News from '../../components/News/News';

import { MainContainer, Search } from './styles';

import searchicon from '../../assets/svg/search';
import ViewError from '../../components/ViewError/ViewError';

const Main = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(`${process.env.REACT_APP_URL}api/search?tag=${search}`)
      .then(res => {
        setLoading(false);
        setResult(res.data);
      }).catch(err => {
        setLoading(false);
        return (
          <MainContainer>
            <Search>
              <form onSubmit={onSearch}>
                <input placeholder='Find a news' value={search} onChange={e => setSearch(e.target.value)} />
                <Inline src={searchicon} />
              </form>
              <div></div>
            </Search>
            <ViewError />
          </MainContainer>
        )
      });
  };

  return (
    <MainContainer>
      <Search>
        <form onSubmit={onSearch}>
          <input placeholder='Find a news' value={search} onChange={e => setSearch(e.target.value)} />
          <Inline src={searchicon} />
        </form>
        <div></div>
      </Search>
      {
        (loading === false)
          ?
          (result === undefined || result.length === 0)
            ?
            <News />
            :
            <News article={result} />
          :
          <CircleLoading />
      }
    </MainContainer>
  );
};

export default Main;
