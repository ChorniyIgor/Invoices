import { getTotalInvoicePrice } from "../invoices-selectors";
import styles from "./TaskListBoard.module.css";

const TaskListBoard = ({ taskList }) => {
  if (!taskList.length) return null;

  return (
    <div className={styles.TaskListBoard}>
      <table>
        <tbody>
          <tr>
            <th>Item Name</th>
            <th>QTY.</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          {taskList.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>£ {item.price}</td>
              <td>£ {item.qty * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.TaskListBoardTotal}>
        <span>Amount Due</span>
        <span className={styles.TaskListBoardTotalPrice}>
          £ {getTotalInvoicePrice(taskList)}
        </span>
      </div>
    </div>
  );
};

export default TaskListBoard;
