import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, FrontEnd, Flutter, DotNet, Login, SignUp } from "./pages";
import { Nav } from "./components";

function App() {
  return (
    <main>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frontend" element={<FrontEnd />} />
          <Route path="/flutter" element={<Flutter />} />
          <Route path="/dotnet" element={<DotNet />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
