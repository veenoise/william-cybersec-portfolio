import { useState } from "react"
import { useEffect } from "react"
import Card from "../Card";
import { wisp } from '../lib/wisp';
import { useSearchParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Pagination from "../components/Pagination";

const Blog = () => {
  let [searchParams] = useSearchParams();
  const [blog, setBlog] = useState();
  const [totalPage, setTotalPage] = useState();
  const [loading, setLoading] = useState(false);
  const [pageClick, setPageClick] = useState(false);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]


  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const wispBlogListFetch = await wisp.getPosts({
        limit: 6, 
        page: `${searchParams.get("page")}`
      });  
      setBlog(wispBlogListFetch.posts);
      setTotalPage(wispBlogListFetch.pagination.totalPages);
      setLoading(false);
    }
    fetchData();
  }, [pageClick])  

  return (
    <section className="container" style={{minHeight: "calc(100vh - 56px)", marginTop: "56px", overflow: "hidden"}}>
      <div className="my-4">
        <h2 className="mb-4">read my blogs</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          { !loading && blog ? 
            blog.map((content, id) => {
              return (
                <Card 
                  key={id}
                  imgSrc={ content.image ? content.image : "https://i.kym-cdn.com/entries/icons/original/000/021/807/ig9OoyenpxqdCQyABmOQBZDI0duHk2QZZmWg2Hxd4ro.jpg" }
                  altText='Blog post image'
                  title={ content.title }
                  tags={ content.tags ? content.tags.map(tags => {return(`<${tags.name}>\t`)}) : "" }
                  description={ `${months[new Date(content.publishedAt).getMonth()]} ${new Date(content.publishedAt).getDate()}, ${new Date(content.publishedAt).getFullYear()}` }
                  btnRedirect={`/#/blogs/${content.slug}`}
                />
              )
            }) : 
            <PulseLoader 
              color="#32CD32"
              size={8}
              speedMultiplier={1.5}
              style={{
                width: "100%",
                minHeight: "calc(100vh - 56px - 60px)",
                textAlign: "center"
              }}
            />
          }
        </div>
      </div>
      <Pagination totalPage={totalPage} currentPage={Number(searchParams.get("page"))} setPageClick={setPageClick} pageClick={pageClick} />
    </section>
  )
}

export default Blog