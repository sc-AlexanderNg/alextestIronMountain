import { debug } from '@sitecore-jss/sitecore-jss';

import { NextRequest, NextResponse } from 'next/server';
import { getLocale } from 'src/helpers/LocaleHelper';

/**
 * extended LocaleRewriteMiddlewareConfig config type for LocaleRewriteMiddleware
 */

export type LocaleRewriteMiddlewareConfig = {
  /**
   * function, determines if middleware should be turned off, based on cookie, header, or other considerations
   * @param {NextRequest} [req] request object from middleware handler
   * @param {NextResponse} [res] response object from middleware handler
   */
  disabled?: (req?: NextRequest, res?: NextResponse) => boolean;
};
/**
 * Middleware to rewrite locales for unsupported culture information
 */
export class LocaleRewriteMiddleware {
  /**
   * @param {LocaleRewriteMiddlewareConfig} [config]
   */
  constructor(protected config: LocaleRewriteMiddlewareConfig) {}

  /**
   * Gets the Next.js middleware handler with error handling
   * @returns route handler
   */
  public getHandler(): (
    req: NextRequest,
    res?: NextResponse
  ) => Promise<NextResponse> {
    return async (req, res) => {
      try {
        return await this.handler(req, res);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Locale Map middleware failed:');

        // eslint-disable-next-line no-console
        console.log(error);

        return res || NextResponse.next();
      }
    };
  }

  private handler = async (
    req: NextRequest,
    res?: NextResponse
  ): Promise<NextResponse> => {
    const createResponse = async () => {
      if (
        this.config.disabled &&
        this.config.disabled(req, NextResponse.next())
      ) {
        debug.redirects('Skipped (locale rewrite middleware is disabled)');

        return res || NextResponse.next();
      }

      const allSegments = req.nextUrl.pathname.split('/');

      //If we're hitting '/' directly, we don't need to bother
      if (allSegments.length < 2) return res || NextResponse.next();

      if (allSegments[0] === '' && allSegments[1] === '')
        return res || NextResponse.next();

      const firstSegment = allSegments[1];

      if (firstSegment === 'media-library') {
        const url = req.nextUrl.clone();

        if (process?.env?.SITECORE_CDN_PATH)
          url.pathname = url.pathname.replace(
            '/media-library/',
            process.env.SITECORE_CDN_PATH
          );

        if (process?.env?.SITECORE_CDN_HOST)
          url.hostname = process.env.SITECORE_CDN_HOST;

        if (req.nextUrl.searchParams?.get('sc_lang')) {
          const incomingLocale = req.nextUrl.searchParams?.get('sc_lang');

          if (incomingLocale) {
            const actualLocale = getLocale(incomingLocale);

            if (firstSegment !== actualLocale) {
              url.searchParams.set('sc_lang', actualLocale);
            }
          }
        }

        return NextResponse.rewrite(url);
      }

      return res || NextResponse.next();
    };

    const response = await createResponse();

    return response;
  };
}
