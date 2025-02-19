import { Component } from 'react';
import Movie from './Movie.jsx';


class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {title: 'Titanic', genre: 'Drama', details: 'Big boat sank', myStatus: true},
                {title: 'Lord of the Rings', genre: 'Action', details: 'Mythical creatures adventuring',myStatus: true},
                {title: 'Terminator', genre: 'Action', details: 'Robot apocalpyse',myStatus: true},
                {title: 'Big Hero 6', genre: 'Family', details: 'Robot revenge',myStatus: true},
                {title: 'JFK', genre: 'Documentary', details: 'Presidential history',myStatus: true}
            ],
            allMovies: [
                {title: 'Titanic', genre: 'Drama', details: 'Big boat sank', myStatus: true},
                {title: 'Lord of the Rings', genre: 'Action', details: 'Mythical creatures adventuring',myStatus: true},
                {title: 'Terminator', genre: 'Action', details: 'Robot apocalpyse',myStatus: true},
                {title: 'Big Hero 6', genre: 'Family', details: 'Robot revenge',myStatus: true},
                {title: 'JFK', genre: 'Documentary', details: 'Presidential history',myStatus: true}
            ],
                showOnlyAction: false
        }
    }
    removeMovie = (title) => {
        this.setState((prevState) => ({
            movies: prevState.movies.filter(movie => movie.title !== title)
        }));
    };

    updateState = (title) => {
        this.setState((prevState) => ({
            movies: prevState.movies.map((movie) => movie.title==title?{...movie,myStatus:!movie.myStatus}: movie)
            
        }));
    };

    filterAction = () => {
        this.setState((prevState) => ({
            movies: prevState.showOnlyAction ? prevState.allMovies : prevState.allMovies.filter(movie => movie.genre === 'Action'),
            showOnlyAction: !prevState.showOnlyAction
        }));

    };


    render() {
        return (
            <div className="movie-list">
                <h2>Movie List</h2>
                <ul>
                    {this.state.movies.map((movie) => (
                        <Movie key={movie.title}  title={movie.title} genre={movie.genre} details={movie.details} onRemove={this.removeMovie} onUpdate={this.updateState} onFilter={this.filterAction} myStatus={movie.myStatus}/>
                    ))}
                </ul><br />
                <button onClick={this.filterAction}>
                    {this.state.showOnlyAction ? 'Show all movies': 'Show only Action Movies'}
                </button>
            </div>
        );
    };
};

export default MovieList;

// import { Component } from 'react';
// import Movie from './Movie.jsx';

// class MovieList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             movies: [
//                 { title: 'Titanic', genre: 'Drama', details: 'Big boat sank' },
//                 { title: 'Lord of the Rings', genre: 'Action', details: 'Mythical creatures adventuring' },
//                 { title: 'Terminator', genre: 'Action', details: 'Robot apocalypse' },
//                 { title: 'Big Hero 6', genre: 'Family', details: 'Robot revenge' },
//                 { title: 'JFK', genre: 'Documentary', details: 'Presidential history' }
//             ]
//         };
//     }

//    // this would be your removemovie function
//     removeMovie = (title) => {
//         this.setState((prevState) => ({
//             movies: prevState.movies.filter(movie => movie.title !== title)
//         }));
//     };

//     render() {
//         return (
//             <div className="movie-list">
//                 <h2>Movie List</h2>
//                 <ul>
//                     {this.state.movies.map((movie) => (
//                         <Movie 
//                             key={movie.title} 
//                             title={movie.title} 
//                             genre={movie.genre} 
//                             details={movie.details} 
//                             onRemove={this.removeMovie}
//                         />
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }

// export default MovieList;