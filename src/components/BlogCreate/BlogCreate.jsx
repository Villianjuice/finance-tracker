import { useState } from 'react'
import styles from './BlogCreate.module.css'

export const BlogCreate = ({onCreateBlog}) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const onCreate= (e) => {
    e.preventDefault()
    const newBlog = {title, text}
    onCreateBlog(newBlog)
  }
  return (
    <form onSubmit={onCreate} className={styles['login-form']}>
      <h2>Blog</h2>
      <label>
        <span>title</span>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="title" />
      </label>
      <label>
        <span>text</span>
        <textarea  value={text} onChange={(e) => setText(e.target.value)} type="text" className={styles.text}/>
      </label>
      <button className="btn">Submit</button>
    </form>
  );
}
