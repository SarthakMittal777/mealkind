import { Route, Routes } from "react-router-dom";
import { Home, Donate, ThankYou, NotFound, Login, Register } from "./pages";
import {
  CharityProfile,
  CharityDashboard,
  CharityCreateRequest,
  CharityHistory,
  CharityNotifications,
  CharitySupport,
  SupplierProfile,
  SupplierDashboard,
  SupplierFulfillRequest,
  SupplierHistory,
  SupplierNotifications,
  SupplierSupport,
} from "./pages";

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

      <Route path="/charity/profile" element={<CharityProfile />} />
      <Route path="/charity/dashboard" element={<CharityDashboard />} />
      <Route
        path="/charity/create-request"
        element={<CharityCreateRequest />}
      />
      <Route path="/charity/history" element={<CharityHistory />} />
      <Route path="/charity/notifications" element={<CharityNotifications />} />
      <Route path="/charity/support" element={<CharitySupport />} />

      <Route path="/supplier/profile" element={<SupplierProfile />} />
      <Route path="/supplier/dashboard" element={<SupplierDashboard/>} />
      <Route
        path="/supplier/fulfill-request"
        element={<SupplierFulfillRequest />}
      />
      <Route path="/supplier/history" element={<SupplierHistory />} />
      <Route path="/supplier/notifications" element={<SupplierNotifications/>} />
      <Route path="/supplier/support" element={<SupplierSupport />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
