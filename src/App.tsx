import { BrowserRouter, Route, Switch } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { Home } from './Pages/Home';
import { NewRoom } from './Pages/NewRoom';
import { Room } from './Pages/Room';
import Providers from './contexts';

export const notifyError = (text: string) => toast.error(text);

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </BrowserRouter>
      <Toaster position="top-right" />
    </Providers>
  );
}

export default App;
