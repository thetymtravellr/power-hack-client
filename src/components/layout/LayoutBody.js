import { useContext } from "react";
import { BillingDataContext } from "../../pages/home/HomePage";
import DeleteConfirmationModal from "../modal/DeleteConfirmationModal";
import Modal from "../modal/Modal";

const LayoutBody = () => {
  const {
    data,
    isLoading,
    refetch,
    isAdding,
    searchResult
  } = useContext(BillingDataContext);

  return (
    <div>
      <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
        {isLoading ? (
          <p>loading</p>
        ) : (
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Billing ID
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Full Name
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Email
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Phone
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Paid Amount
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {isAdding ? (
                <tr>
                  <td>Generating Id</td>
                </tr>
              ) : null}
             {
              searchResult?.length > 0 ?
              <>
               {searchResult?.map((items) => (
                <tr key={items._id}>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                    {items._id}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    {items.fullname}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    {items.email}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    {items.phone}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    {items.amount}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    <DeleteConfirmationModal id={items._id} refetch={refetch} />
                    <Modal id={items._id} />
                  </td>
                </tr>
              ))}
              </>
              : 
              <>
               {data?.data?.map((items) => (
                <tr key={items._id}>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                    {items._id}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    {items.fullname}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    {items.email}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    {items.phone}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    {items.amount}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    <DeleteConfirmationModal id={items._id} refetch={refetch} />
                    <Modal id={items._id} />
                  </td>
                </tr>
              ))}
              </>
             }
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default LayoutBody;
