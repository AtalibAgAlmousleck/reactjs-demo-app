import LOGO from "../assets/react-core-concepts.png";
import './Header.css';


const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const description = reactDescription[genRandomInt(2)];
  return (
    <header>
    <img src={LOGO} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} 
      </p>
    </header>
  );
}

export default Header;
