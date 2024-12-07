import '../App.css';
import logo from '../logo.svg'; 

const Header = () => {
  return (
    <h1 className="header"  id="top">
      <img
        src={logo} 
        alt="Logo"
        width="40" 
        height="40" 
        className="d-inline-block align-top"
      />
      Recipe Explorer
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
