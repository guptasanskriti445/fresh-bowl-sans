import './App.css';
import Home from './pages/home/Home';
import HeaderNav from './components/HeaderNav';
import FooterBar from './components/FooterBar';

function App() {
  return (
    <>
     <HeaderNav />
    <Home />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <FooterBar />
    </>
  );
}

export default App;
