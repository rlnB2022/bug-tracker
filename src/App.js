import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import MobileNavigation from './components/MobileNavigation/MobileNavigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <MobileNavigation />
    </div>
  );
}

export default App;
