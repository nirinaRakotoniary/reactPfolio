import { Box } from '@mui/material';
import './App.css';
import Header from './header/Header';
import Home from './home/Home';
import Projects from './projects/Projects';

function App() {
  return (
    <Box>
      <Header />
      <Home />
      <Projects />
    </Box>
  );
}

export default App;
