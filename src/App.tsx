import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Letter from './pages/letter';
import BalloonGame from './pages/baloon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/game" element={<BalloonGame />} />
      </Routes>
    </Router>
  );
}

export default App;
