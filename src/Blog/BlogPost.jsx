import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { wisp } from "../lib/wisp";
import { PulseLoader } from "react-spinners";

const BlogPost = () => {
  let { slug } = useParams();
  const [blog, setBlog] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const wispBlogFetch = await wisp.getPost(slug);
      setBlog(wispBlogFetch.post);
      console.log(wispBlogFetch)
    }
    fetchData();
  }, [])

  const setInnerHTML = () => {
    return {__html: blog.content};
  }

  return (
    <section className="container" style={{minHeight: "calc(100vh - 56px)", marginTop: "56px", overflow: "hidden"}}>
      <div className="mt-4">
        <h2 className="mb-4">
          { 
            blog ? 
            blog.title : 
            <div className="w-100 d-flex">
              <PulseLoader 
                color="#32CD32"
                size={8}
                speedMultiplier={1.5}
                style={{
                  width: "100%",
                  textAlign: "center",
                }}
              />
            </div>
          }
        </h2>
        {
          blog ? 
          <div dangerouslySetInnerHTML={setInnerHTML()}></div> :
          <></>
        }
      </div>
      
    </section>
  )
}

export default BlogPost