import React from 'react'
import './blog.css'
import Article from '../../components/article/Article'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

function Blog() {
  return (
    <div className='gpt__blog section__padding' id="blog">
      <div className='gpt__blog-heading'>
        <h1 className='gradient__text'>Know about AI Revolution, We are blogging about it.</h1>
      </div>
      <div className='gpt__blog-container'>
        <div className='gpt__blog-container_groupA'>
          <Article imgUrl={blog01} date={'Sep 25, 2023'} title={'How to Use GPT For Boosting Your Business ?'}/>
        </div>
        <div className='gpt__blog-container_groupB'>
          <Article imgUrl={blog02} date={'Sep 25, 2023'} title={'How to Use GPT For Boosting Your Business ?'}/>
          <Article imgUrl={blog03} date={'Sep 25, 2023'} title={'How to Use GPT For Boosting Your Business ?'}/>
          <Article imgUrl={blog04} date={'Sep 25, 2023'} title={'How to Use GPT For Boosting Your Business ?'}/>
          <Article imgUrl={blog05} date={'Sep 25, 2023'} title={'How to Use GPT For Boosting Your Business ?'}/>
        </div>
      </div>
    </div>
  )
}

export default Blog