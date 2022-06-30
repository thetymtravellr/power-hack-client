import { useState } from "react";

const DeleteConfirmationModal = ({ id, refetch }) => {
  const [showModal, setShowModal] = useState(false);

  console.log(id);
  const deleteBillingData = () => {
    fetch(`https://gentle-bastion-30357.herokuapp.com/delete-billing/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          refetch();
          setShowModal(false);
        }
      });
  };

  return (
    <>
      <button
        className="bg-gray-300 text-xs font-semibold p-1 rounded hover:shadow mr-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Delete
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-2/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between py-2 px-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Confirm</h3>
                  <button
                    className="border-0 text-black  text-3xl font-semibold"
                    onClick={() => setShowModal(false)}
                  >
                    <p className="text-4xl">×</p>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto text-center">
                  <p className="text-red-500 text-lg font-bold">
                    Are you sure to delete?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={deleteBillingData}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default DeleteConfirmationModal;
