import Menu from "./Menu";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DummyComponent from "./DummyComponent";

const App = () => {
  return (
    <>
    <Router>
        <Menu />
		<Routes>
			<Route path="/home" exact element={ <DummyComponent title="Home" /> } />
			<Route path="/forums" exact element={ <DummyComponent title="Forums" /> } />
			<Route path="/blogs" exact element={ <DummyComponent title="Blogs" /> } />
			<Route path="/carpools" exact element={ <DummyComponent title="Carpools" /> } />
			<Route path="/documents" exact element={ <DummyComponent title="Documents" /> } />
			<Route path="/profile" exact element={ <DummyComponent title="Profile" /> } />
		</Routes>
    </Router>
    </>
  );
};

export default App;