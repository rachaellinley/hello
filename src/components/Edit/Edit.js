import React, { Component } from 'react';
import {connect} from 'react-redux';
import {editPost} from "../../redux/reducers/postReducer";
import {getSession} from '../../redux/reducers/authReducer';



class EditPost extends Component {
    constructor () {
        super();
        this.state = {
            title: "",
            img:"",
            content: ""
        }
    }
    componentDidMount() {
    
    }

    handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        })
      }
 
      handleEdit= (post_id) => {
          const {title, img, content} = this.state;
          const {editPost} = this.props;
          const updated_post = {
              title,
              img,
              content
          }
          editPost(post_id, updated_post)
      }

render() {
    return (
        <div>
            <h1> Edit Post</h1>
    <h1>{this.props.match.params.post_id}</h1>

  
            <input name="title" placeholder="title" onChange ={this.handleChange} />
            <input name="img" placeholder="img" onChange ={this.handleChange}/>
            <input name="content" placeholder="Content"  onChange ={this.handleChange}/>
            <button onClick={() => (this.handleEditPost(this.props.match.params.post_id))}>Save Changes</button>
            
        </div>
    )
}
}

const mapStateToProps = reduxState => {
    return {
      posts: reduxState.postsReducer.posts
    }
  }
  
  export default connect(mapStateToProps, {
    EditPost,
    getSession
  })(Edit)