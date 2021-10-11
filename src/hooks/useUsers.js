import { useEffect, useState } from 'react';
import { fetchCurrentUser } from '../services/userAuth';

export default function useUsers() {

  const [userObject, setUserObject] = useState(null);
  const [loading, setloading] = useState(true);
  
  useEffect(() => {
    fetchCurrentUser()
      .then((user) => setUserObject(user))
      .finally(() => setloading(false));
  }, []);
  // console.log('===========userObject===========', userObject);

  return { userObject, loading };
}
