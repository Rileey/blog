import { useState, useEffect } from 'react'
import BlogPost from '../components/blogPost/BlogPost'
import NavBar from '../components/navBar/NavBar.js'
import BlogVideo from '../components/blogVideo/BlogVideo.js'
import { Link } from "react-router-dom";
import './landingpage.modules.css'
import axios from 'axios'
import play from '../images/Playbutton.svg'

function LandingPage({post}) {
        


// const dummyData = [
//     {
//         id: 1,
//         title: 'Your mum',
//         excerpt: 'I am having issues with this Api, why??',
//         content: 'Can someone please help me'
//     },
//     {
//         id: 2,
//         title: 'Your Dad',
//         excerpt: 'I am having issues with this Api, why??',
//         content: 'Can someone please help me'
//     },
//     {
//         id: 3,
//         title: 'Your Sister',
//         excerpt: 'I am having issues with this Api, why??',
//         content: 'Can someone please help me'
//     }
// ]




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

                    

                     {/* <BlogPost key={post.id} post={post} /> */}
                     {
                        post.map((blog)=> (
                        <Link to={`/post/${blog.id}`}>
                         <BlogPost key={blog.id} blog={blog} /> 
                        </Link>
                        ))
                     } 
                    


            {/* <Link to={'/post'}>
            <BlogPost />
            </Link>
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost /> */}
            
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
                        <img className="small-playbutton" src={play} alt="" />

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
                        <img className="playbutton" src={play} alt="" />    
            
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

    <div className="blog-list-swipe">
        {
          post.map((blog)=> (
            <BlogPost key={blog.id} blog={blog} />
        ))  
        }
      
    </div>
    </div>
    </>

    );
  }
  
  export default LandingPage;