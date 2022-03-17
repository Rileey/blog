import { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/navBar/NavBar.js';
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import linkedin from '../images/linkedin.svg'
import whatsapp from '../images/whatsapp.svg'
import userlogo from '../images/userlogo.svg'
import calendarlogo from '../images/calendarlogo.svg'
import clock from '../images/clock.svg'
import Comment from '../components/comment/comment.js'
import Form from '../components/form/form.js'
import TopStories from '../components/topStories/TopStories.js'
import './singlepost.modules.css'
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';




function SinglePost({post}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const {id} = useParams()
    const [page, setPage] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (comments){
                await axios.post(`https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/${id}`, {
                    name, comments,
                })
            } else {
                alert('please make a comment')
            }
           
          
        } catch (err) {
          console.log(err)
        }



    }


    

    useEffect(() => {
        const getPage = async () => {
            const res = await axios.get(`https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/${id}`)
            try {
              setPage(res.data)
            } catch (err) {
              console.log(err)
            }
          }
        getPage()
    }, [id])  

 
        const postComment = async () => {
           
          }
        postComment() 


    return (
      < >
        <NavBar />
        <div className="singlepost-container"> 
            <span className="singlepost-title">   
           {page.title?.rendered}
            </span>
            <div className="share">
                <span className="share-post">
                Share This Post:
                </span>

                <div className="social">    
                    <img className="social-logos" src={facebook} alt="" />
                    <img className="social-logos" src={twitter} alt="" />
                    <img className="social-logos" src={whatsapp} alt="" />
                    <img className="social-logos" src={linkedin} alt="" />
                </div>    
            </div>
            <div className="jumbotron-container">    
                <img className="jumbotron" src={page.jetpack_featured_media_url} alt="post"  />
                <span className="jumbo-tag">
                    Financial Writer
                </span>
                <div className="jumbo-info">
                    <div className="logo-sub">
                        <img className="jumbo-logo" src={userlogo} alt="" />
                        <span className="jumbo-caption">    
                            Solomon James
                        </span>    
                    </div>
                    <div className="logo-sub">
                        <img className="jumbo-logo" src={calendarlogo} alt="" />
                        <span className="jumbo-caption">    
                            1 March 2022
                        </span>    
                    </div>
                    <div className="logo-sub">
                        <img className="jumbo-logo" src={clock} alt="" />
                        <span className="jumbo-caption">    
                            6 Minutes Read
                        </span>    
                    </div>
                </div>
            </div>
            <div className="blog-content-container">    
            <span className='post-caption' dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(page.content?.rendered),
              }}>   
                
                </span>
            </div>
            <div>
                <span className="category">
                    Reader Comments
                </span>
            </div>
            <div className="blog-engagement">    
                <Comment />
    <form className="form-container" onSubmit={handleSubmit}>  
        <span className="form-heading">
          Join the discussion
        </span>
        <div className="form-body-container">  
          <input type="text" name="comments" className="input-comments" value={comments} placeholder='Write your comment' onChange={(e)=> setComments(e.target.value)}/>
          <div className="form-content">  
            <div className="form-middle">  
              <div className="form-item">
                <span className="formName">Your Name</span>
                <input type="text" name="name" value={name} id="" className="input-name" placeholder='Name' onChange={(e)=> setName(e.target.value)}
                />
              </div>
              <div className="form-item">
                <span className="formName">Email Address</span>
                <input type="text" name="email" id="" value={email} className="input-name" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
            </div>  
          </div>  
          <div>  
            <input className='form-button' type="button" value="Submit" />
          </div>  
        </div>  
      </form>
            </div>    
            <div>
                <span className="category">
                    Top Stories
                </span>
            </div>
            <div className="top-stories-container">    
                <div className="topStories"> 
                {post.map((top)=>(
                    <TopStories key={top.id} top={top}/>
                ))}  
                </div>    
            </div>    
        </div>    
      </>
    );
}
  
export default SinglePost;
  