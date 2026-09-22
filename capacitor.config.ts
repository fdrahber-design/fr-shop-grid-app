import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.frdevelopers.shopgrid",
  appName: "FR SHOP GRID",
  webDir: "web",
  server: {
    url: "https://frdevelopers.com/login",
    cleartext: false
  },
  android: {
    allowMixedContent: false
  }
};

export default config;
