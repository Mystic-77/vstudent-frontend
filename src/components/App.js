import Menu from "./Menu";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DummyComponent from "./DummyComponent";
import Login from "./Login";
import Signup from "./Signup";
const App = () => {
  return (
    <div className="ui fluid container">
		<Router>
			<Menu />
			<Routes>
				<Route path="/login" exact element={ <Login /> } />
				<Route path="/signup" exact element={ <Signup /> } />
				<Route path="/home" exact element={ <DummyComponent title="Home" /> } />
				<Route path="/forums" exact element={ <DummyComponent title="Forums" /> } />
				<Route path="/blogs" exact element={ <DummyComponent title="Blogs" /> } />
				<Route path="/carpools" exact element={ <DummyComponent title="Carpools" /> } />
				<Route path="/documents" exact element={ <DummyComponent title="Documents" /> } />
				<Route path="/profile" exact element={ <DummyComponent title="Profile" /> } />
			</Routes>
		</Router>
    </div>
  );
};

export default App;