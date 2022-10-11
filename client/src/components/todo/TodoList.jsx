import React from "react";
import { BsCheckLg, BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";

const TodoList = () => {
  return (
    <div className="flex justify-center items-center pt-14 w-full h-full ">
      <div className="w-[720px] h-full bg-slate-500 flex justify-center items-center">
        <div className="flex w-full justify-center items-center flex-col">
          <div className=" bg-[#3a3f49] w-[560px] h-fit min-h-[560px] rounded-lg">
            {/**전체 Card Wrapper영역 */}
            <div className="flex justify-center items-center w-full pt-8 px-4 flex-col">
              {/**상단 text영역 */}
              <div className="flex w-full justify-around">
                <div className="text-white">
                  Incomplete Tasks
                  <div>0</div>
                </div>
                <div className="text-white">
                  Complete Tasks
                  <div className="text-center">0</div>
                </div>
              </div>
              {/** Input영역 */}
              <div className="flex items-center justify-between w-full mt-5">
                <input
                  type="text"
                  placeholder="Input Todo"
                  className="w-3/4 h-10  rounded-md pl-4"
                ></input>
                <button className="bg-cyan-300 rounded-md w-1/5 h-10 text-white">
                  Add Todo
                </button>
              </div>
              {/** hr */}
              <div className="w-full my-4 border-b-4 border-gray-600"></div>
              {/** TodoItemList */}
              <div className="w-full [&>div]:mt-2 pb-8">
                {/** TodoItem */}
                <div className="flex justify-between w-full min-h-10 h-fit  p-1 pb-4 border-b border-gray-600">
                  {/** checkArea */}
                  <div className="flex items-center">
                    <div className="h-8 w-8 border-2 border-gray-600 rounded-full hover:cursor-pointer">
                      <div className="w-full h-full flex justify-center items-center text-gray-600 text-lg">
                        <BsCheckLg />
                      </div>
                    </div>
                    {/** TodoArea */}
                    <div className="ml-1 text-white font-sans line-through w-fit">
                      Todo
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
                <div className="flex justify-between w-full min-h-10 h-fit  p-1 pb-4 border-b border-gray-600">
                  {/** checkArea */}
                  <div className="flex items-center">
                    <div className="h-8 w-8 border-2 border-gray-600 rounded-full hover:cursor-pointer">
                      <div className="w-full h-full flex justify-center items-center text-gray-600 text-lg hidden">
                        <BsCheckLg />
                      </div>
                    </div>
                    {/** TodoArea */}
                    <div className="ml-1 text-white font-sans w-fit">Todo</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
