// import './components/blogVideos/blogvideos.modules.css'
import './topstories.modules.css'

function TopStories({top}) {

  return (
    <div className="section-container">  
      <img className="section-image" src={top.jetpack_featured_media_url} alt='Rear view of modern home with pool' />

      <div className="topstories-caption-container">  
        <span className="topstories-caption">  
          {top.title?.rendered}
        </span>

      </div> 
    </div>  
  );
}

export default TopStories;
