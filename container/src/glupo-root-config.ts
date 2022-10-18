import { registerApplication, start } from "single-spa";



registerApplication<any>({
  name: "@glupo/mf-header",
  app: () => System.import("@glupo/mf-header"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
