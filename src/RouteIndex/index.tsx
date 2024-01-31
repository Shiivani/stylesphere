import Dashboard from "Pages/Dashboard";
import NotFound from "Pages/NotFound";
import Layout from "Layout";
import {Routes, Route} from "react-router-dom";

const RouteIndex = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default RouteIndex;
