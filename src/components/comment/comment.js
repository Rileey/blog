import message from '../../images/message.svg'
import './comment.modules.css'


function Comment(){
    return(
    <>
      <div className="comment-container">
        <span className="comment">  
        Fusce bibendum fringilla nunc vitae condimentum. Vivamus ante velit, 
        fermentum id mattis sed, venenatis eu nulla. Proin lacus dui, faucibus sit amet maximus et,
        </span>
        <div className="comment-bottom-container">
          <div className="bottom-left">  
            <span className="bottom-left-name">
              Felix
            </span>
            <span className="bottom-left-time">
              An hour ago
            </span>
          </div>
          <div className="bottom-right">
            <img className="bottom-right-image" src={message} alt="" />
            <div className="bottom-right-caption">  
              Reply Comment
            </div>  
          </div>
        </div>  
      </div>  
    </>
    )
}

export default Comment