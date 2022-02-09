import { Card, Avatar, Button } from "antd";
import { useSelector } from "react-redux";
import styles from "./style.module.scss";
import { userType } from "application/context/reducer";
import { trimText } from "static/utils/trimText";
import ErrorMess from "components/message/ErrorMess";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RELOAD_USER } from "data/Action";
import { fblogout } from "business/fblogin";

const { Meta } = Card;

const Transaction = () => {
  const user = useSelector((state: any) => state.globalState.user) as userType;
  const dispatch = useDispatch();

  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (logout) {
      dispatch({
        type: RELOAD_USER,
      });
    }
  }, [logout]);

  return (
    <div className={`w-full max-w-xs ${styles.container}`}>
      {user.connected ? (
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
          <Button
            onClick={() => fblogout(setLogout)}
            style={{ marginTop: 10, width: "100%" }}
          >
            đăng xuất
          </Button>
        </Card>
      ) : (
        <ErrorMess
          title={"Chưa đăng nhập, "}
          mess={
            <NavLink to="/login">
              <a> đăng nhập</a>
            </NavLink>
          }
        />
      )}
    </div>
  );
};

export default Transaction;
