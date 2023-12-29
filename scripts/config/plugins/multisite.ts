import { ConfigPlugin, JssConfig } from '..';
import {
  GraphQLSiteInfoService,
  SiteInfo,
} from '@sitecore-jss/sitecore-jss-nextjs';

import chalk from 'chalk';

/**
 * This plugin will set the "sites" config prop.
 * By default this will attempt to fetch site information directly from Sitecore (using the GraphQLSiteInfoService).
 * You could easily modify this to fetch from another source such as a static JSON file instead.
 */
class MultisitePlugin implements ConfigPlugin {
  order = 11;

  async exec(config: JssConfig) {
    let sites: SiteInfo[] = [];

    if (process.env.DISABLE_SSG_FETCH === 'false') {
      const endpoint = config.graphQLEndpoint;
      const apiKey = config.sitecoreApiKey;

      if (!endpoint || !apiKey) {
        console.warn(
          chalk.yellow(
            'Skipping site information fetch (missing GraphQL endpoint or API key).'
          )
        );
      } else {
        // eslint-disable-next-line no-console
        console.log(`Fetching site information from ${endpoint}`);

        try {
          const siteInfoService = new GraphQLSiteInfoService({
            endpoint,
            apiKey,
          });

          sites = await siteInfoService.fetchSiteInfo();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(chalk.red('Error fetching site information'));
          // eslint-disable-next-line no-console
          console.error(error);
        }
      }
    }

    return { ...config, sites: JSON.stringify(sites) };
  }
}

export const multisitePlugin = new MultisitePlugin();
