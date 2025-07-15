import Emojis from "@/features/emojis";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/emoji")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Emojis />
    </div>
  );
}
