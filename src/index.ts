import App from "./app";
import {AlquilerRoutes} from "./routes";

const app = new App([new AlquilerRoutes()]);

app.listen();