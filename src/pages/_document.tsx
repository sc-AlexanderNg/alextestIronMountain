import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context);

    return { ...initialProps };
  }
  render() {
    const languageList = [
      'ar-ae',
      'ar-sa',
      'ar-kw',
      'ar-eg',
      'ar-bh',
      'ar-jo',
      'ar-om',
    ];

    const rightToLeftLang = languageList?.find(
      (lang) => lang === this.props.locale
    );

    return (
      <Html
        lang={this.props.locale}
        data-context-lang={this.props.locale}
        dir={rightToLeftLang !== undefined ? 'rtl' : ''}
      >
        <Head></Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MLMVFLCW"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
