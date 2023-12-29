/**
 * THIS FILE IS ONLY USED FOR STORYBOOK TESTING
 */

import { useRef } from 'react';

const Layout = (): JSX.Element => {
  const backToTopRef = useRef<HTMLAnchorElement>(null);

  document?.body?.addEventListener('scroll', () => {
    if (document?.body?.scrollTop >= 2000) {
      backToTopRef?.current?.classList?.add('active');
    } else {
      backToTopRef?.current?.classList?.remove('active');
    }
  });

  return (
    <>
      <div id="top">
        <header data-has-pagenav={false}>
          <div id="header"></div>
        </header>
        <main>
          <a ref={backToTopRef} href="#top" className="to-top-btn"></a>
          <div id="content">
            <div
              style={{
                width: '100%',
                height: '5000px',
                backgroundColor: 'white',
              }}
            ></div>
          </div>
        </main>
        <footer>
          <div id="footer"></div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
