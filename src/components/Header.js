import '../App.css';
import logo from '../logo.svg'; 

const Header = () => {
  return (
    <h1 className="header">
      <img
        src={logo} 
        alt="Logo"
        width="40" 
        height="40" 
        className="d-inline-block align-top"
      />
      My Recipes
      <img
        src={logo} 
        alt="Logo"
        width="40" 
        height="40" 
        className="d-inline-block align-top"
      />
    </h1>
  );
};

export default Header;
