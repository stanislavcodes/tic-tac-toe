import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./Layout";
import { Playground } from "./pages/Playground";
import { Welcome } from "./pages/Welcome";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Welcome />} />
      <Route path="player" element={<Playground />} />
      <Route path="cpu" element={<Playground />} />
    </Route>
  )
)

const App = () => <RouterProvider router={router} />;

export default App;
