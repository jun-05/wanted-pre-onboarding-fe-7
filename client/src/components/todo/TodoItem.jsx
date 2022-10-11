import React from "react";
import { BsCheckLg, BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";

const TodoItem = ({ TodoItem, checked }) => {
  return (
    <div className="flex justify-between w-full min-h-10 h-fit  p-1 pb-4 border-b border-gray-600">
      {/** checkArea */}
      <div className="flex items-center">
        <div className="h-8 w-8 border-2 border-gray-600 rounded-full hover:cursor-pointer">
          <div
            className="w-full h-full flex justify-center items-center text-gray-600 text-lg"
            style={checked ? { display: "none" } : {}}
          >
            <BsCheckLg />
          </div>
        </div>
        {/** TodoArea */}
        <div
          className="ml-1 text-white font-sans w-fit"
          style={checked ? { textDecoration: "line-thorugh" } : {}}
        >
          {TodoItem}
        </div>
      </div>
      {/** ButtonArea */}
      <div className="flex text-center [&>div]:ml-4">
        <div className="h-8 w-8 border-2 border-gray-600 rounded-full hover:cursor-pointer">
          <div className="w-full h-full flex justify-center items-center text-gray-600 text-lg">
            <BsFillPencilFill />
          </div>
        </div>
        <div className="h-8 w-8 border-2 border-gray-600 rounded-full hover:cursor-pointer">
          <div className="w-full h-full flex justify-center items-center text-gray-600 text-lg">
            <RiDeleteBin6Fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
