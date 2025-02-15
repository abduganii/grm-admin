import LognPage from ".";

const AuthRoute = [
  {
    url: "/auth/login",
    Element: LognPage,
    meta: { isLoginIf: false, role: new Set(["admin"]) },
  },
];

export default AuthRoute;
