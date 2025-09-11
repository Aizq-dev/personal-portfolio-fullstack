// import "./navbar.css"
import { useI18n } from "../../../hooks/usei18n";

export const Navbar = () => {
  const { t } = useI18n();

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        <li>
          <a className="group flex items-center py-3 active" href="#about">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              {t("nav_about")}
            </span>
          </a>
        </li>

        <li>
          <a className="group flex items-center py-3" href="#workXP">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              {t("nav_experience")}
            </span>
          </a>
        </li>

        <li>
          <a className="group flex items-center py-3" href="#PersonalPJ">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              {t("nav_personal_projects")}
            </span>
          </a>
        </li>

        <li>
          <a className="group flex items-center py-3" href="#bootcamp">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              {t("nav_bootcamp_projects")}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
