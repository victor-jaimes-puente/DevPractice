import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'tracker_react',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
