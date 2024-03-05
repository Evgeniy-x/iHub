import React from "react";
import { Route, Routes } from "react-router-dom";
import Page404 from "../pages/Page404/Page404";
import SpecialistsTab from "../pages/SpecialistsTab/SpecialistsTab";
import AddSpecialist from "../pages/AddSpecialist/AddSpecialist";
import Analitycs from "../pages/Analitycs/Analitycs";

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<SpecialistsTab content="all" />} />
    <Route
      path="/favourites"
      exact
      element={<SpecialistsTab content="favourites" />}
    />
    <Route
      exact
      path="/disfavourites"
      element={<SpecialistsTab content="disfavourites" />}
    />
    <Route exact path="/add-specialist" element={<AddSpecialist />} />
    <Route exact path="/analitycs" element={<Analitycs />} />

    {/* <Route path="*" element={(routeProps) => <Page404 {...routeProps} />} /> */}
  </Routes>
);

export default AppRoutes;
