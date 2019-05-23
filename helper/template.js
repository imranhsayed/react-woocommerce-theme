import React from 'react';
import { renderToString } from "react-dom/server";
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import routes from '../client/routes';
import { Provider } from 'react-redux';


export function template( path, store ) {
  const jsx = renderToString(
    <Provider store={ store }>
        <StaticRouter context={{}} location={ path }>
          <div>{ renderRoutes( routes ) }</div>
        </StaticRouter>
    </Provider>
  );
  return `
    <html lang="en">
      <body>
        <div id="root">${ jsx }</div>
        <script src="client.bundle.js"></script>
      </body>
    </html>
  `
}
