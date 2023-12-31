import { NextRequest, NextResponse } from 'next/server';
import { LocaleRewriteMiddleware } from '../custom/localerewrite';
import { MiddlewarePlugin } from '..';

class LocaleRewritePlugin implements MiddlewarePlugin {
  private redirectsMiddleware: LocaleRewriteMiddleware;
  order = 0;

  constructor() {
    this.redirectsMiddleware = new LocaleRewriteMiddleware({
      disabled: () => false,
    });
  }

  /**
   * exec async method - to find coincidence in url.pathname and redirects of site
   * @param req<NextRequest>
   * @returns Promise<NextResponse>
   */
  async exec(req: NextRequest, res?: NextResponse): Promise<NextResponse> {
    return this.redirectsMiddleware.getHandler()(req, res);
  }
}

export const localerewritePlugin = new LocaleRewritePlugin();
