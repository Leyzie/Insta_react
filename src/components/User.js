import React from 'react';

class User extends React.Component{
  render(){
    const {name, image, count} = this.props
    return (
      <div className="container userinfo">
        <div className="row">
            <div className="col-3">
                <img src={image} alt={name} className="image-responsive"/>
                <span className="username">{name}</span>
            </div>
            <div className="col-9 PhotoCount">
                <span className="countphoto">
                    <span>{count}</span>
                    <span>Photo</span>
                </span>
                <a href="https://www.instagram.com/via_dolorosa_/">Profil Link</a>
            </div>
        </div>
      </div>
    )
  }
}

export default User;
