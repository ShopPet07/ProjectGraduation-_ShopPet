import HomePage from "../page/Main/Home";

import UserPage from "../page/Main/User";
import ContactPage from "../page/Main/Contact";
import MyCart from "../page/Main/MyCart";
import SettingsPage from "../page/Main/Settings";
import AddPost from "../page/Main/AddPost";

import Login from "../page/Login";
import Register from "../page/Register";
import Forgot from "../page/Forgot";
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
    path: "/myCart",
    components: MyCart,
    layout: MyCart,
  },
  {
    path: "/add",
    components: AddPost,
    layout: AddPost,
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
  {
    path: "/forgot",
    components: Forgot,
    layout: null,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
