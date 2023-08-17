import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { useState, useEffect } from 'react';
import moment from 'moment';

const BlogCard = (props) => {
  const [date, setDate] = useState();

  useEffect(() => {
    setDate(moment(props.post.timestamp).format('MMM Do YYYY'));
  }, []);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.post.title}
        </Typography>

        <Typography sx={{ mb: 0.5, fontWeight: 'bold', fontSize: '0.8rem' }}>
          <Link
            href={`/authors/${props.post.author._id}`}
          >{`${props.post.author.first_name} ${props.post.author.family_name}`}</Link>
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: '0.8rem' }} color="text.">
          {date}
        </Typography>
        <Typography variant="body2">{props.post.body}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link href={`posts/${props.post._id}`}>Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
