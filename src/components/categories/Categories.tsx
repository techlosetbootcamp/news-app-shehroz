import React from "react";
import { useLocation } from "react-router-dom";

const Categories: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <div className="flex justify-between sm:mt-2 mb-2 bg-white py-2 px-3 sm:rounded items-center">
        <div className="flex gap-7">
          {path !== "/search" ? (
            <>
              <p className="cursor-pointer hover:text-danger font-semibold">
                <span className="border-b-2 border-danger">Latest</span> Stories
              </p>
            </>
          ) : (
            <p className="cursor-pointer hover:text-danger font-semibold">
              <span className="border-b-2 border-danger">Search</span> Results
            </p>
          )}
          {path !== "/search" ? (
            <>
              <p className="cursor-pointer hover:text-danger font-semibold">
                Opinion
              </p>
              <p className="cursor-pointer hover:text-danger font-semibold">
                Health
              </p>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="max-sm:hidden">
          <img
            className="w-5"
            src={require("../../assets/images/CategoriesLayout.png")}
            alt="Layout-Layout"
          />
        </div>
      </div>
    </>
  );
};

export default Categories;
