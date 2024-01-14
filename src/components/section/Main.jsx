import React from 'react';
import Search from './Search'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from './Header'
import Footer from './Footer'

const Main = (props) => {
    return (
        <HelmetProvider>
            <scrollTo />
            <Helmet
                titleTemplate="%s / Find English"
                defaultTitle="English Youtube"
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description}></meta>
            </Helmet>

            <Header />
            <main id='main' role='main'>
                <Search />
                {props.children}
            </main>
            <Footer />
        </HelmetProvider>
    )
}

export default Main