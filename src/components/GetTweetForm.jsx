
/**
 author: Vijaylaxmi Nagurkar
*/

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const GetTweetForm = ({ getTweet }) => {
  const [value, setValue] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        getTweet(value);
      }}
    >
      <div className="tweet-form">
          <TextField
            variant="outlined"
            placeholder="Enter tweet ID"
            label="Get Tweet"
            margin="normal"
            onChange={(event) => {
              setValue(event.target.value);
            }}
            value={value}
          />
          <Button variant="contained" color="primary" type="submit">
            Get
          </Button>
      </div>
    </form>
  );
};

export default GetTweetForm;
