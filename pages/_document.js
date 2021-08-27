import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="zxx">
                <Head>
                    <link rel="icon" type="image/png" href="/images/favicon.ico"></link>
                    <link
                        href='https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800&display=swap'
                        rel='stylesheet'
                        />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;