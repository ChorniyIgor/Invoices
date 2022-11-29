import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import StatusLabel from "../../../components/StatusLabel/StatusLabel";
import Button from "../../../UI/Button/Button";
import { deleteInvoice, markInvoicePaid } from "../invoices-slice";
import styles from "./ShortInvoicesItem.module.css";

const ShortInvoicesItem = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteBtnClickHandler = (evt) => {
    evt.preventDefault();
    dispatch(deleteInvoice(props.id));
    navigate("/");
  };

  const onPaidBtnClickHandler = (evt) => {
    evt.preventDefault();
    dispatch(markInvoicePaid(props.id));
  };
  return (
    <div className={styles.ShortInvoicesItem}>
      <span className={styles.ShortInvoicesItemStatus}>Status</span>
      <StatusLabel status={props.status} />
      <div className={styles.ShortInvoicesItemControls}>
        <Button>Edit</Button>
        <Button onClick={onDeleteBtnClickHandler}>Delete</Button>
        {props.status !== "paid" && (
          <Button onClick={onPaidBtnClickHandler}>Mark as Paid</Button>
        )}
      </div>
    </div>
  );
};

export default ShortInvoicesItem;
