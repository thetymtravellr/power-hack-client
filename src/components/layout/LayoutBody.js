const LayoutBody = () => {
  return (
    <div>
      <div class="overflow-hidden overflow-x-auto border border-gray-100 rounded">
        <table class="min-w-full text-sm divide-y divide-gray-200">
          <thead>
            <tr class="bg-gray-50">
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Billing ID
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Full Name
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Email
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Phone
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Paid Amount
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-100">
            <tr>
              <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                John Doe
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                24/05/1995
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                Web Developer
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                $120,000
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                $120,000
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                $120,000
              </td>
            </tr>

            <tr>
              <td class="px-4 py-2 font-medium whitespace-nowrap">Jane Doe</td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                04/11/1980
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                Web Designer
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                $100,000
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                $100,000
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                $100,000
              </td>
            </tr>
            <tr>
              <td class="px-4 py-2 font-medium whitespace-nowrap">
                Gary Barlow
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                24/05/1995
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">Singer</td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">$20,000</td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">Singer</td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">$20,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LayoutBody;
