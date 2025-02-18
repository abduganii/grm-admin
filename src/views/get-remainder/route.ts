import Page from ".";

const Route = [
  {
    url: "/get-remainder",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
  },
];

export default Route;
