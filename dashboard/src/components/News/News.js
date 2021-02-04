import React, { useState } from 'react';

import useSWR from 'swr';
import axios from 'axios';
import Inline from 'svg-inline-react';
import { CircleLoading } from 'react-loadingg';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';

import { LastNewsContainer } from './styles';
import '@szhsin/react-menu/dist/index.css';

import { moreNow, moreLast } from '../../assets/svgs/more';
import destroy from '../../assets/svgs/delete';
import edit from '../../assets/svgs/edit';


const News = ({ article }) => {
  const [articles, setArticles] = useState(article === undefined ? [] : article);

  const { data, error } = useSWR(`${process.env.REACT_APP_URL}api/articles`, axios);
  if (error) {

  }else if (!data) {
    return (
      <CircleLoading />
    );
  } else if(articles === undefined && data === []) {
    setArticles(data.data.docs)
  }

  return (
    <LastNewsContainer>
      <div>
        <h1>Last News</h1>
      </div>
      <article>
        {
          articles.map(article => (
            (data.data.docs.indexOf(article) === 0)
              ?
              <div key={article._id} style={{ background: '#F1554C' }}>
                <span style={{ color: '#FFB6B2' }}>{new Date(article.created).toLocaleDateString()}</span>
                <h1 style={{ color: '#FFF' }}>{article.title}</h1>
                <Menu align='center' menuButton={<MenuButton><Inline src={moreNow} /></MenuButton>}>
                  <MenuItem>
                    <Inline src={edit} />
                    Edit
                  </MenuItem>
                  <MenuItem>
                    <Inline src={destroy} />
                    Delete
                  </MenuItem>
                </Menu>
                <img src={article.cap} alt={article.title} />
              </div>
              :
              <div key={article._id}>
                <span>{new Date(article.created).toLocaleDateString()}</span>
                <h1>{article.title}</h1>
                <Menu align='center' menuButton={<MenuButton><Inline src={moreLast} /></MenuButton>}>
                  <MenuItem>
                    <Inline src={edit} />
                    Edit
                  </MenuItem>
                  <MenuItem>
                    <Inline src={destroy} />
                    Delete
                  </MenuItem>
                </Menu>
                <img src={article.cap} alt={article.title} />
              </div>
          ))
        }
      </article>
    </LastNewsContainer>
  );
};

export default News;