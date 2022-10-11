import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="flex justify-center items-center pt-14 w-full h-full ">
      <div className="w-[720px] h-full bg-slate-500 flex justify-center items-center">
        <div className="flex w-full justify-center items-center flex-col">
          {/**전체 Card Wrapper영역 */}
          <div className=" bg-[#3a3f49] w-[560px] h-fit min-h-[560px] rounded-lg">
            {/**card Content영역 */}
            <div className="flex justify-center items-center w-full pt-8 px-4 flex-col ">
              {/**상단 text영역 */}
              <div className="flex w-full justify-around">
                <div className="text-white">
                  Incomplete Tasks
                  <div className="text-center">0</div>
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
                <TodoItem TodoItem={"todo"} checked={false} />
                <TodoItem TodoItem={"todo2"} checked={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
