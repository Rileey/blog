import { useEffect, useState } from 'react'
import BlogPost from '../components/blogPost/BlogPost'
import NavBar from '../components/navBar/NavBar.js'
import BlogVideo from '../components/blogVideo/BlogVideo.js'
import { Link } from "react-router-dom";
import './landingpage.modules.css'
import axios from 'axios'

function LandingPage({theme}) {

    const [posts, setPosts] = useState([])

  useEffect(() => {
      const getPosts = async () => {
          const res = await axios.get('https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/')
          try {
            console.log(res.data) 
            return setPosts(res.data)
          } catch (err) {
            console.log(err)
          }
        }
      getPosts()
  }, [])



    return (
        <>
      <NavBar />
      <div className="landing-container">    
      <div className="categoryName">
        <span className="category">
            Category Name
        </span>
        <div className="moreVideos">
        <span className="cap">
          More Videos
        </span>
          <img src='./arrowright.svg' alt='' />
        </div>
    </div>
        <div className="blog-list">
            
            {/* 
            somthing seems to be wrong with your API. It says your account has been suspended
            I'm just going to go ahead and focus on the page design.
            */}

            {/* {
                could not map the component because your API isn't working.
                posts.map((post)=> {
                    return(
                    <BlogPost key={post.id} post={post} />
                    )
                })
            } */}
            <Link to={'/post'}>
            <BlogPost />
            </Link>
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            
        </div>
        
     <div className="categoryName">
        <span className="category">
            Category Name
        </span>
        <div className="moreVideos">
        <span className="cap">
          More Videos
        </span>
          <img src='./arrowright.svg' alt='' />
        </div>
    </div>
 
        <div className="blogVideoLayout">
            <div className="largeBlogPost">
                <div className="video">
                <BlogVideo />
                </div>
                <div className="blogContent">
                    <div className="write-up">
                        <span className="title">
                            Donec consequat ipsum ut pretium ullamcorper.
                        </span>
                        <span className="caption">
                            Nulla quis egestas ipsum. Quisque in mattis lacus. 
                            Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.
                        </span>
                    </div>

                </div>
                
            </div>
            <div className="littleBlogPost">
                <div className="littleBlogPostOne">
                    <div className="smallVids">
                    <video 
                        src="https://res.cloudinary.com/rileey/video/upload/v1646869910/views/2022-03-09T23-50-49.473ZPressure%20%28Music%20Video%29.MP4.mp4"
                        className='small-video' 
                        type='video/mp4'
                        // autoplay="true"
                        controls
                        muted
                        h='100%'
                        
                        >
            
                    </video>
                    <div className="write-up-two">
                        <span className="title-two">
                            Donec consequat ipsum ut pretium ullamcorper.
                        </span>
                        <span className="caption-two">
                            Nulla quis egestas ipsum. Quisque in mattis lacus. 
                            Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.
                        </span>
                    </div>
                    </div>
                </div>
                <div className="littleBlogPostTwo">
                    <div className="smallVids">
                    <video 
                        src="https://res.cloudinary.com/rileey/video/upload/v1646869910/views/2022-03-09T23-50-49.473ZPressure%20%28Music%20Video%29.MP4.mp4"
                        className='small-video' 
                        type='video/mp4'
                        // autoplay="true"
                        controls
                        muted
                        h='100%'
                        >
            
                    </video>
                    <div className="write-up-two">
                        <span className="title-two">
                            Donec consequat ipsum ut pretium ullamcorper.
                        </span>
                        <span className="caption-two">
                            Nulla quis egestas ipsum. Quisque in mattis lacus. 
                            Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
                
     
  
        <div className="categoryName">
        <span className="category">
            Category Name
        </span>
        <div className="moreVideos">
        <span className="cap">
          More Videos
        </span>
          <img src='./arrowright.svg' alt='' />
        </div>
    </div>

    <div className="blog-list">
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </div>
    </div>
    </>

    );
  }
  
  export default LandingPage;