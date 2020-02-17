import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addPost} from '../../redux/reducers/postsReducer';
import {getSession} from '../../redux/reducers/authReducer';
import { withRouter} from "react-router-dom";


class Form extends Component {
    constructor () {
        super();
        this.state = {
            title: "",
            img: "",
            content: ""
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
      }
    
    handleAddPost = () => {
        const { title, img, content } = this.state;
        const { addPost } = this.props;
        addPost({ title, img, content });
       
      }

render() {
    return (
        <div>
            <h1> Add Post </h1>

           

            <input name="title" placeholder="title" value={this.state.brand} onChange={this.handleChange}/>
            <input name="img" placeholder="img" value={this.state.product} onChange={this.handleChange}/>
           <div>
            <input name="content" value={this.state.content} onChange={this.handleChange}/>
            </div>
            <button onClick={this.handleAddPost}>Add</button>
            
        </div>
    )
}
}

const mapStateToProps = reduxState => {
    return {
      user_id: reduxState.authReducer.user_id
    }
  }
  
  export default withRouter(connect(mapStateToProps, {
    addPost,
    getSession
  })(Form))