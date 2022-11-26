import { useRouter } from "./router/useRouter";
// TODO: add craco config with absolute paths
// TODO: fix husky precommit

function App() {
  const appRouter = useRouter()

  return appRouter;
}

export default App;
