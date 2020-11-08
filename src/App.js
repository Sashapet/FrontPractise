import Section1 from './components/Sections/Section1';
import Section2 from './components/Sections/Section2';
import Section3 from './components/Sections/Section3';
import Section4 from './components/Sections/Section4';
import Section5 from './components/Sections/Section5';
import Footer from './components/Sections/Footer';
function App() {
  return (
    <div className="App">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section2 left='yes' />
      <Section3 second='yes' />
      <Section2 third='yes' />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}

export default App;
