import HomePage from "../page/Main/Home/Home";

import UserPage from "../page/Main/User/User";
import ContactPage from "../page/Main/Contact/Contact";
import FavouritePage from "../page/Main/Favourite/Favourite";
import SettingsPage from "../page/Main/Settings/Settings";

import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
const publicRoutes = [
  {
    path: "/",
    components: HomePage,
    layout: HomePage,
  },
  {
    path: "/user",
    components: UserPage,
    layout: UserPage,
  },
  {
    path: "/contact",
    components: ContactPage,
    layout: ContactPage,
  },
  {
    path: "/favourite",
    components: FavouritePage,
    layout: FavouritePage,
  },
  {
    path: "/settings",
    components: SettingsPage,
    layout: SettingsPage,
  },
  {
    path: "/login",
    components: Login,
    layout: null,
  },
  {
    path: "/register",
    components: Register,
    layout: null,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
