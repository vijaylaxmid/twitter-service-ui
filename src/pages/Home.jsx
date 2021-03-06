/**
 author: Vijaylaxmi Nagurkar
*/

import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import TweetForm from '../components/TweetForm.jsx';
import TweetList from '../components/TweetList.jsx';
import GetTweetForm from '../components/GetTweetForm.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    }
  }

  getTweet(id) {
    axios.get(`/tweet?id=${id}`)
      .then(res => {
        const tweet = res.data;
        this.setState({ tweets : [tweet] });
      }).catch(error => {
        alert(error.response.data.message)
      })
  }
  createTweet(text) {
    axios.post(`/tweet`, { text }).then((res) => {
      const tweet = res.data;
      this.setState({ tweets : [tweet, ...this.state.tweets] });
      alert("Created tweet with id:" + tweet.id + "and text: "+ text )
    }).catch(error => {
      alert(error.response.data.message)
    })
  }

  deleteTweet(id) {
    axios.delete(`/tweet?id=${id}`).then((res) => {
      this.setState({ tweets : this.state.tweets.filter(tweet => tweet.id !== id) });
      alert("Deleted tweet with id: "+id)
    }).catch(error => {
      alert(error.response.data.message)
    })
  }

  render () {
    return <div className="tweet-app">
      <Typography component="h3" variant="h3">
        Tweets
      </Typography>
      <div className="tweet-container">
        <div>
          <TweetForm saveTweet={(tweet)=> {
            this.createTweet(tweet)
          } } />
          <GetTweetForm getTweet={(id)=> {
            this.getTweet(id)
          } } />
        </div>
        <TweetList tweets={this.state.tweets}
          deleteTweet={
            (tweetId)=> {
              this.deleteTweet(tweetId)
            }
          }
        />
      </div>
    </div>
  }
}
