// import './components/blogPost/blogpost.modules.css'
import { useEffect, useState } from 'react' 
import axios from 'axios'
import './blogpost.modules.css'


function BlogPost({post}) {

  // const [singlePost, setSinglePost] = useState([])

  // useEffect(() => {
  //     const getPost = async () => {
  //         const res = await axios.get(`https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/${post._id}`);
  //         console.log(res.data) 
  //         return setSinglePost(res.data)
  // }
  //     getPost()
  // }, [post._id])


    return (
      <div className="new">
          <div className="blogpost-container">
          <div className="blogImage-container">
  
      <img 
      // src={singlePost.jetpack_featured_media_url} 
      src='https://brooksandblake.com/blogapis/wp-content/uploads/2019/04/It-is-official-PSEM-and-NUGA-sign-HiSL-MoU.jpeg'
      alt='Rear view of modern home with pool' 
      h='200px'
      w='200px'
      />


      <div className="blogPost-content-container">

        <span className="title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
        <span className='post-caption'>
        Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.
        </span>

        </div>

    </div>
    </div>
      </div>
        

    );
  }
  
  export default BlogPost;
  

      