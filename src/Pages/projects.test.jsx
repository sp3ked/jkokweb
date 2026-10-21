import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Projects from "./projects";

test("project cards open from the keyboard", () => {
  render(
    <MemoryRouter initialEntries={["/projects"]}>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/creou" element={<p>Creou details</p>} />
      </Routes>
    </MemoryRouter>,
  );

  fireEvent.keyDown(screen.getByRole("link", { name: "View Creou - AI UGC Platform for Creators" }), {
    key: "Enter",
  });

  expect(screen.getByText("Creou details")).toBeTruthy();
});
