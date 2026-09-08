import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "sonner";
const App = () => {
  return (
    <>
      <Toaster richColors position="top-center" />
      <AppRoutes />
    </>
  );
};

export default App;
