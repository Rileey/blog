import './form.modules.css'

function Form(){
    return(
    <>
    <div className="form-container">  
        <span className="form-heading">
          Join the discussion
        </span>
        <div className="form-body-container">  
          <input type="text" name="comments" className="input-comments" placeholder='Write your comment'/>
          <div className="form-content">  
            <div className="form-middle">  
              <div className="form-item">
                <span className="formName">Your Name</span>
                <input type="text" name="name" id="" className="input-name" placeholder='Name' />
              </div>
              <div className="form-item">
                <span className="formName">Email Address</span>
                <input type="text" name="email" id="" className="input-name" placeholder='Email' />
              </div>
            </div>  
          </div>  
          <div>  
            <input className='form-button' type="button" value="Submit" />
          </div>  
        </div>  
      </div>

    </>
    )
}

export default Form