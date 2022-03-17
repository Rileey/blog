// import './components/blogPost/blogpost.modules.css'
import { useEffect, useState, } from 'react' 
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './blogpost.modules.css'
import DOMPurify from "dompurify";


function BlogPost({blog}) {


  // const [post, setPost] = useState([])

  // useEffect(() => {
  //     const getPost = async () => {
  //         const res = await axios.get(`https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/`);
  //         console.log(res.data) 
  //         return setPost(res.data)
  // }
  //     getPost()
  // }, [])


    return (
      <>
        {/* {
          post.map((blog) => (
             <Link to={`/post/${blog.id}`}>  */}
            <div className="blogpost-container">
            <div className="blogImage-container">
    
        <img 
        className="post-image"
        src={blog.jetpack_featured_media_url} 
        // src='https://brooksandblake.com/blogapis/wp-content/uploads/2019/04/It-is-official-PSEM-and-NUGA-sign-HiSL-MoU.jpeg'
        alt='Rear view of modern home with pool' 
        />

  
  
        <div className="blogPost-content-container">
  
          <span className="title">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
            {blog.title.rendered}
            {/* {data.title} */}
          </span>
          <span className='post-caption' dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.excerpt.rendered),
              }}>
          {/* Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas. */}
          {/* {blog.excerpt.rendered} */}
          {/* {data.excerpt} */}

          </span>
  
          </div>
  
      </div>
      </div>
      {/* </Link>
          ))
        } */}
       
      </>
        

    );
  }
  
  export default BlogPost;
  

      