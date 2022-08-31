import { createRouter } from "./context";
import superjson from "superjson";

import { movieRouter } from "./movie";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("movie.", movieRouter)

export type AppRouter = typeof appRouter;

