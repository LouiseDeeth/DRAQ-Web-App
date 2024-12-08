import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Read from './components/Read';
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
  return (
    <Router>
      <Header />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Read" element={<Read />} />
        <Route path="/Create" element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;