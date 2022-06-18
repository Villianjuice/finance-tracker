import React from 'react'

export const BlogList = ({blogList}) => {
  return (
    <ul style={{width: '700px', margin: '10px auto'}}>
      {blogList.map(blog => 
        <li style={{}}>
          <h3>{blog.title}</h3>
          <p>{blog.text}</p>
        </li>
      )}
    </ul>
  )
}
