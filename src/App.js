import './App.css';

/* import Header and navigation components */
import Header from './components/Header/Header';
import MobileNavigation from './components/MobileNavigation/MobileNavigation';

/* Import components */
import Dashboard from './components/Dashboard/Dashboard';
import Issues from './components/Issues/Issues';
import Notifications from './components/Notifications/Notifications';
import Account from './components/Account/Account';
import RootLayout from './components/RootLayout/RootLayout';

/* Redux store and router imports */
import { Provider } from 'react-redux';
import store from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {

  const router = createBrowserRouter([
    { path: "/", element: <RootLayout />, children: [
      { path: "/", element: <Dashboard /> },
      { path: "/Dashboard", element: <Dashboard /> },
      { path: "/issues", element: <Issues /> },
      { path: "/notifications", element: <Notifications /> },
      { path: "/account", element: <Account /> },
    ]},
  ]);

  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
