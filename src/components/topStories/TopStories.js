// import './components/blogVideos/blogvideos.modules.css'
import './topstories.modules.css'

function TopStories({theme}) {

  return (
    <div className="section-container">  
      <img className="section-image" src='https://bit.ly/2Z4KKcF' alt='Rear view of modern home with pool' />

      <div className="topstories-caption-container">  
        <span className="topstories-caption">  
          Modern home in city center in the heart of historic Los Angeles
        </span>

      </div> 
    </div>  
  );
}

export default TopStories;
