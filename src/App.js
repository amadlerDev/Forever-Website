/**
 * Render App
 * From this file all the pages runs
 */


// local import
import Menu from './Menu.js';
import Home from './pages/Home.js';
import Shop from './pages/Shop.js';
import Contact from './pages/Contact.js';
import './css/App.css';

// dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom"; 


function App() {
    return (
        <div className="App">
            <header className="App-header"> 
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Menu />}>
                            <Route path="/" element={<Home />} />
                            <Route path="shop" element={<Shop />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="*" />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
