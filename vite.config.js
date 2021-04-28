import reactRefresh from '@vitejs/plugin-react-refresh'
import morgan from 'morgan'

import app from './server/app'

const loggingPlugin = (format) => ({
  name: 'configure-server',
  configureServer(server) {
    server.middlewares.use(morgan(format));
  }
});

const expressServerPlugin = (path, expressApp) => ({
  name: 'configure-server',
  configureServer(server) {
    server.middlewares.use(path, expressApp);
  }
});

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [
    loggingPlugin('tiny'),
    expressServerPlugin('/', app),
    reactRefresh()
  ],
  server: {
    hmr: {
      port: 443,
    }
  }
}
