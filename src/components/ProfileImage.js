import React from "react";

const ProfileImage = ({ image, name, textColor }) => {
  return (
    <div className="profile-img-container">
      <img className="profile-img" src={image} alt="profile" />
      <div />
      <div className="overlay">
        <p className="name" style={textColor}>
          {name}
        </p>
      </div>
    </div>
  );
};

export default ProfileImage;