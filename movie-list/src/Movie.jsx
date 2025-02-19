import { string } from 'prop-types';
import { useState } from 'react';
import { Component} from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

    render() {
        const { title, genre, details, onRemove, onUpdate, myStatus } = this.props;



        
    return (
        <>

                <div>
                    <li className='movie-item'><strong>Title:</strong>"{title}", <strong>Genre:</strong> {genre}</li>
                    <section>
                        {myStatus && (
                            <li><strong>Details: {details}</strong></li>
                        )}
                        <button onClick={() => onUpdate(title)}>
                            {myStatus ? 'Hide Details' : 'Show Details'}
                        </button>
                    </section>
                </div>
            <button onClick={() => onRemove(title)}>Remove Movie</button>
        </>
            
        );
    };
};

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    myStatus: PropTypes.bool.isRequired
}

export default Movie;

// import { Component } from 'react';
// import PropTypes from 'prop-types';

// class Movie extends Component {
//     render() {
//         const { title, genre, details, onRemove } = this.props;

//         return (
//             <li className="movie-item">
//                 <strong>Title:</strong> "{title}", <strong>Genre:</strong> {genre}
//                 <p><strong>Details:</strong> {details}</p>
//                 <button onClick={() => onRemove(title)}>Remove Movie</button>
//             </li>
//         );
//     }
// }

// Movie.propTypes = {
//     title: PropTypes.string.isRequired,
//     genre: PropTypes.string.isRequired,
//     details: PropTypes.string.isRequired,
//     onRemove: PropTypes.func.isRequired
// };

// export default Movie;