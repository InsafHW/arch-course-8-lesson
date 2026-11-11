import { RouterProvider } from "react-router-dom";
import { setupRouter } from "./setupRouter";
import {ContainerProvider} from "./container/ContainerProvider";
import {container} from "./container/container";

const router = setupRouter();

export function App() {
  return (
    <ContainerProvider container={container}>
        <RouterProvider router={router} />
    </ContainerProvider>
  );
}
