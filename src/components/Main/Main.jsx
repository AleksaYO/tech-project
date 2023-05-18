import { useSelector } from "react-redux";
import { user } from "../../redux/selectors";
import css from "./Main.module.css";

const Main = () => {
  const users = useSelector(user);

  return (
    users && (
      <ul className={css.list}>
        {users.map((item) => {
          return (
            <li className={css.item} key={item.id}>
              <img
                width={76}
                height={22}
                className={css.logo}
                src="../../../images/Logo.png"
                alt="logo"
              />
              <div className={css["box-top"]}></div>
              <div className={css["box-middle"]}></div>
              <div className={css["avatar-box"]}>
                <img className={css.img} src={item.avatar} alt="avatar" />
              </div>
              <div className={css["box-bottom"]}>
                <p className={css.tweets}>{item.tweets} TWEETS</p>
                <p className={css.followers}>
                  {String(item.followers).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  FOLLOWERS
                </p>
                <button className={css.btn}>FOLLOW</button>
              </div>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default Main;
