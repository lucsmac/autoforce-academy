import Document, { Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap" rel="stylesheet" />

          <link rel="shortcut icon" href="favicon.jpg" type="image/jpg" />
          <title>Autoforce Academy</title>
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}