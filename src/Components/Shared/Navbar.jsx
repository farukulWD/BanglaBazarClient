import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { AuthContext } from "../../Context/AuthProvider";
import LoginAndRegisterModal from "../../Pages/LoginAndRegisterModal/LoginAndRegisterModal";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  function openLoginModal() {
    setIsOpen(true);
  }
  const handleLogOut = () => {
    logOut()
      .then((res) => {})
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="bg-primary-color ">
      <div className="navbar my-container justify-between">
        <div className="">
          <a className="font-bold hidden md:block text-white text-xl mr-5 ">
            BanglaBazar
          </a>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full md:w-96 pr-10"
          />
          <button className="absolute text-xl inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
            <AiOutlineSearch></AiOutlineSearch>
          </button>
        </div>

        <div className="gap-2">
          <div className="text-white">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <p className="text-2xl">
                    {" "}
                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                  </p>
                  <span className="badge badge-sm text-red-600 indicator-item">
                    8
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[100] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body rounded-md bg-primary-color">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-white">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="primaryBtn w-full">View cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <p className="text-2xl">
                    {" "}
                    <MdOutlineFavorite></MdOutlineFavorite>
                  </p>
                  <span className="badge badge-sm text-red-600 indicator-item">
                    8
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[100] card card-compact dropdown-content w-52  shadow"
              >
                <div className="card-body rounded-md bg-primary-color">
                  <span className="text-lg">1. Items</span>
                  <span className="text-lg">2. Items</span>
                  <span className="text-lg">3. Items</span>
                  <span className="text-lg">4. Items</span>

                  <div className="card-actions">
                    <button className="primaryBtn w-full">View list</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[50] p-2 text-white shadow menu menu-sm dropdown-content bg-primary-color rounded-box w-52"
              >
                <li>
                  <a className="hover:text-[#4a9b35] text-sm font-semibold hover:rounded-lg hover:bg-white transition-all delay-75">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#4a9b35] text-sm font-semibold hover:rounded-lg hover:bg-white transition-all delay-75">
                    Settings
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="hover:text-[#4a9b35] text-sm font-semibold hover:rounded-lg hover:bg-white transition-all delay-75"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <button
              onClick={openLoginModal}
              className="btn btn-sm secondaryBtnText"
            >
              login
            </button>
          )}
          <LoginAndRegisterModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          ></LoginAndRegisterModal>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
