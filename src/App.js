import { Provider } from "react-redux";
import Body from "./components/Body";
import { store } from "./utility/store";
function App() {
  return (
    <div className="App   mx-auto">
      <Provider store={store}>
      <Body/>
      </Provider>
     
    </div>
  );
}

export default App;
