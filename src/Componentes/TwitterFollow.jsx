import React, { useState } from 'react'
import "../App.css"

const TwitterFollow = ({userName, children}) => {
  
  const imageSrc = `https://unavatar.io/${userName}`



  const [isFollowing, setIsFollowing] = useState(false)

  const text = isFollowing ? 'Siguiendo' : "Seguir"

  const buttonClassName = isFollowing ? "tw-followCard-button is-following" 
  : "tw-followCard-button" 

  

  

  const handleClick = () => {
  setIsFollowing(!isFollowing)
 }
  
  
  return (

    
    <article className='tw-followCard'> 
    <header className='tw-followCard-header'> 
    <img className='tw-followCard-avatar'
     alt='avatar midudev' src={imageSrc}></img> 
      <div className='tw-followCard-info'>

        <strong>{children}  </strong>
        <span className='tw-followCard-infoUserName'>@{userName}</span>
      </div>
    </header>
      <aside>
    <button className={buttonClassName} onClick={handleClick}>
    <span className='tw-followCard-text'>{text}</span>
      <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
    </button>

      </aside>

  
      
    </article>


  )
}

export default TwitterFollow