import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Redirect, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';

import { CircleLoading } from 'react-loadingg';
import { MobileStepper, Tab, Tabs } from '@material-ui/core';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { EditContainer, useStyles } from './styles';

import sucess from '../../assets/img/sucess.png';
import error from '../../assets/img/error.png';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#20BFA9',
    },
    secondary: {
      main: '#20BFA9',
    }
  },
  typography: {
    fontFamily: ['Inter, sans-serif']
  }
})

const Edit = () => {
  const { id } = useParams();

  const { progress } = useStyles();

  const [step, setStep] = useState(1);
  const [tab, setTab] = useState(0);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cap, setCap] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}api/articles/${id}`)
      .then(res => {
        setTitle(res.data.title);
        setDescription(res.data.description);
        setContent(res.data.content);
        setAuthor(res.data.author);
        setCap(res.data.cap);
        setLoading(false);
      }).catch(err => {
        console.log(err);
      });
  }, [id]);

  if (loading) {
    return (
      <CircleLoading />
    );
  }
  if (finished) {
    return (
      <Redirect to='/' />
    )
  }

  const onChangeTab = (e, value) => {
    setTab(value);
  }

  const onPassedStep = e => {
    setStep(step + 1);
    e.preventDefault();
    console.log(title);
  }

  const putNews = (e) => {
    e.preventDefault();

    axios.put(`${process.env.REACT_APP_URL}api/articles/${id}`, {
      title,
      content,
      description,
      author,
      cap,
    }).then(() => {
      new Notification('Success', {
        body: 'The news has been updated !',
        icon: sucess
      });
      setFinished(true);
    }).catch(() => {
      new Notification('Something went wrong', {
        body: 'Could not update the news !',
        icon: error
      });
    })
  }

  return (
    <EditContainer>
      <ThemeProvider theme={theme}>
        <div>
          <MobileStepper
            variant='progress'
            steps={3}
            position='static'
            color='primary'
            activeStep={step}
            className={progress}
          >
          </MobileStepper>
        </div>
      </ThemeProvider>
      {
        (step === 1)
          ? <form onSubmit={onPassedStep}>
            <div>
              <label>Title</label>
              <input value={title} required onChange={e => {
                setTitle(e.target.value);
              }} />
            </div>
            <div>
              <label>Description</label>
              <input value={description} required onChange={e => {
                setDescription(e.target.value);
              }} />
            </div>
            <div>
              <label>Author</label>
              <input value={author} required onChange={e => {
                setAuthor(e.target.value);
              }} />
            </div>
            <div>
              <label>Cap</label>
              <input value={cap} required onChange={e => {
                setCap(e.target.value);
              }} />
            </div>
            <button>Next</button>
          </form>
          :
          <section>
            <form onSubmit={putNews}>
              <ThemeProvider theme={theme}>
                <Tabs value={tab} onChange={onChangeTab} centered>
                  <Tab label="Content" />
                  <Tab label="Preview" />
                </Tabs>
              </ThemeProvider>
              {
                (tab == 0)
                  ?
                  <main>
                    <textarea value={content} onChange={e => {
                      setContent(e.target.value);
                    }}></textarea>
                  </main>
                  :
                  <main>
                    <div>
                      <Markdown children={content} />
                    </div>
                  </main>
              }
              <button>Finish</button>
              <button type='button' onClick={() => setStep(1)}>Back</button>
            </form>
          </section>
      }

    </EditContainer>
  );
};

export default Edit;
