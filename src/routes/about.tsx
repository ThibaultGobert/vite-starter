import { createFileRoute } from "@tanstack/react-router";
import AboutComponent from "../features/about";

export const Route = createFileRoute("/about")({
  component: AboutRoute,
});

function AboutRoute() {
  return (
    <div className="p-2">
      <AboutComponent />
    </div>
  );
}
