import { Route, Routes } from "react-router";

import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { NewNote } from "../pages/NewNote";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/new" element={<NewNote />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
