import AppRouter from "./Router";
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
