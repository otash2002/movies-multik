import React from 'react';
import Loader from '../component/Loader';
import Movies from '../component/Movies';
import Search from '../component/Search';

class Main extends React.Component {
  state = {
    movies: ''
    
  }
  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=e7ec540b&s=panda')
    .then(response => response.json())
      .then(data => this.setState({ movies: data.Search}))
  }

  searchMovies = (str, type = 'all') => {

    fetch(`http://www.omdbapi.com/?apikey=e7ec540b&s=${str}${type !== 'all' ?  `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search}))

      


  }


  render() {
    return (
      
      <div className="container content">
        
        <Search searchMovies={this.searchMovies}/>
        
        {this.state.movies.length ? (<Movies movies={this.state.movies} />) : <Loader/>}

        
        
      </div>
    );
  }
}


export default Main;
