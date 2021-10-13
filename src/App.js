import logo from './logo.svg';
import './App.css';
// import { Slider } from '@mui/material';

import { Container } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Infotech from './components/Infotech/Infotech';
import CardDetails from './components/CardDetails/CardDetails';
import News from './components/News/News';
import IitemsProducts from './components/litemsProduct/IitemsProducts';

function App() {
  return (
    <Container  maxWidth="lg">
    <Navbar/>
    <Infotech/>
    <CardDetails/>
    <News/>
    <IitemsProducts/>

    </Container>
  );
}

export default App;
