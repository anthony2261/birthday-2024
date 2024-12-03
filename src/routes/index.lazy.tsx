import { createLazyFileRoute } from "@tanstack/react-router";
import App from "../App";
import "../index.css";

export const Route = createLazyFileRoute("/")({
  component: App,
  //   component: Index,
});

// function Index() {
//   return (
//     <div className="p-2">
//       <h3>Welcome Home!</h3>
//     </div>
//   )
// }
