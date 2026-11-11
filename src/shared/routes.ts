export const ROUTES = {
  HOME: {
    path: "/",
    label: "Characters",
  },
  FAVORITES: {
    path: "/favorites",
    label: "Favorites",
  },
    ANALYTICS: {
        path: "/analytics",
        label: "Analytics",
    }
} as const;

export const getRoutes = () => Object.values(ROUTES);

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
