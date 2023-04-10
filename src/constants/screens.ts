import { Analytics, Dashboard } from "../screens";
import Locales from "../locales/en.json";

export type Screen = {
  name: string;
  component: React.ComponentType<any>;
};

export const SCREENS: Screen[] = [
  {
    name: Locales.screens.dashboard,
    component: Dashboard,
  },
  {
    name: Locales.screens.analytics,
    component: Analytics,
  },
];
