import React from 'react'
// import "./Card.css" 
// import img1 from "../assets/img1.jpg" 
import "./card-style.css"


const Card = props => {
  return (
    
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="image_1" className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eligendi doloribus eum temporibus, debitis quo natus mollitia voluptates neque error laboriosam vel nisi animi officia quidem accusamus, nihil soluta tenetur!  
        </p>
        <a href="#" className="btn btn-outline-success">Go anywhere</a>
      </div>
    </div>
  )
}

export default Card