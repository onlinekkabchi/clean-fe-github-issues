import { setupWorker } from "msw";
import { handlers } from "./handlers";

export const workier = setupWorker(...handlers);
