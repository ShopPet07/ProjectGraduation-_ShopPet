import HomePage from "../page/Main/Home/Home";

import UserPage from "../page/Main/User/User";
import ContactPage from "../page/Main/Contact/Contact";
import MyPost from "../page/Main/MyPost/MyPost";
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
    path: "/mypost",
    components: MyPost,
    layout: MyPost,
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
