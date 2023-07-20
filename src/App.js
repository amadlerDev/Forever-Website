import Menu from './Menu.js';
import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Menu />}>
                  <Route path="*" />
              </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
