import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TweetList = ({ tweets, deleteTweet }) => (
  <div className="tweet-list"><List>
    {tweets.map((tweet, index) => (
      <ListItem key={tweet.id}>
        <ListItemText primary={tweet.id} />
        <ListItemText primary={tweet.text} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={() => {
              deleteTweet(tweet.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
  </div>
);

export default TweetList;
