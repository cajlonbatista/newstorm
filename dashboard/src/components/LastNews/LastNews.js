import React from 'react';

import useSWR from 'swr';
import axios from 'axios';
import Inline from 'svg-inline-react';

import { LastNewsContainer } from './styles';

import { moreNow, moreLast } from '../../assets/svgs/more';

const LastNews = () => {
  const { data, error } = useSWR(`${process.env.REACT_APP_URL}api/articles`, axios);
  if (error) {

  }
  if (!data) {
    return (
      <h1>Loading...</h1>
    );
  }
  return (
    <LastNewsContainer>
      <div>
        <h1>Last News</h1>
        <div></div>
        <span>{new Date().toLocaleDateString()}</span>
      </div>
      <article>
        {
          data.data.docs.map(article => (
            (data.data.docs.indexOf(article) === 0)
              ?
              <div style={{ background: '#F1554C' }}>
                <span style={{ color: '#FFB6B2' }}>{new Date(article.created).toLocaleDateString()}</span>
                <h1 style={{ color: '#FFF' }}>{article.title}</h1>
                <Inline src={moreNow} />
              </div>
              :
              <div>
                <span>{new Date(article.created).toLocaleDateString()}</span>
                <h1>{article.title}</h1>
                <Inline src={moreLast} />
              </div>
          ))
        }
      </article>
    </LastNewsContainer>
  );
};

export default LastNews;