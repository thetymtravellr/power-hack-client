import { useContext } from "react";
import { BillingDataContext } from "../../pages/home/HomePage";
import Modal from "../modal/Modal";

const LayoutHeader = () => {
  const {
    userEmail,
    refetch,
    isLoading,
    page,
    inputValue,
    setInputValue,
    setSearchResult,
  } = useContext(BillingDataContext);

  const searchHandler = () => {
    fetch(
      `https://gentle-bastion-30357.herokuapp.com/billing-list?email=${userEmail}&page=${page}&q=${inputValue}`,
      {
        method: "GET",
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setSearchResult(data.data));
  };

  const reset = () => {
    setSearchResult([])
    setInputValue("")
    refetch()
  }

  return (
    <header className="flex justify-between bg-gray-100 py-2 px-5 border-b">
      <div className="flex items-center">
        <h1>Billings</h1>
        <div className="ml-4 border h-8">
          <input
            className="h-full px-1"
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="py-1 px-2 hover:bg-gray-300"
            onClick={searchHandler}
          >
            Search
          </button>
        </div>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <Modal add={true} />
      </div>
    </header>
  );
};

export default LayoutHeader;
