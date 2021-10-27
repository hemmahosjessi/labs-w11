import React from "react";

const Card = ({ cardTitle, cardImage, date, number }) => {
  return (
    <div className="card-container">
        <img className='image' src={cardImage} alt="card-image" ></img>
        <div className='text-container'>
            <div className='date-number'>
                <p>{date}</p>
                <p>{number}</p>
            </div>
            <h3>{cardTitle}</h3>
        </div>
    </div>

    
  );
};

export default Card;