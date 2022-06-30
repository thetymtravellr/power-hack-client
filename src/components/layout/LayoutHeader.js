

const LayoutHeader = () => {
  return (
    <header className="flex justify-between">
      <div className="flex">
        <h1>Billings</h1>
        <div className="ml-4">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </div>
      <div>
        <button>Add New Bill</button>
      </div>
    </header>
  );
};

export default LayoutHeader;
