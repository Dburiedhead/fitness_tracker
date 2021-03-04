import './App.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GuestMenu from './components/guest_menu';
import UserMenu from './components/user_menu';
import Main from './components/main';

function User(props) {
  return <UserMenu />;
}

function Guest(props) {
  return <GuestMenu />;
}

function Menu(props) {
  const isLogged = props.isLogged;
  if (isLogged) {
    return <UserMenu />;
  }
  return <GuestMenu />;
}

function App() {
  return (
    <div className="App">
      <Menu isLogged={true} />
      <div className="content">
        <Main />
      </div>
    </div>
  );
}

export default App;
