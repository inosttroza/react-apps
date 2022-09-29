import './App.css';
//import { StyledEngineProvider } from '@mui/material/styles';
import Grid from './components/Grid'

function App() {
  return (
    <div className="App">
      {/* <StyledEngineProvider injectFirst> */}
        <Grid />
      {/* </StyledEngineProvider> */}
    </div>
  );
}

export default App;
