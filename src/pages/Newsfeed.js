import React, {Component} from 'react';
import SideNav from '../components/SideNav'
import './style/Newsfeed.css'
import axios from 'axios'

class Newsfeed extends Component {
  constructor(props) {
      super(props);
      this._getUserName = this._getUserName.bind(this);
      this._getUserPost = this._getUserPost.bind(this);
      this._getUserName1 = this._getUserName1.bind(this);
      this.state = {
        username: '',
        username1: '',
        post:''
      }
    }





componentDidMount(){

this._getUserName();
this._getUserPost();
this._getUserName1();


}


_getUserName(){
  axios.get('http://localhost:8080/api/user/lars').then(res => this.setState({ username: res.data.userName }))
}

_getUserPost(){
  axios.get('http://localhost:8080/api/user/lars')
  .then(res => this.setState({ post: res.data.post.postContent }))
}


_getUserName1(){
  axios.get('http://localhost:8080/api/user/moon').then(res => this.setState({ username1: res.data.userName }))
}

  render(){


    return (
<div>
      <div>

      <div className="header">
      <a herf="/"></a>
      </div>

<SideNav/>

<div className="post-content">
<form >
  <label>
  <p>Legg ut din post</p>

    <input className="post" type="text" name="name" />

  </label>
  <button className="post-btn">Post</button>
</form>
</div>

<div className="post-content">
<dt>
<dd className="content-txt">
 <img className="user-icon" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"/>
{this.state.username}


 <p>{this.state.post}</p>
 </dd>
 </dt>

<dt>
<dd>
<img className="icons" src="https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/Comments-512.png"/>
</dd>
</dt>

</div>



<div className="post-content">
<dt>
<dd className="content-txt">
 <img className="user-icon" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"/>
 {this.state.username1}
</dd>
<dd>
<img className="newsfeed-image" src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"/>
 <p>Nature  </p>
</dd>
</dt>
<dt>
<dd>
<img className="icons" src="https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/Comments-512.png"/>
</dd>
</dt>

</div>



<div className="post-content">
<dt>
<dd className="content-txt">
 <img className="user-icon" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"/>
 username
</dd>
<dd>
<img className="newsfeed-image" src="https://www.tripsavvy.com/thmb/b6ZpVmEjIiAn9WTUKgkNb5u6qPU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-164334432-59550d2a3df78cdc29993b4f.jpg"/>
 <p>Sommer dag i oslo ;) </p>
</dd>
</dt>
<dt>
<dd>
<img className="icons" src="https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/Comments-512.png"/>
</dd>
</dt>

</div>




<div className="post-content">
<dt>
<dd className="content-txt">
 <img className="user-icon" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"/>
 username
</dd>
<dd>
<img className="newsfeed-image" src="https://www.visitoslo.com/Images/Bilder%20Oslo/Hva%20skjer/17%20mai%20-%20Tomasz%20Majewski%20Photography.jpg?t=ScaleToFill%7C1450x720&ts=A8TeS2RG%2BPb0g71MSK%2F8LiHHcWE%3D&pr=2.625"/>
 <p>Gratulerer med dagen</p>
</dd>
</dt>
<dt>
<dd>
<img className="icons" src="https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/Comments-512.png"/>
</dd>
</dt>
</div>



</div>
      </div>

    );
  }
}

export default Newsfeed;
