import {PaperProvider} from 'react-native-paper';
import RootNavigation from './src/app/RootNavigation';

const App = () => {
  return (
    <PaperProvider>
      <RootNavigation />
    </PaperProvider>
  );
};

export default App;
