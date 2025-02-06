
import './App.css';
// import Card from './comp/cardUI';
import Card from './comp/cards';
import Heading from './comp/heading';
import Contact from './comp/contact';
import Footer from './comp/footer';



function App() {
  return (
    <div className="App">
      <Heading />
      <Card/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
