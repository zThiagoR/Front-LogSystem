import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Home from './pages/public/Home';

function App() {

  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </Router>
  );
}

export default App
