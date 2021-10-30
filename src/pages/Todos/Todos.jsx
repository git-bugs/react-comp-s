import axios from 'axios'
import { useEffect, useState } from 'react'
import { Pagination } from '../../components/Pagination/Pagination'
import { Loader } from '../../components/Loader/Loader'
import './todos.scss'

export const Todos = () => {
  const [todos, setTodos] = useState([])
  const [todosLoading, setTodosLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    (async () => {
      setTodosLoading(true)
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}`)
      setTodos(res.data)
      setTotal(Math.ceil(res.headers['x-total-count'] / 10))
      setTodosLoading(false)
    })()
  }, [page])

  return (
    <section className="todos">
      <div className="container">
        <div className="todos__inner">
          {todosLoading && <Loader />}
          {
            todos.map(todo =>
              <div className="todo__item" key={todo.id}>
                <span>{todo.id}.</span> {todo.title}
              </div>
            )
          }
        </div>
        <Pagination page={+page} total={total} setPage={setPage}/>
      </div>
    </section>
  )
}
