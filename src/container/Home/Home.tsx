import { Card, Avatar } from "antd";
import { useSelector } from "react-redux";
import styles from "./style.module.scss";
import { userType } from "application/context/reducer";
import { trimText } from "static/utils/trimText";

const { Meta } = Card;

const Transaction = () => {
  const user = useSelector((state: any) => state.globalState.user) as userType;

  return (
    <div className={`w-full max-w-xs ${styles.container}`}>
      {" "}
      <Card>
        <Meta
          className={styles.body_layout}
          avatar={<Avatar src={user.image} />}
          title={
            <>
              <span className={styles.address_text}>
                {trimText(user.name, 22)}&nbsp;
              </span>
            </>
          }
          description={"Email: " + user.email}
        />
      </Card>
    </div>
  );
};

export default Transaction;
