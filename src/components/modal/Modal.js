import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BillingDataContext } from "../../pages/home/HomePage";

const Modal = ({ add, id }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [alert, setSetAlert] = useState(false);
  const [message, setMessage] = useState("");
  const {
    userEmail,
    data: billData,
    refetch,
    setIsAdding,
    setPaidAmount,
  } = useContext(BillingDataContext);

  const matchedData = billData?.data?.find((bill) => bill._id === id);

  const addBillData = (data) => {
    setIsAdding(true);
    const billingData = {
      fullname: data.fullname,
      email: data.email,
      phone: data.phone,
      amount: parseFloat(data.amount),
      addedBy: userEmail,
    };
    setPaidAmount((prevAmount) => prevAmount + billingData.amount);
    fetch("https://gentle-bastion-30357.herokuapp.com/add-billing", {
      method: "POST",
      body: JSON.stringify(billingData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "successfully added") {
          setPaidAmount((prevAmount) => prevAmount - billingData.amount);
          setIsAdding(false);
          reset();
          setMessage(data.message);
          setSetAlert(true);
          refetch();
        } else {
          setPaidAmount((prevAmount) => prevAmount - billingData.amount);
          setIsAdding(false);
          setMessage(data.message);
          setSetAlert(true);
        }
      });
  };

  const updateBillData = (data) => {
    const updatedBillingData = {
      fullname: data.fullname || matchedData.fullname,
      email: data.email || matchedData.email,
      phone: data.phone || matchedData.phone,
      amount: parseFloat(data.amount) || parseFloat(matchedData.amount),
    };

    fetch(`https://gentle-bastion-30357.herokuapp.com/update-billing/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedBillingData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "successfully added") {
          setMessage(data.message);
          setSetAlert(true);
          reset();
          refetch();
        } else {
          reset();
          setMessage(data.message);
          setSetAlert(true);
        }
      });
  };

  return (
    <>
      <button
        className="bg-gray-300 text-xs font-semibold p-1 rounded hover:shadow"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {add ? "Add New Bill" : "Update"}
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-3/4 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between py-2 px-5 border-b border-solid border-slate-200 rounded-t bg-gray-100">
                  <h3 className="text-2xl font-semibold">{add ? 'Add' : 'Update'} Product</h3>
                  <button
                    className="border-0 text-black  text-3xl font-semibold"
                    onClick={() => {
                      setShowModal(false);
                      setSetAlert(false);
                      reset();
                    }}
                  >
                    <p className="text-4xl">×</p>
                  </button>
                </div>
                {/*body*/}
                {alert ? (
                  <p className="py-6 text-center text-lg font-semibold">
                    {message}
                  </p>
                ) : (
                  <div className="relative p-6 flex-auto">
                    <form
                      onSubmit={handleSubmit(
                        add ? addBillData : updateBillData
                      )}
                    >
                      <div className="mb-5">
                        <label
                          for="name"
                          className="block mb-2 font-bold text-gray-600"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter fullname"
                          className={`border ${
                            errors.fullname
                              ? "border-red-500"
                              : "border-gray-300"
                          } shadow p-3 w-full rounded active:outline-none focus:outline-none`}
                          {...register("fullname", { required: true })}
                        />
                        {errors.fullname && (
                          <p className="text-red-500">
                            This field is required
                          </p>
                        )}
                      </div>
                      <div className="mb-5">
                        <label
                          for="email"
                          className="block mb-2 font-bold text-gray-600"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter email"
                          className={`border ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          } shadow p-3 w-full rounded active:outline-none focus:outline-none`}
                          {...register("email", { required: true })}
                        />
                        {errors.email && (
                          <p className="text-red-500">
                            This field is required
                          </p>
                        )}
                      </div>
                      <div className="mb-5">
                        <label
                          for="phone"
                          className="block mb-2 font-bold text-gray-600"
                        >
                          Phone
                        </label>
                        <input
                          type="number"
                          id="phone"
                          placeholder="Enter phone"
                          className={`border ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          } shadow p-3 w-full rounded active:outline-none focus:outline-none`}
                          {...register("phone", {
                            required: true,
                            maxLength: 11,
                            minLength: 11,
                          })}
                        />
                        {errors.phone?.type === "required" && (
                          <p className="text-red-500">
                            This field is required
                          </p>
                        )}
                        {(errors.phone?.type === "maxLength" ||
                          errors.phone?.type === "minLength") && (
                          <p className="text-red-500">
                            Enter Valid Number with 11 Characters
                          </p>
                        )}
                      </div>
                      <div className="mb-5">
                        <label
                          for="amount"
                          className="block mb-2 font-bold text-gray-600"
                        >
                          Paid Amount
                        </label>
                        <input
                          type="number"
                          step="any"
                          id="amount"
                          placeholder="Enter paid amount"
                          className={`border ${
                            errors.amount ? "border-red-500" : "border-gray-300"
                          } shadow p-3 w-full rounded active:outline-none focus:outline-none`}
                          {...register("amount", { required: true })}
                        />
                        {errors.amount && (
                          <p className="text-red-500">
                            This field is required
                          </p>
                        )}
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            setShowModal(false);
                            reset();
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          {add ? "Add Bill" : "Update Bill"}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
