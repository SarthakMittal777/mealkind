import { Route, Routes } from "react-router-dom";
import { Home, Donate, ThankYou, NotFound, Login, Register } from "./pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/donate" element={<Donate />} />
      <Route path="/thank-you" element={<ThankYou />} />

      <Route path="/org/:slug" element={<Home />} />
      <Route path="/hero/:slug" element={<Home />} />

      <Route path="/charity/profile" element={<Home />} />
      <Route path="/charity/dashboard" element={<Home />} />
      <Route path="/charity/create-request" element={<Home />} />
      <Route path="/charity/history" element={<Home />} />
      <Route path="/charity/notifications" element={<Home />} />
      <Route path="/charity/support" element={<Home />} />

      <Route path="/supplier/profile" element={<Home />} />
      <Route path="/supplier/dashboard" element={<Home />} />
      <Route path="/supplier/notifications" element={<Home />} />
      <Route path="/supplier/support" element={<Home />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
