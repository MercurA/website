import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MainDocument extends Document {
    render(){
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet" />
                    <style jsx global>
                        {`
                            html,
                            body {
                                height: 100%;
                                width: 100%;
                                font-family: 'Lora', serif;
                            }
                            *,
                            *:after,
                            *:before {
                                box-sizing: border-box;
                            }
                            body {
                                font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
                                font-size: 1rem;
                                margin: 0;
                            }
                        `}
                    </style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

MainDocument.getInitialProps = async ctx => {
    const initialProps = await Document.getInitialProps(ctx)

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            <React.Fragment key="styles">
                {initialProps.styles}
            </React.Fragment>
        ]
    }
}

export default MainDocument;