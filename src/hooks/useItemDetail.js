import { useEffect, useState } from 'react';

const useItemDetail = (itemId) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`https://polar-hamlet-16866.herokuapp.com/items/${itemId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return [item, setItem];
};

export default useItemDetail;
