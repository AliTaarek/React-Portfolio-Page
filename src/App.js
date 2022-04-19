import './App.css';

import HeroComponent from './components/HeroComponent';
import AboutComponent from './components/AboutComponent'
import SkillsComponent from './components/SkillsComponent'
import PortfolioComponent from './components/PortfolioComponent';
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <div className="App">
        <HeroComponent />
        <AboutComponent />
        <SkillsComponent />
        <PortfolioComponent />
        <FooterComponent />
    </div>
  );
}

export default App;
