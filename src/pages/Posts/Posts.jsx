import axios from 'axios'
import { useEffect, useState } from 'react'
import { Loader } from '../../components/Loader/Loader'
import './posts.scss'


export const Posts = () => {
  const [posts, setPosts] = useState([])
  const [postsLoading, setPostsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    (async () => {
      setPostsLoading(true)
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
      setPosts(res.data)
      setTotal(res.headers['x-total-count'])
      setPostsLoading(false)
    })()
  }, [page])

  return (
    <section className="posts">
      <div className="container">
        <div className="posts__inner">
          {postsLoading && <Loader />}
          {
            posts.map(post =>
              <div className="post__item" key={post.id}>
                <div className="post__title">{post.title}</div>
                <p className="post__body">{post.body}</p>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}
