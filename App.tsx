import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Provider } from "react-native-paper";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { theme } from "./src/core/theme";
import { Analytics, Dashboard } from "./src/screens";
import Locales from "./src/locales/en.json";

const Stack = createStackNavigator();

type Screen = {
  name: string;
  component: React.ComponentType<any>;
};

const SCREENS: Screen[] = [
  {
    name: Locales.screens.dashboard,
    component: Dashboard,
  },
  {
    name: Locales.screens.analytics,
    component: Analytics,
  },
];
const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {SCREENS.map((screen: Screen) => (
              <Stack.Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
              />
            ))}
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
