import { useEffect, useState } from 'react';

const useItems = () => {
  const [items, setItems] = useState([]);
  const url = process.env.REACT_APP_BASEURL;

  useEffect(() => {
    fetch(`${url + '/items'}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
};

export default useItems;
