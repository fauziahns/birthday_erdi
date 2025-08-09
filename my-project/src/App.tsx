import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Letter from './pages/letter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </Router>
  );
}

export default App;
