import '../App.css';
import logo from '../logo.svg'; 

const Header = () => {
  return (
    <h1 className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
      <img
        src={logo} 
        alt="Logo"
        width="40" 
        height="40" 
        className="d-inline-block align-top"
      />
      My Favourite Recipes
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
