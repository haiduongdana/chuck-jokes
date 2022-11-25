import { Link, Outlet } from "react-router-dom";
import Search from "../../components/search/Search";
import style from "./mainLayout.module.scss";
import arrowDownFull from "../../assets/images/path_2@3x.png";
import person from "../../assets/images/shape@3x.png";
import { useState } from "react";
import className from "classnames";
const MainLayout = () => {
  //Dropdown status
  let [show, setShow] = useState(true);
  return (
    <>
      <div className={style.banner}>
        <Search />
      </div>
      <section className={style.navbar_container}>
        <div className={style.navbar}>
          <nav className={style.header_menu}>
            <div className={style.menu_btn}>
              <button onClick={() => setShow(!show)}>
                <img src={arrowDownFull} alt="" />
              </button>
            </div>
            <ul
              className={className({ [style.hidden]: show }, style.menu_list)}
            >
              <li className={style.menu_item}>
                <Link href="#">so funktioniert's</Link>
              </li>
              <li className={style.menu_item}>
                <Link href="#">sonderangebote</Link>
              </li>
              <li
                className={className(style.menu_item, style.menu_item_expand)}
              >
                <div>
                  <img className={style.personIcon} src={person} alt="" />
                  <span>mein bereich</span>
                  <img src={arrowDownFull} alt="" />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <div className={style.footer_banner}></div>
      <Outlet />
    </>
  );
};
export default MainLayout;
