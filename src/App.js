import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Reviews from './pages/Reviews';
import ModalPage from './pages/ModalPage';
import Tabs from './pages/TabsPage';
import MenuPage from './pages/MenuPage';
import Grocery from './pages/Grocery';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ModalPage />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/grocery" element={<Grocery />} />
      </Routes>
    </div>
  );
}

export default App;
