import { useEffect, useState } from "react";

const useGetProducts = (page) => {
  const [pageCount, setPageCount] = useState(0);
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetch(`http://localhost:8080/billing-list?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setPageCount(Math.ceil(data.dataCount / 10));
      });
    setIsFetching(false);
  }, [page, data, data.dataCount]);

  return { data, isFetching, pageCount };
};

export default useGetProducts;
