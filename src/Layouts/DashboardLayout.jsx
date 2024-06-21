import { useState } from 'react';
import { FaBars, FaLongArrowAltLeft, FaTimes } from 'react-icons/fa'; // Importing icons from react-icons
import { Link, NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="grid lg:grid-cols-5 bg-gray-200">
      {/* Mobile Header */}
      <header className="w-full sticky top-0 bg-gray-800 text-gray-100 flex items-center justify-between p-4 md:hidden">
        
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </header>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-gray-100 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64 md:inset-0`}>
       <Link to={"/"}> <p className='flex items-center gap-2 m-3'><FaLongArrowAltLeft />Back to home</p></Link>
        <nav className="mt-8">
          <ul>
          <NavLink to="dashboard"><li className="p-4 hover:bg-gray-700">Dashboard</li></NavLink>
          <NavLink to="all-products"> <li className="p-4 hover:bg-gray-700">All Products</li></NavLink>
          <NavLink to="add-product"><li className="p-4 hover:bg-gray-700">Add Product</li></NavLink>
          <NavLink to="create-post">  <li className="p-4 hover:bg-gray-700">Create Post</li></NavLink>
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <main className="lg:col-span-4 p-6 ">
       <Outlet/>
      </main>
    </div>
  );
};

export default DashboardLayout;
