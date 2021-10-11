import { useEffect, useState } from 'react';
import { fetchTopArtists } from '../services/spotifyAPI';

export default function usePoop(token) {
  const [artists, setArtists] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchTopArtists(token)
      .then((artist) => setArtists(artist))
      .finally(() => setloading(false));
  }, []);
  console.log('===========titties===========', artists);

  return { artists, loading };
}
