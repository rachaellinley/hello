import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllPosts} from '../../redux/reducers/postsReducer';

class Dashboard extends Component {
    constructor () {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.props.getAllPosts().then(() => this.setState({posts: this.props.posts}));
      }

      handleClear = () => { 
        this.setState({posts: this.props.posts});
      }

      handleChange = e => {
          if (e.target.value === "All Categories"){
            this.props.getAllPosts().then(() => this.setState({posts: this.props.posts}));
          } else {
            this.handleClear()
            this.setState({ [e.target.name]: e.target.value })
          }
      }



render() {

    const { posts } = this.state;
   
    const postsMapped = posts.map((post, i) => {
        // console.log(post) 
        return (
        <div id="card" key={i}>
        <h3>Title: {post.title}</h3>
        <h3>img: {post.title}</h3>
        <h3>Content: {post.content}</h3>
       <br/>
        </div>)})

    return (
        <div>
          <h1>All Posts</h1>
    
         
           
            
            {postsMapped}
            
        </div>           
        )
    }
}

const mapStateToProps = reduxState => {
    return {
      posts: reduxState.postsReducer.posts
    }
  }

export default connect(mapStateToProps, {getAllPosts})(Dashboard);