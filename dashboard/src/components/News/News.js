import React, { useState } from 'react';

import useSWR from 'swr';
import axios from 'axios';

import Inline from 'svg-inline-react';
import { CircleLoading } from 'react-loadingg';
import { useTheme } from '@material-ui/core/styles';
import { Dialog, useMediaQuery } from '@material-ui/core';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import ViewError from '../ViewError/ViewError';
import { LastNewsContainer, ViewCard } from './styles';
import '@szhsin/react-menu/dist/index.css';

import { moreNow } from '../../assets/svgs/more';
import destroy from '../../assets/svgs/delete';
import edit from '../../assets/svgs/edit';


const News = ({ article }) => {
  const { data, error } = useSWR(`${process.env.REACT_APP_URL}api/articles`, axios);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorDelete, setAnchorDelete] = useState(false);

  const onDeleteDialog = () => {
    setAnchorDelete(true);
  };

  const offDeleteDialog = () => {
    setAnchorDelete(false);
  };

  const deleteNews = (id) => {
    axios.delete(`${process.env.REACT_APP_URL}api/articles/${id}`).then(res => {
      offDeleteDialog();
    }).catch(err => console.log(err));
  }

  if (error) {
    return (
      <LastNewsContainer>
        <ViewError />
      </LastNewsContainer>
    );
  } else if (!data) {
    return (
      <CircleLoading />
    );
  }

  return (
    <LastNewsContainer>
      <div>
        <h1>{article === undefined ? "Last News" : "Search results"}</h1>
      </div>
      <article>
        {
          (article === undefined)
            ?
            data.data.docs.map(article => (
              (data.data.docs.indexOf(article) === 0)
                ?
                <div key={article._id} style={{ background: 'transparent', border: '2px solid #20BFA9' }}>
                  <span>{new Date(article.created).toLocaleDateString()}</span>
                  <h1>{article.title}</h1>
                  <Menu align='center' menuButton={<MenuButton><Inline src={moreNow} /></MenuButton>}>
                    <MenuItem>
                      <Inline src={edit} />
                    Edit
                  </MenuItem>
                    <MenuItem onClick={onDeleteDialog}>
                      <Inline src={destroy} />
                    Delete
                  </MenuItem>
                  </Menu>
                  <article style={{ background: `url(${article.cap})`}}></article>
                  <Dialog open={anchorDelete} fullScreen={fullScreen} onClose={offDeleteDialog} style={{ borderRadius: 10 }}>
                    <ViewCard>
                      <header>
                        <Inline src={destroy} />
                        <h1>Do you really want to delete this news?</h1>
                      </header>
                      <footer>
                        <button onClick={offDeleteDialog}>Cancel</button>
                        <button onClick={() => deleteNews(article._id)}>Delete</button>
                      </footer>
                    </ViewCard>
                  </Dialog>
                </div>
                :
                <div key={article._id}>
                  <span>{new Date(article.created).toLocaleDateString()}</span>
                  <h1>{article.title}</h1>
                  <Menu align='center' menuButton={<MenuButton><Inline src={moreNow} /></MenuButton>}>
                    <MenuItem onClick={onDeleteDialog}>
                      <Inline src={edit} />
                    Edit
                  </MenuItem>
                    <MenuItem>
                      <Inline src={destroy} onClick={onDeleteDialog} />
                    Delete
                  </MenuItem>
                  </Menu>
                  <article style={{ background: `url(${article.cap})` }}></article>
                  <Dialog open={anchorDelete} fullScreen={fullScreen} onClose={offDeleteDialog} style={{ borderRadius: 10 }}>
                    <ViewCard>
                      <header>
                        <Inline src={destroy} />
                        <h1>Do you really want to delete this news?</h1>
                      </header>
                      <footer>
                        <button onClick={offDeleteDialog}>Cancel</button>
                        <button onClick={() => deleteNews(article._id)}>Delete</button>
                      </footer>
                    </ViewCard>
                  </Dialog>
                </div>
            ))
            :
            article.map(article => (
              (data.data.docs.indexOf(article) === 0)
                ?
                <div key={article._id} style={{ background: 'transparent', border: '2px solid #20BFA9' }}>
                  <span style={{ color: '#FFB6B2' }}>{new Date(article.created).toLocaleDateString()}</span>
                  <h1 style={{ color: '#FFF' }}>{article.title}</h1>
                  <Menu align='center' menuButton={<MenuButton><Inline src={moreNow} /></MenuButton>}>
                    <MenuItem>
                      <Inline src={edit} />
                    Edit
                  </MenuItem>
                    <MenuItem onClick={onDeleteDialog}>
                      <Inline src={destroy} />
                    Delete
                  </MenuItem>
                  </Menu>
                  <article style={{ background: `url(${article.cap})` }}></article>
                  <Dialog open={anchorDelete} fullScreen={fullScreen} onClose={offDeleteDialog} style={{ borderRadius: 10 }}>
                    <ViewCard>
                      <header>
                        <Inline src={destroy} />
                        <h1>Do you really want to delete this news?</h1>
                      </header>
                      <footer>
                        <button onClick={offDeleteDialog}>Cancel</button>
                        <button onClick={() => deleteNews(article._id)}>Delete</button>
                      </footer>
                    </ViewCard>
                  </Dialog>
                </div>
                :
                <div key={article._id}>
                  <span>{new Date(article.created).toLocaleDateString()}</span>
                  <h1>{article.title}</h1>
                  <Menu align='center' menuButton={<MenuButton><Inline src={moreNow} /></MenuButton>}>
                    <MenuItem>
                      <Inline src={edit} />
                    Edit
                  </MenuItem >
                    <MenuItem onClick={onDeleteDialog}>
                      <Inline src={destroy} />
                    Delete
                  </MenuItem>
                  </Menu>
                  <article style={{ background: `url(${article.cap})` }}></article>
                  <Dialog open={anchorDelete} fullScreen={fullScreen} onClose={offDeleteDialog} style={{ borderRadius: 10 }}>
                    <ViewCard>
                      <header>
                        <Inline src={destroy} />
                        <h1>Do you really want to delete this news?</h1>
                      </header>
                      <footer>
                        <button onClick={offDeleteDialog}>Cancel</button>
                        <button onClick={() => deleteNews(article._id)}>Delete</button>
                      </footer>
                    </ViewCard>
                  </Dialog>
                </div>
            ))
        }
      </article>
    </LastNewsContainer>
  );
};

export default News;