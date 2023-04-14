import { Analytics, Dashboard } from "../screens";
import Locales from "../locales/en.json";

export type Screen = {
  name: string;
  component: React.ComponentType<any>;
};

export const LICENSE_REGEX = /^[A-Z\d]{4}-[A-Z\d]{3}-[A-Z\d]{2}-[A-Z\d]{3}-[A-Z\d]{1}$/;

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
