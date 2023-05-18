import { lazy, useEffect } from "react";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { user } from "./redux/selectors";
import { fetchCard } from "./redux/operations";
import { Route, Routes } from "react-router-dom";
import css from "./components/Main/Main.module.css";

const Main = lazy(() => import("./components/Main/Main"));
const HomePage = lazy(() => import("./components/Home/HomePage"));

function App() {
  const users = useSelector(user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCard());
  }, [dispatch]);

  console.log(users);

  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cards" element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
