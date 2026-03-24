import { withModuleFederation } from '@nx/module-federation/angular';
import config from './module-federation.config';

/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
export default async function (wConfig: any) {
  const baseFactory = await withModuleFederation(config, { dts: false });
  const finalConfig = await baseFactory(wConfig);

  return {
    ...finalConfig,
    devServer: {
      ...(finalConfig.devServer || {}),
      proxy: [
        {
          context: ['/api'],
          target: 'http://127.0.0.1:3000',
          secure: false,
          changeOrigin: true
        }
      ]
    }
  };
}
