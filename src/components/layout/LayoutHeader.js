import Modal from "../modal/Modal";

const LayoutHeader = () => {

  return (
    <header className="flex justify-between bg-gray-100 py-2 px-5 border-b">
      <div className="flex items-center">
        <h1>Billings</h1>
        <div className="ml-4 border h-8">
          <input className="h-full px-1" type="text" placeholder="Search" />
          <button className="py-1 px-2 hover:bg-gray-300">Search</button>
        </div>
      </div>
      <div>
        <Modal add={true}/>
      </div>
    </header>
  );
};

export default LayoutHeader;
