import React from 'react';
import ReactDOMServer from 'react-dom/server';
// import HtmlJSX from 'c/html';
import Head from 'c/head';
import Body from 'c/body';
import GTMBody from 'c/google-tag-manager/gtm-body';

/*
 * Index template
 */
export let index = (req, res) => {
  let gtmId = 'GTM-W9K5B8F';
  let headOptions = {
    'title': 'titular title',
    'description': 'describing the description',
    'gtmId': gtmId
  };

  // TODO: (shane) understand node streams/readable/writeable/pipe()
  // https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
  // res.send('<!doctype html>' + ReactDOMServer.renderToStaticMarkup(<HtmlJSX><p>uhh</p></HtmlJSX>));
  res.write('<!doctype html><html className=\'no-js\' style=\'font-size: 14px\'>');

  // TODO: (shane) <head /> and <body /> props to create templates?
  const head = ReactDOMServer.renderToStaticNodeStream(<Head options={headOptions}></Head>);
  const bod = ReactDOMServer.renderToNodeStream(<Body gtmId={gtmId}></Body>);
  head.pipe(res);
  res.write('<body style=\'margin: 0\'>');
  res.write(ReactDOMServer.renderToStaticMarkup(<GTMBody gtmId={gtmId} />));
  bod.pipe(res);
  res.write('</body></html>');
};

/*
 * Error template
 */
export let error404 = (req, res) => {
  console.log('error404 > ' + req.method + ' @ ' + req.originalUrl);

  let meta = {
    title: 'not found | error404',
    description: 'error, not found (404)'
  };

  res.status(404).send(`
    <!doctype html>
    <html class="no-js" lang="en">
      <head>
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W9K5B8F');</script>
        <!-- End Google Tag Manager -->

        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>${meta.title}</title>
        <meta name="description" content="${meta.description}">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      </head>
      <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9K5B8F"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->

        <!--[if lte IE 9]>
          <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
        <![endif]-->
        <article>
          <section>
            <h1>error</h1>
            <p>404</p>
          </section>
        </article>
      </body>
    </html>
  `);
};
