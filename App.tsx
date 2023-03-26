import 'react-native-gesture-handler';
import { AppNavigator } from './src/navigators';
import { Provider as ReduxProvider } from 'react-redux';
import store from './src/store';

function App() {
  return (
    <ReduxProvider store={store}>
      <AppNavigator />
    </ReduxProvider>
  );
}

export default App;
