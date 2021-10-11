import React from 'react';
import useUsers from '../../hooks/useUsers';
import PropTypes from 'prop-types';
import { fetchTopArtists } from '../../services/spotifyAPI';

export default function TopArtists() {
  const { userObject, loading } = useUsers();
  const [artists, setArtists] = useState(null);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  userObject ? setArtists(fetchTopArtists(match.params.access_token)) : console.log('you suck');

  return (
    <div>
      <img alt="user image" src={userObject.image} />
      <h2>Welcome, {userObject.displayName}!</h2>
      <a href={userObject.profileURL}>Spotify profile</a>

      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            <a href={artist.url}>
              <div>{artist.name}</div>
            </a>
            <img src={artist.image} />
            <p>{artist.genres}</p>
          </li>
        ))};
      </ul>
    </div>
  );
}

TopArtists.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      url: PropTypes.string,
      id: PropTypes.string,
      genres: PropTypes.string,
    })
  ),
  match: PropTypes.shape({
    params: PropTypes.shape({
      access_token: PropTypes.string.isRequired,
      refresh_token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

// {artistsArray.length > 0 && artistsArray.map((artist) => (
//   <li key={artist.id}>
//     <Artist
//       artists
//     />
//   </li>
// ))}
