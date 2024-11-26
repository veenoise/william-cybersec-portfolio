import { useState } from "react"
import { useEffect } from "react"
import Card from "../Card";


const Blog = () => {
  const [blog, setBlog] = useState();

  useEffect(() => {
    fetch("https://www.wisp.blog/api/v1/cm2rlq50v0000n9wxatlmwy43/posts")
    .then(res => res.json())
    .then(fetchBlogs => setBlog(fetchBlogs.posts))
  }, [])  

  return (
    <section className="container" style={{minHeight: "calc(100vh - 56px)", marginTop: "56px", overflow: "hidden"}}>
      <div className="mt-3">
        <h2 className="mb-4">read my blogs</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          { blog ? 
            blog.map((content, id) => {
              return (
                <Card 
                  key={id}
                  imgSrc={ content.image ? content.image : "https://user-images.githubusercontent.com/167693/36168584-8f69a7fc-10c7-11e8-8940-21c3e9568286.png" }
                  altText='img of seen'
                  title={ content.title }
                  tags={ content.tags ? content.tags.map(tags => {return(tags.name)}) : "" }
                  description={ content.publishedAt }
                  btnRedirect='https://github.com/veenoise/seen'
                />
              )
            }) : 
            <></>
          }
        </div>
      </div>
      
    </section>
  )
}

export default Blog