import { Outlet } from "react-router-dom";
import Search from "../../components/search/Search";
import style from "./mainLayout.module.scss";
const MainLayout = () => (
  <>
    <div className={style.banner}>
      <Search />
    </div>
    <Outlet />
  </>
);
export default MainLayout;
