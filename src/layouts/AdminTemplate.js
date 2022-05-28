import Footer from "components/Footer/Footer";
import AdminNavbar from "components/Navbars/AdminNavbar";
import Sidebar from "components/Sidebar/Sidebar";
import React from "react";
import { useLocation, Route, Switch } from "react-router-dom";

import routes from "routes.js";
export const AdminTemplate = (props) => {
    //props : path, exact, component
    // const [image, setImage] = React.useState(sidebarImage);
    // const [color, setColor] = React.useState("black");
    // const [hasImage, setHasImage] = React.useState(true);
    // const location = useLocation();
    // const mainPanel = React.useRef(null);
    const { Component, ...restRoute } = props;
    return <Route {...restRoute} render={
        (propsRoute) => {//props.location props.history props.match 
            return <>
                <div className="wrapper">
                    <Sidebar color={'black'} image={""} routes={routes} />
                    <div className="main-panel" ref={mainPanel}>
                        <AdminNavbar />
                        <div className="content">
                            <Component />
                        </div>
                        <Footer />
                    </div>
                </div>
                {/* <FixedPlugin
                    hasImage={hasImage}
                    setHasImage={() => setHasImage(!hasImage)}
                    color={color}
                    setColor={(color) => setColor(color)}
                    image={image}
                    setImage={(image) => setImage(image)}
                /> */}
            </>
        }} />
}
// React.useEffect(() => {
//     console.log(color, 'color');
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//     mainPanel.current.scrollTop = 0;
//     if (
//         window.innerWidth < 993 &&
//         document.documentElement.className.indexOf("nav-open") !== -1
//     ) {
//         document.documentElement.classList.toggle("nav-open");
//         var element = document.getElementById("bodyClick");
//         element.parentNode.removeChild(element);
//     }
// }, [location]);