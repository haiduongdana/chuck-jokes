import { Outlet } from "react-router-dom";
import Search from "../../components/search/Search";
import style from "./mainLayout.module.scss";
import arrowDownFull from "../../assets/images/path_2@3x.png";
import person from "../../assets/images/shape@3x.png";

const MainLayout = () => (
  <>
    <div className={style.banner}>
      <Search />
    </div>
    <section className={style.navbar_container}>
      <div className={style.navbar}>
        <nav className={style.header_menu}>
          <div className={style.menu_btn}>
            <button>
              <img src={arrowDownFull} alt="" />
            </button>
          </div>
          <ul className={style.menu_list}>
            <li className={style.menu_item}>
              <a href="#">so funktioniert's</a>
            </li>
            <li className={style.menu_item}>
              <a href="#">sonderangebote</a>
            </li>
            <li className={style.menu_item + " " + style.menu_item_expand}>
              <a href="#">
                <div>
                  <img src={person} alt="" />
                  <span>mein bereich</span>
                  <img src={arrowDownFull} alt="" />
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>

    <div className={style.footer_banner}></div>
    <Outlet />
  </>
);
export default MainLayout;
