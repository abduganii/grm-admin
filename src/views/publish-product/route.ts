import Page from ".";

const Route = [
  {
    url: "/publish-product",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
  },
];

export default Route;
