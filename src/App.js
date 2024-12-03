import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
  return (
    <Router>
      <Header />
      <NavigationBar />
      <Routes>
        <Route path="/Home" element={<Content />} />
        <Route path="/Read" element={<Read/>} />
        <Route path="/Create" element={<Create />} />
        <Route path='/Edit/:id' element={<Edit />} />
      </Routes>
      <Footer />
    </Router>
  ); 
}

export default App;