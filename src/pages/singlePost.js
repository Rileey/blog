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



function SinglePost() {

    return (
      < >
        <NavBar />
        <div className="singlepost-container"> 
            <span className="singlepost-title">   
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae iaculis nisi.
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
                <img className="jumbotron" src="https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2742&q=80" alt="post"  />
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
                <span className="blog-content">    
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae iaculis nisi. 
                Praesent varius diam nisi, sit amet mollis dolor pharetra sit amet. 
                Suspendisse porttitor viverra nunc nec ultrices. Nam venenatis quis massa at tempus. 
                Suspendisse pretium metus magna, et interdum dolor gravida luctus. 
                Fusce maximus nisi eros, eu malesuada ipsum ultrices vel. Nam in mi finibus, venenatis nisi tempor, feugiat massa. 

                Quisque elementum, mi vel sodales luctus, est nunc egestas tortor, eget accumsan sapien lorem vitae erat. 
                Curabitur a ex iaculis, posuere lorem at, varius urna. Nam iaculis viverra eros porta fringilla. 
                Nulla vulputate, orci eu convallis rutrum, metus felis euismod quam, quis faucibus mauris dolor eget quam. 
                Proin facilisis erat nunc, quis placerat erat tempor ut. Vestibulum fermentum a ligula id faucibus.

                Pellentesque maximus ipsum nunc, eleifend congue nisl faucibus ut. 
                Nulla ultricies augue ut viverra congue. Maecenas arcu metus, posuere sed orci ut, 
                convallis viverra eros. Proin in neque nisi. Proin eu nunc fringilla, dapibus nisi nec, pretium felis. 
                Sed aliquam dui est, auctor egestas turpis dictum a. Donec placerat eu orci eget cursus. 
                Mauris sodales iaculis mauris et feugiat. In aliquam mi lacinia massa egestas rutrum.
                </span>
            </div>
            <div>
                <span className="category">
                    Reader Comments
                </span>
            </div>
            <div className="blog-engagement">    
                <Comment />
                <Comment />
                <Form />
            </div>    
            <div>
                <span className="category">
                    Top Stories
                </span>
            </div>
            <div className="top-stories-container">    
                <div className="topStories">    
                    <TopStories />
                    <TopStories />
                    <TopStories />
                </div>    
            </div>    
        </div>    
      </>
    );
}
  
export default SinglePost;
  