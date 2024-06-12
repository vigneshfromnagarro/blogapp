import { Box } from '@mui/material';
import './App.css';
import Blog from './components/Blog/Blog';
import { BlogContextProvider } from './context/BlogContext';

function App() {
  return (
    <Box>
      <BlogContextProvider>
      <Blog/>
      </BlogContextProvider>
    </Box>
  );
}

export default App;
