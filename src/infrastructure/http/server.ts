import "reflect-metadata";

import { container } from "../injection";
import { createApp } from "./app";

const port = 3000;

createApp(container).listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
