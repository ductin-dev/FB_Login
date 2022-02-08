import { Card } from "antd";
import { useDispatch } from "react-redux";
import styles from "./style.module.scss";
import { fblogin } from "../../business/fblogin";
import { useEffect, useState } from "react";
import { UPDATE_USER } from "data/Action";
import { userType } from "application/context/reducer";
import fbSvg from "static/image/Facebook.svg";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    dispatch({
      type: UPDATE_USER,
      user: {
        email: email,
        name: name,
        image: image,
        connected: status,
      } as userType,
    });
  }, [dispatch, status]);

  return (
    <div className={`w-full max-w-xs ${styles.container}`}>
      <Card>
        <a
          style={{
            backgroundColor: "white",
            borderColor: "gray",
            color: "black",
            border: "1px solid gray",
          }}
          onClick={() =>
            fblogin(setEmail, setName, setImage, setStatus, setError)
          }
          className="nc-will-change-transform flex w-full border-rounded rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
        >
          <img
            className="flex-shrink-0"
            src={fbSvg}
            alt="Continue with Facebook"
          />
          <h3 className="flex-grow text-center text-sm font-medium sm:text-sm">
            Đăng nhập với Facebook +{status ? "true" : "false"}
          </h3>
        </a>
      </Card>
    </div>
  );
};

export default Login;
