import {Outlet, useLocation} from 'react-router-dom';
import {Theme, Container} from '@radix-ui/themes';

import './App.css';
import Homepage from '../../pages/Homepage';

function App() {
  const location = useLocation();
  return (
    <Theme accentColor="violet">
      {location.pathname === '/' ? (<Homepage />) : (<Container><Outlet /></Container>)}
    </Theme>
  );
}

export default App;
