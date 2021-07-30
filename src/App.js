
import "./css/style.css"
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="flex-main">
      <NavBar />
      <Body />
      <SideBar />
      </div>
      
      <Footer />
  
    </div>
  );
}

export default App;
