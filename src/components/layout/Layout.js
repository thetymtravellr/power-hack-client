import { useContext, useEffect } from "react";
import { BillingDataContext } from "../../pages/home/HomePage";
import LayoutBody from "../layout/LayoutBody";
import LayoutHeader from "../layout/LayoutHeader";

const Layout = () => {
  const { data, setPaidAmount, setPage, pageCount } =
    useContext(BillingDataContext);

  useEffect(() => {
    const calculatePaidAmount = async () => {
      const paidAmount = data?.calculateAmountArray?.reduce(
        (total, currentValue) =>
          (total = total + parseInt(currentValue.amount)),
        0
      );
      setPaidAmount(paidAmount);
    };
    calculatePaidAmount();
  });

  const pages = [...Array(`${isNaN(pageCount) ? 0 : pageCount}`).keys()];

  return (
    <div>
      <LayoutHeader />
      <LayoutBody />
      <div className="flex space-x-3 justify-center mt-12">
        {pages?.length > 1
          ? pages.map((page) => (
              <button
                onClick={() => setPage(page)}
                className="border px-3 py-1 rounded hover:bg-gray-100"
              >
                {page + 1}
              </button>
            ))
          : null}
      </div>
    </div>
  );
};

export default Layout;
