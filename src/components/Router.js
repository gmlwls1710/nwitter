import React from "react";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter = () => {
 const [isLoggedIn, setisLoggedIn] = useState(true);
 return (
<Router>
  <Swtich>
        {isLoggedIn ? (  
        <>
        <Route exact path="/">
            <Home />
        </Route>ß
        </> 
        ) : (
            <Route exact path="/">
                <Auth />
            </Route>
        )}

  </Swtich>

</Router>
 );
};

export default AppRouter;