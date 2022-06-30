import { Component, useState } from 'react'
import { connect } from 'react-redux'
import logo from '../logo.svg'
import '../App.css'
import { fetchingPosts } from '../redux/actionCreators'
import ErrorBoundary from './ErrorBoundary'

class App extends Component {

  componentDidMount() {
    this.props.fetchingPosts()
  }

  render() {
    const allPosts = this.props.posts.map(post => <li key={post.id}>{post.title}</li>)
    return this.props.loading ? <div>Chargement des posts ...</div> : (
      <div className="App" >
        <ul>{allPosts}</ul>
      </div >
    )


  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    loading: state.loading
  }
}


const mapDispatchToProps = (dispatch) => {
  //console.log("dispatch", dispatch)
  return {
    fetchingPosts: () => {
      dispatch(fetchingPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
