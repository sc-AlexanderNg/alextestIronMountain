import type { NextRequest, NextFetchEvent } from 'next/server';
import middleware from 'lib/middleware';

// eslint-disable-next-line
export default async function (req: NextRequest, ev: NextFetchEvent) {
  return middleware(req, ev);
}

export const config = {
  /*
   * Match all paths except for:
   * 1. /api routes
   * 2. /_next (Next.js internals)
   * 3. /sitecore/api (Sitecore API routes)
   * 4. /- (Sitecore media)
   * 5. /healthz (Health check)
   * 6. all root files inside /public
   * ori:   matcher: ['/', '/((?!api/|_next/|healthz|sitecore/api/|-/|favicon.ico|sc_logo.svg).*)'],
   * CS0422559 :   matcher: ['/', '/(.*)'],
   * 
   * reproduce the issue with
   * matcher: [
    '/',
    '/((?!api/|_next/|healthz|sitecore/api/|-/|[\\w-]+\\.\\w+).*)',
  ],
   */
  // issue is solved with this >>matcher: ['/', '/((?!api/|_next/|healthz|sitecore/api/|-/|favicon.ico|sc_logo.svg).*)'],
  matcher: ['/', '/((?!api/|_next/|healthz|sitecore/api/|-/|favicon.ico|sc_logo.svg).*)'],
  // issue occurs with this >> matcher: ['/', '/((?!api/|_next/|healthz|sitecore/api/|-/|[\\w-]+\\.\\w+).*)'],
};
