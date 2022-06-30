import { useState } from "react";

const ProductAddModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-green-500 text-white active:bg-green-600 font-semibold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add New Bill
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-3/4 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between py-2 px-5 border-b border-solid border-slate-200 rounded-t bg-gray-100">
                  <h3 className="text-2xl font-semibold">Add Product</h3>
                  <button
                    className="border-0 text-black  text-3xl font-semibold"
                    onClick={() => setShowModal(false)}
                  >
                    <p className="text-4xl">×</p>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form>
                    <div class="mb-5">
                      <label
                        for="name"
                        class="block mb-2 font-bold text-gray-600"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter fullname"
                        class="border border-gray-300 shadow p-3 w-full rounded mb-"
                      />
                    </div>
                    <div class="mb-5">
                      <label
                        for="email"
                        class="block mb-2 font-bold text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        class="border border-gray-300 shadow p-3 w-full rounded mb-"
                      />
                    </div>
                    <div class="mb-5">
                      <label
                        for="phone"
                        class="block mb-2 font-bold text-gray-600"
                      >
                        Phone
                      </label>
                      <input
                        type="number"
                        id="phone"
                        placeholder="Enter phone"
                        class="border border-gray-300 shadow p-3 w-full rounded mb-"
                      />
                    </div>
                    <div class="mb-5">
                      <label
                        for="amount"
                        class="block mb-2 font-bold text-gray-600"
                      >
                        Amount
                      </label>
                      <input
                        type="number"
                        id="amount"
                        placeholder="Enter amount"
                        class="border border-gray-300 shadow p-3 w-full rounded mb-"
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
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

export default ProductAddModal;
