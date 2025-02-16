import Page from ".";

const Route = [
  {
    url: "/product",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
  },
];

export default Route;
