import Footer from './componets/particles/Footer';
import Header from './componets/particles/Header';
import Pages from "./componets/pages/Pages";

import './index.css'

function App() {
  return (
    <div className="application">
      <Header />
      <div className="container">
        <Pages/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
