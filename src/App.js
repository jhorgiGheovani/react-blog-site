import Navbar from './Navbar';
import Home from './Home';
function App() {
  const tittle = 'Welcome to my blog';
  const likes = 50;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
