import Intro from './cmps/Intro.jsx'

import Hero from './cmps/Hero.jsx'
import Features from './cmps/FeatureList.jsx'
import Highlights from './cmps/Highlights.jsx'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Hero />
      <Features />
      <Highlights />
    </div>
  );
}

export default App;
