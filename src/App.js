import './App.css';
import { Provider } from 'react-redux';
import UserInterface from "./Components/UserInterface";
import { myStore } from './Components/StoreAndReducer/Store';
function App() {
  return (
    <div className="App">
    <Provider store={myStore}>
       <UserInterface/>
    </Provider>
    </div>
  );
}

export default App;
