import { Outlet } from "react-router-dom";
import Search from "../../components/search/Search";
import style from "./mainLayout.module.scss";
const MainLayout = () => (
  <>
    <div className={style.banner}>
      <Search />
    </div>
    <nav className={style.header_menu}>
      <ul className={style.menu_list}>
        <li className={style.menu_item}>
          <a href="#">so funktioniert's</a>
        </li>
        <li className={style.menu_item}>
          <a href="#">sonderangebote</a>
        </li>
        <li className={style.menu_item}>
          <a href="#">
            <div>
              <img src="../../assets/images/shape@3x.png" alt="" />
              <span>mein bereich</span>
              <img src="../../assets/images/path_2@3x.png" alt="" />
            </div>
          </a>
        </li>
      </ul>
    </nav>

    <div className={style.footer_banner}></div>
    <Outlet />
  </>
);
export default MainLayout;
