import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/Create';
import Edit from './components/Edit';

//added links in navbar to routes
//Updated the App so that it display the Footer component when the URL changes to localhost:3000/read 
//and Header component when the URL of the App changes to localhost:3000/create under the Navigation bar.
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/Read" element={<Read/>} />
        <Route path="/Create" element={<Create />} />
        <Route path='/Edit/:id' element={<Edit />} />
      </Routes>
      <Footer />
    </Router>
  ); //path='/edit/:id': The :id portion is a URL parameter that represents the unique ID of the movie the user wants to edit. When navigating to this path, React Router will capture the id from the URL and pass it to the Edit component through the useParams hook, allowing the component to fetch and update the correct movie data.
//element={<Edit />}: This specifies that the Edit component should be rendered when the route /edit/:id is visited. By associating this route with the Edit component, the app can display the edit form for the selected movie.
}

export default App;