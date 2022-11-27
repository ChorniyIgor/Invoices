import { useEffect, useState } from "react";
import { useInput } from "../../../hooks/useInput";
import Input from "../../../UI/Input/Input";
import styles from "./TaskList.module.css";

const DAMMY = [
  {
    name: "Banner Design",
    qty: 1,
    price: 200,
  },
  {
    name: "Banner Design 2",
    qty: 2,
    price: 220,
  },
];

const TaskList = () => {
  const [state, setState] = useState(DAMMY);

  return (
    <div className={styles.TaskList}>
      <table>
        <th>
          <td>Item Name</td>
          <td>Qty.</td>
          <td>Price</td>
          <td>Total</td>
          <td></td>
        </th>

        {state.map((item) => (
          <tr>
            <td>
              {item.name}{" "}
              {/* <Input data={useInput({ label: "", validate: () => true })} /> */}
            </td>
            <td>{item.qty}</td>
            <td>{item.price}</td>
            <td>{item.qty * item.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default TaskList;
