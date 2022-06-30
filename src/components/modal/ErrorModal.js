const ErrorModal = ({ showErrorModal, setShowErrorModal }) => {
  return (
    <>
      {showErrorModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-2/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between py-2 px-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Error</h3>
                  <button
                    className="border-0 text-black  text-3xl font-semibold"
                    onClick={() => setShowErrorModal(false)}
                  >
                    <p className="text-4xl">×</p>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto text-center">
                  <p className="text-red-500 text-lg font-bold">
                    Something went wrong
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowErrorModal(false)}
                  >
                    Close
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

export default ErrorModal;
