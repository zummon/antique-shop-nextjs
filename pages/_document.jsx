import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* maybe need to fix for best production */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/css/uikit.min.css"
          />
          <script src="https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/js/uikit.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/js/uikit-icons.min.js"></script>
        </Head>
        <body
          className="uk-background-cover uk-background-fixed uk-height-viewport"
          style={{
            backgroundImage:
              'url(https://source.unsplash.com/YSUnEXMVN5k/1920x2400)',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
