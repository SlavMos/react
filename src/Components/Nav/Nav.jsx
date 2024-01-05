import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        {/* Navlinke kogtagorcenk or aranc perezagruzki poxe texere(s.active na or activnun hamar style tank) */}
        <NavLink
          to="/profile"
          className={(navData) =>
            `${navData.isActive ? s.active : ""} ${s.item}`
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs"
          className={(navData) =>
            `${navData.isActive ? s.active : ""} ${s.item}`
          }
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          className={(navData) =>
            `${navData.isActive ? s.active : ""} ${s.item}`
          }
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/music"
          className={(navData) =>
            `${navData.isActive ? s.active : ""} ${s.item}`
          }
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/setting"
          className={(navData) =>
            `${navData.isActive ? s.active : ""} ${s.item}`
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
