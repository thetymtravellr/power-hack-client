import { useEffect, useState } from "react";
import LayoutBody from "./LayoutBody";
import LayoutHeader from "./LayoutHeader";

const Layout = () => {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page,setPage] = useState(0)
  useEffect(() => {
    fetch(`http://localhost:8080/billing-list?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
        setPageCount(data.dataCount / 10)
      });
  }, [page]);
  const pages = [...Array(pageCount).keys()];

  return (
    <div>
      <LayoutHeader />
      <LayoutBody data={data} />
      <div className="flex space-x-3 justify-center mt-12">
        {
            pages.map(page => <button
            onClick={() => setPage(page)}
                 className="border px-3 py-1 rounded hover:bg-gray-100">{page + 1}</button>)
        }
      </div>
    </div>
  );
};

export default Layout;
