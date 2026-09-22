import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.frdevelopers.storepilot",
  appName: "FR StorePilot",
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
