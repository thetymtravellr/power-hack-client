import { useState } from "react";
import useGetProducts from "../../hooks/useGetProducts";
import LayoutBody from "../layout/LayoutBody";
import LayoutHeader from "../layout/LayoutHeader";

const Layout = () => {
    
  const [page, setPage] = useState(0);
  const { data, isFetching, pageCount } = useGetProducts(page);
  const [isAdding, setIsAdding] = useState(false);
  const pages = [...Array(pageCount).keys()];

  return (
    <div>
      <LayoutHeader setIsAdding={setIsAdding} />
      <LayoutBody data={data} isFetching={isFetching} isAdding={isAdding} />
      <div className="flex space-x-3 justify-center mt-12">
        {pages.length > 1 &&
          pages.map((page) => (
            <button
              onClick={() => setPage(page)}
              className="border px-3 py-1 rounded hover:bg-gray-100"
            >
              {page + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Layout;
