import { useInput } from "../../../hooks/useInput";
import Input from "../../../UI/Input/Input";
import styles from "./TaskList.module.css";
import Button from "../../../UI/Button/Button";
import binIcon from "../../../assets/bin.png";

const TaskListInput = (props) => {
  const input = useInput({
    initialValue: props.initialValue,
  });

  return <Input data={input} onBlur={props.onBlur} />;
};

const TaskList = (props) => {
  const items = props.taskList;

  return (
    <div className={styles.TaskList}>
      <table>
        <tbody>
          {items.length ? (
            <tr>
              <th>Item Name</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Total</th>
              <th></th>
            </tr>
          ) : null}

          {items.map((item, index) => (
            <tr key={"TaskList" + item.id}>
              <td>
                <TaskListInput
                  initialValue={item.name}
                  onBlur={props.onInputBlurHandler.bind(null, index, "name")}
                />
              </td>
              <td>
                <TaskListInput
                  key={"qty" + item.id}
                  initialValue={item.qty}
                  onBlur={props.onInputBlurHandler.bind(null, index, "qty")}
                />
              </td>
              <td>
                <TaskListInput
                  key={"price" + item.id}
                  initialValue={Number.parseFloat(item.price).toFixed(2)}
                  onBlur={props.onInputBlurHandler.bind(null, index, "price")}
                />
              </td>
              <td>
                <span className={styles.TotalPrice}>
                  {Number.parseFloat(item.qty * item.price).toFixed(2)}
                </span>
              </td>
              <td
                className={styles.DeleteRow}
                onClick={props.onDeleteItemClickHandler.bind(null, item.id)}
              >
                <img src={binIcon} alt="delete icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        type="button"
        onClick={props.addNewListItemClickHandler}
        view="add"
        color="light"
      >
        + Add New Item
      </Button>
    </div>
  );
};
export default TaskList;
