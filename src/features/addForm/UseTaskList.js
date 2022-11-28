import { nanoid } from "@reduxjs/toolkit";

const useTaskList = (setFormState) => {
  const addNewTaskListItemClickHandler = () => {
    setFormState((prevState) => {
      const newTaskList = prevState.taskList;
      newTaskList.push({
        name: "",
        qty: 1,
        price: 0,
        id: nanoid(),
      });
      return { ...prevState, taskList: newTaskList };
    });
  };

  const onDeleteTaskListItemClickHandler = (id) => {
    setFormState((prevState) => {
      const newTaskList = [...prevState.taskList].filter(
        (item) => item.id !== id
      );
      return { ...prevState, taskList: newTaskList };
    });
  };

  const onTaskListInputBlurHandler = (index, title, evt) => {
    setFormState((prevState) => {
      const newTaskList = [...prevState.taskList];
      const updatedTaks = { ...newTaskList[index], [title]: evt.target.value };
      newTaskList[index] = updatedTaks;
      return { ...prevState, taskList: newTaskList };
    });
  };
  return {
    addNewTaskListItemClickHandler,
    onDeleteTaskListItemClickHandler,
    onTaskListInputBlurHandler,
  };
};

export default useTaskList;
