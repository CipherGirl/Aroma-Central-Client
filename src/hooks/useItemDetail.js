import { useEffect, useState } from 'react';

const useItemDetail = (itemId) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASEURL}/items/${itemId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return [item, setItem];
};

export default useItemDetail;
