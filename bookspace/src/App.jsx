import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Firstpage from "./components/firstpage";
import Fullbook from "./components/fullbook";
import Fullbooknonfic from "./components/fullbooknonfic";
import Fullbookaca from "./components/fullbookaca";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import Login from "./components/login/login";
import Detail from "./components/Detail";
import Reg from "./components/login/Reg";
import Cartpage from "./components/cart/cart.page";
import purchase from "./components/purchase/purchase";
import Reportitemdetial from "./report/Reportitemdetial";
function App() {
  var queryclient = new QueryClient();
  return (
    <>
      <Router>
        <QueryClientProvider client={queryclient}>
          {" "}
          <Nav />
          <Switch>
            <Route exact path="/">
              <Firstpage />
            </Route>
            <route exact path="/Fictional">
              <Fullbook />
            </route>
            <Route exact path="/Non-Fictional">
              <Fullbooknonfic />
            </Route>
            <Route exact path="/Academics">
              <Fullbookaca />
            </Route>
            <Route exact path="/detail/:Book_id" component={Detail} />
            <Route exact path="/reg" component={Reg} />
            <Route path="/login" component={Login} />
            <Route path="/cart" component={Cartpage} />
            <Route path="/purchase" component={purchase} />
            <Route path="/report" component={Reportitemdetial} />
          </Switch>
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>{" "}
      </Router>
    </>
  );
}

export default App;
