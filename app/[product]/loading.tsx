import React from "react";

function Loading() {
  return (
    <div className={`lg:w-2/3 m-auto mt-3 `}>
      <div className="w-3/4 m-auto py-4 pb-10">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between px-2 py-4">
          <ul className="leading-7">
            <li className="text-black">
              Price: <span className="text-nhc"></span>
            </li>
            <li className="flex items-center gap-2">
              Rating :{" "}
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            </li>
            <li>
              Brand :{" "}
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            </li>
          </ul>
          <ul className="leading-7">
            <li>
              Discount Percentage :{" "}
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            </li>
            <li>
              Stock :{" "}
              <span className="text-nhc">
                {" "}
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              </span>
            </li>
            <li>
              Category : <span className="text-nhc">smartphones</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-2">
        <h3 className="text-base py-1">Product Description</h3>
        <div className="text-[#7F7F7F]">
          {" "}
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
      </div>
      <h3 className="text-base py-2 mt-5 px-2">Product Images</h3>
      <div className="grid grid-cols-4 px-2">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      </div>
    </div>
  );
}

export default Loading;
