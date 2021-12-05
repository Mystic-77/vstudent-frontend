import Menu from "./Menu";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DummyComponent from "./DummyComponent";
import Login from "./Login";
import Signup from "./Signup";
import Logout from "./Logout";

import { useCookies } from "react-cookie";
import Landing from "./Landing";
import Profile from "./Profile";
import Carpool from "./Carpool";
import AddCarpool from "./AddCarpool";

const App = () => {
    const [cookies, setCookies] = useCookies();
    let menu;
    if (cookies.isLoggedIn)
    {
        menu = <Menu />;
    }
    else
    {
        menu = <></>;
    }

    return (
        <div className="container-fluid">
            <Router>
                {menu}
                <Routes>
                    <Route path="/login" exact element={ <Login /> } />
                    <Route path="/signup" exact element={ <Signup /> } />
                    <Route path="/" exact element={ <Landing /> } />
                    <Route path="/forums" exact element={ <DummyComponent title="Forums" /> } />
                    <Route path="/blogs" exact element={ <DummyComponent title="Blogs" /> } />
                    <Route path="/carpools" exact element={ <Carpool /> } />
                    <Route path="/addCarpool" exact element={ <AddCarpool /> } />
                    <Route path="/documents" exact element={ <DummyComponent title="Documents" /> } />
                    <Route path="/profile" exact element={ <Profile /> } />
                    <Route path="/logout" exact element={ <Logout /> } />
                </Routes>
            </Router>
        </div>
    );
};

export default App;