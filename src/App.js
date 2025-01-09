import './App.css';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Text Transformation: Uppercase, Lowercase, Or Capitalize</h1>
      </header>
      <section>
        <TextForm />
      </section>
    </div>
  );
}

export default App;
