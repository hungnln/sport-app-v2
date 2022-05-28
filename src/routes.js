/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import Login from "views/Login/Login";
import Club from "views/Club/Club";
import Player from "views/Player/Player";
import StadiumList from "views/Stadium/StadiumList";
import Tournament from "views/Tournament/Tournament";


const dashboardRoutes = [
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin",
  // },
  {
    path: "",
    name: "Dashboard",
    icon: "fa-regular fa-house",
    component: Dashboard,
    layout: "/admin",
    title: "Dasboard"
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "nc-icon nc-circle-09",
  //   component: UserProfile,
  //   layout: "/admin",
  // },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/tournament",
    name: "Tournament",
    icon: "nc-icon nc-notes",
    component: Tournament,
    layout: "",
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  // {
  //   path: "/login",
  //   name: "Test modal",
  //   icon: "nc-icon nc-bell-55",
  //   component: Login,
  //   layout: "/",
  // },
  // {
  //   path: "/notifications",
  //   name: "User",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/user",
  // },
  {
    path: "/club",
    name: "Clubs",
    icon: "nc-icon nc-bell-55",
    component: Club,
    layout: "",
  },
  {
    path: "/player",
    name: "Players",
    icon: "nc-icon nc-bell-55",
    component: Player,
    layout: "",
  },
  {
    path: "/stadium",
    name: "Stadiums",
    icon: "nc-icon nc-bell-55",
    component: StadiumList,
    layout: "",
  },
];

export default dashboardRoutes;
