import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import DressCode from './pages/dresscode';
import Letter from './pages/letter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dresscode" element={<DressCode />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </Router>
  );
}

export default App;
