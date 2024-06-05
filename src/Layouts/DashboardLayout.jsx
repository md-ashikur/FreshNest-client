import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="grid grid-cols-5 ">
        <div className="bg-base-200 pt-16 sticky top-20 h-screen">
          <ul className="menu p-4  text-base-content">
          
            <li>
              <NavLink to={"all"}>All Houses</NavLink>
            </li>
            <li>
              <NavLink to={"create"}>Add House</NavLink>
            </li>
          
            
          </ul>
        </div>
  
        <div className="col-span-4 mt-16 p-5">
          <Outlet />
        </div>
      </div>
    );
};

export default DashboardLayout;