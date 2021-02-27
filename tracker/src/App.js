import './App.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/menu';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="content">
        <Main />
      </div>
    </div>
  );
}

export default App;
