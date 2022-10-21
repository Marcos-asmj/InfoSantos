import { StatusBar } from 'expo-status-bar';
import { MenuProvider } from "react-native-popup-menu";
import { createAppContainer }  from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Feeds from './screens/Feeds';
import Detalhes from './screens/Detalhes';

const Navigator = createStackNavigator(
  {
    Feeds: { screen : Feeds },
    Detalhes: { screen: Detalhes }
  }
);

const Container = createAppContainer(Navigator);

export default function App() {
  return (
    <MenuProvider>
      <StatusBar></StatusBar>
      <Container></Container>
    </MenuProvider>
  );
}