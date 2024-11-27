import { Link } from "react-router-dom"

const Pagination = ({ totalPage, currentPage, setPageClick, pageClick }) => {
  const pages = Array.from({length: totalPage}, (v, k) => k+1); 

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination d-flex justify-content-center">
        {
          currentPage > 1 ?
          <li className="page-item">
            <Link className="page-link" to={`/blogs?page=${currentPage - 1}`} aria-label="Previous" onClick={() => setPageClick(!pageClick)}>
              <span aria-hidden="true">&laquo;</span>
            </Link>
          </li> :
          <></>
        }

        {
          pages.map(elem => {
            return (
              <li key={elem} className="page-item"><Link className="page-link" to={`/blogs?page=${elem}`} onClick={() => setPageClick(!pageClick)}>{elem}</Link></li>
            )
          })
        }
        

        {
          currentPage < totalPage ?
          <li className="page-item">
            <Link className="page-link" to={`/blogs?page=${currentPage + 1}`} aria-label="Next" onClick={() => setPageClick(!pageClick)}>
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li> :
          <></>
        }
        
      </ul>
    </nav>
  )
}

export default Pagination
