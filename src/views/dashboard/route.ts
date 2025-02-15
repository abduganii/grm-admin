import Page from ".";

const Route = [
  {
    url: "/dashboard",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
  },
];

export default Route;
