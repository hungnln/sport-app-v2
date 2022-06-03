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
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import Admin from "layouts/Admin.js";
import { Provider } from 'react-redux'
import { store } from './redux/configStore'
import ReduxToastr from "react-redux-toastr";
import Login from "views/Login/Login";
import "./form.scss"
import "./index.scss"
import "./select2.scss"
import { createBrowserHistory } from "history";
import Register from "views/Register/Register";
import User from "layouts/User";
import { AdminTemplate } from "layouts/AdminTemplate";
import Icons from "views/Icons";
export const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/admin" render={(props) => <Admin {...props} />} />
        <Redirect from="/admin" exact to="/admin/dashboard" />
        <Route path="/user" render={(props) => <User {...props} />} />
        {/* <AdminTemplate path="/icons" exact Component={Icons} /> */}
        {/* <Redirect from="/" to="/admin/dashboard" /> */}
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/register" render={(props) => <Register {...props} />} />

      </Switch>
    </Router>
    <ReduxToastr
      timeOut={4000}
      newestOnTop={true}
      // preventDuplicates
      position="top-right"
      getState={(state) => state.toastr} // This is the default
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      // progressBar
      closeOnToastrClick />
  </Provider>,
  document.getElementById("root")
);
