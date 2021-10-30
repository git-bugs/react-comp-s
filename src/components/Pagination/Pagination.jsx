import { useMemo } from 'react'
import './pagination.scss'


export const Pagination = ({ page, total, setPage }) => {

  const pages = useMemo(() => {
    const array = []
    if (total > 5) {
      if (page > 3) {
        if (page + 2 < total) {
          for (let i = page - 2; i <= page + 2; i++) {
            array.push(i)
          }
        } else {
          for (let i = total - 4; i <= total; i++) {
            array.push(i)
          }
        }
      } else {
        for (let i = 1; i <= 5; i++) {
          array.push(i)
        }
      }
    } else {
      for (let i = 1; i <= total; i++) {
        array.push(i)
      }
    }
    return array
  }, [page, total])

  return (
    <div className="users__pagination pagination">
      {
        pages.map((item) =>
          <div
            className={`users__pagination-item waves-effect ${item === page ? "active" : ""}`}
            key={item}
            onClick={() => setPage(item)}
          >
            {item}
          </div>
        )
      }
    </div>
  )
}

