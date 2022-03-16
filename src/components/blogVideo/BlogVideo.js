import play from '../../images/Playbutton.svg'
import './blogvideo.modules.css'


function BlogVideo() {
return (
    <>
        <video 
          src="https://res.cloudinary.com/rileey/video/upload/v1646869910/views/2022-03-09T23-50-49.473ZPressure%20%28Music%20Video%29.MP4.mp4"
          className='video' 
          type='video/mp4'
          muted
          h='100%'
          >
            
        </video>
        <img className="playbutton" src={play} alt="" />
      </> 
);
  }
  
  export default BlogVideo;
  