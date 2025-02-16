import Page from ".";
import Items from "./items";

const Route = [
  {
    url: "/order",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
  },
  {
    url: "/order/:id/priew",
    Element: Items,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
  },
];

export default Route;
