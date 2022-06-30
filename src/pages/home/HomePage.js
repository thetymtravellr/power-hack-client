import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Nav from "../../components/nav/Nav";
export const BillingDataContext = createContext(10);

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const verifyUser = async () => {
      const userEmail = localStorage.getItem("loggingEmail");
      if (!userEmail) {
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
    };
    verifyUser();
  });
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const userEmail = localStorage.getItem("loggingEmail");

  const { data, isLoading, isError, refetch } = useQuery(
    ["billingData", page],
    async () => {
      const res = await fetch(
        `http://localhost:8080/billing-list?email=${userEmail}&page=${page}`,
        {
          method: "GET",
          headers: {
            authorization: `${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return res.json();
    }
  );

  const [paidAmount, setPaidAmount] = useState(0);
  useEffect(() => {
    setPageCount(Math.ceil(data?.dataCount / 10));
  }, [data?.dataCount]);
  console.log(pageCount);
  return (
    <>
      <BillingDataContext.Provider
        value={{
          userEmail,
          data,
          isLoading,
          refetch,
          paidAmount,
          setPaidAmount,
          page,
          setPage,
          pageCount,
          setPageCount,
          isAdding,
          setIsAdding,
        }}
      >
        <Nav paidAmount={paidAmount} />
        <main className="p-8">
          <div>
            <Layout />
          </div>
        </main>
      </BillingDataContext.Provider>
    </>
  );
};

export default HomePage;
