
import React from 'react';
import 'react-native-gesture-handler';
import Main from './src/main';
import SplashScreen from 'react-native-splash-screen';

function App() {

  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return <Main />
}


export default App;
