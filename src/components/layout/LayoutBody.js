const LayoutBody = ({ data }) => {
  return (
    <div>
      <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
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
            {
                data.map(items =>  <tr>
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
                     <button>Delete</button>
                    </td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LayoutBody;
