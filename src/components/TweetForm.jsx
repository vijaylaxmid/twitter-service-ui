/**
 author: Vijaylaxmi Nagurkar
*/

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TweetForm = ({ saveTweet }) => {
  const [value, setValue] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        saveTweet(value);
      }}
    >
      <div className="tweet-form">
          <TextField
            variant="outlined"
            placeholder="What's on your mind?"
            label="Create Tweet"
            multiline
            rows="3"
            margin="normal"
            onChange={(event) => {
              setValue(event.target.value);
            }}
            value={value}
          />
          <Button variant="contained" color="primary" type="submit">
            Create
          </Button>
      </div>
    </form>
  );
};

export default TweetForm;
