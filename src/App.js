import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "aos/dist/aos.css";
import Landing from './pages/Landing';
import AOS from "aos";

AOS.init();

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {/* scroll to top icon  */}
        {/* <ScrollToTop className="scroll_up" smooth={true} /> */}
        {/* scroll to top of the page on new page  */}
        {/* <ScrollToTopNav /> */}

        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
