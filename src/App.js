import './App.css';

function App() {
  const tittle = 'Welcome to my blog';
  const likes = 50;

  return (
    <div className="App">
      <div className="content">
        <h1> App Component</h1>
        <h2> Tittle: {tittle}</h2>
        <p> Liked: {likes}</p>
      </div>
    </div>
  );
}

export default App;
