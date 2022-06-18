import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BlogCreate } from '../../components/BlogCreate/BlogCreate';
import { BlogList } from '../../components/BlogList/BlogList';
import styles from './Home.module.css';

export const Home = () => {
  const [blogList, setBlogList] = useState([])
  const onCreateBlog = (blog) => {
    setBlogList(prev => [...prev, blog])
  }
  useEffect(() => {
    console.log(blogList);
  }, [blogList])
  return (
    <div>
      <BlogCreate onCreateBlog={onCreateBlog}/>
      <BlogList blogList={blogList}/>
    </div>
  );
};
