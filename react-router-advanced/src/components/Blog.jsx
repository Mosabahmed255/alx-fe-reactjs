import React from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const { postId } = useParams();

  return <div>Displaying post with ID: {postId}</div>;
};

export default Blog;
