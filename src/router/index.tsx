import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "@/layout";
import AuthRoute from "@/views/login/route";

interface Imeta {
  isLoginIf: boolean;
}

interface IRouter {
  url: string;
  Element: React.ComponentType;
  children?: IRouter[];
  meta?: Imeta;
  hideIfchildern?: boolean;
}

const dynimicImportRoutes = import.meta.glob("../views/**/route.ts", {
  eager: true,
}) as Record<string, { default: IRouter[] }>;

const router: IRouter[] = [];

Object.values(dynimicImportRoutes).forEach((el) => {
  router.push(...el.default);
});

console.log(router);
const nestedRoutes = (routes: IRouter[]) =>
  routes.map(({ Element, url, children, meta }: IRouter) => {
    if (meta?.isLoginIf) {
      if (children?.length) {
        return (
          <Fragment key={url}>
            <Route path={url} element={<Element />} />
            {nestedRoutes(children)}
          </Fragment>
        );
      }
      return <Route key={url} path={url} element={<Element />} />;
    }
  });

export const AuthorizedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {nestedRoutes(router)}
      </Route>
      {/* <Route path="/*" element={<NotFound />} /> */}
    </Routes>
  );
};

export const UnAuthorizedRoutes = () => (
  <Routes>
    {AuthRoute.map(({ Element, url }: IRouter) => (
      <Route key={url} path={url} element={<Element />} />
    ))}
    {/* <Route path="/*" element={<NotFound />} /> */}
  </Routes>
);
