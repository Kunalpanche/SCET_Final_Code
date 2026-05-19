/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Ticker from "./components/Ticker";
import HomePage from "./pages/HomePage";
import DepartmentPage from "./pages/DepartmentPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Ticker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/department/:id" element={<DepartmentPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
