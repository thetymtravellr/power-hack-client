
const Nav = ({ paidAmount }) => {
    return (
        <header className="py-4 px-8 bg-gray-200">
            <nav className="flex justify-between">
                <h1 className="font-bold">Power-Hack</h1>
                <p>paid bill: {paidAmount}</p>
            </nav>
        </header>
    );
};

export default Nav;