import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import App from "./App.tsx";
import Homepage from "./Pages/Homepage.tsx";
import About from "./Pages/About.tsx";
import ContactUs from "./Pages/ContactUs.tsx";
import ErrorPage from "./Pages/ErrorPage.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      {/* Private Routes */}
      <Route index element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<ContactUs />} />
      {/* <Route
          path="/something"
          element={
            <div className="h-screen flex justify-center items-center text-4xl">
              Something Page (Coming Soon)
            </div>
          }
        /> */}
    </Route>,
  ),
);

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);
