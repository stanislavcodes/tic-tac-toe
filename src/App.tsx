import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import { Playground } from "./pages/Playground";
import { Welcome } from "./pages/Welcome";
import { GameContextProvider } from "./contexts/useGameContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Welcome />} />
      <Route path="player" element={<Playground />} />
      <Route path="cpu" element={<Playground />} />
    </Route>
  )
)

const App = () => (
  <GameContextProvider>
    <RouterProvider router={router} />
  </GameContextProvider>
);

export default App;
