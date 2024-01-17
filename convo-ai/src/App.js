import './App.css';
import SideBar from '../src/Components/Sidebar/SideBar'
import Main from '../src/Components/Main/Main'

function App() {
  return (
    <div className="App">
      <div className="SideBar">
        <SideBar />
      </div>
      <div className="Main">
        <Main />
      </div>
    </div>
  );
}

export default App;
