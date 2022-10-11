import React, { useEffect, useState } from "react";
import { BsCheckLg, BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import { todoInputValidate } from "../../utils/inputValidation";

const TodoItem = ({ item, updateTodo, deleteTodo }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    setTodo(item.todo);
  }, [item.todo]);

  const ChangeIsUpdate = () => {
    setIsUpdate((prev) => !prev);
  };
  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const onDeleteTodo = () => {
    deleteTodo(item.id);
  };

  const onToggleTodo = () => {
    updateTodo(item, { type: "isCompleted", data: !item.isCompleted });
  };
  const onUpdateTodo = () => {
    const todoVal = todoInputValidate(todo);
    if (!todoVal) {
      alert("3글자 이상 입력해주세요.");
      return;
    }
    updateTodo(item, { type: "todo", data: todo });
    ChangeIsUpdate();
  };

  return (
    <div className="flex justify-between w-full min-h-10 h-fit p-1 pb-4 border-b border-gray-600">
      {!isUpdate ? (
        <>
          {/** checkArea */}
          <div className="flex items-center h-full w-full">
            <div
              className="h-8 w-8 border-2 border-gray-600 rounded-full hover:cursor-pointer"
              onClick={onToggleTodo}
            >
              <div
                className="w-full h-full flex justify-center items-center text-gray-600 text-lg"
                style={!item.isCompleted ? { display: "none" } : {}}
              >
                <BsCheckLg />
              </div>
            </div>
            {/** TodoArea */}
            <div
              className=" px-2 text-white font-sans w-96 break-all"
              style={
                item.isCompleted ? { textDecorationLine: "line-through" } : {}
              }
            >
              {item.todo}
            </div>
          </div>
          {/** ButtonArea */}
          <div className="flex text-center [&>div]:ml-4">
            <div className="h-8 w-8 border-2 border-gray-600 rounded-full hover:cursor-pointer">
              <div
                className="w-full h-full flex justify-center items-center text-gray-600 text-lg"
                onClick={ChangeIsUpdate}
              >
                <IoIosCreate />
              </div>
            </div>
            <div className="h-8 w-8 border-2 border-gray-600 rounded-full hover:cursor-pointer">
              <div
                className="w-full h-full flex justify-center items-center text-gray-600 text-lg"
                onClick={onDeleteTodo}
              >
                <RiDeleteBin6Fill />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex h-8 items-center justify-between w-full">
          <input
            type="text"
            placeholder="Input Todo"
            className="w-3/4 h-8  rounded-md pl-4"
            value={todo}
            onChange={onChangeTodo}
          ></input>
          <div className="flex h-full">
            <div className="mr-4 h-8 w-8 border-2 border-gray-600 rounded-full hover:cursor-pointer">
              <div
                className="w-full h-full flex justify-center items-center text-gray-600 text-[32px]"
                onClick={ChangeIsUpdate}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="h-8 w-8 border-2 border-gray-600 rounded-full hover:cursor-pointer">
              <div
                className="w-full h-full flex justify-center items-center text-gray-600 text-lg"
                onClick={onUpdateTodo}
              >
                <BsFillPencilFill />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
