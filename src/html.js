import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                     var _sf_startpt=(new Date()).getTime();
                `,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          Esta app funciona mejor con javascript activado. No sea leso.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                     var _sf_async_config={};
                    _sf_async_config.uid = 14295;
                    _sf_async_config.domain = 'latercera.com';
                    _sf_async_config.useCanonical = true;
                    _sf_async_config.sections = 'Especiales';
                    _sf_async_config.authors = 'LTNext';

                  (function(){
                    function loadChartbeat() {
                      window._sf_endpt=(new Date()).getTime();
                      var e = document.createElement('script');
                      e.setAttribute('language', 'javascript');
                      e.setAttribute('type', 'text/javascript');
                      e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js');
                      document.body.appendChild(e);
                    }
                    var oldonload = window.onload;
                    window.onload = (typeof window.onload != 'function') ?
                        loadChartbeat : function() { oldonload(); loadChartbeat(); };
                  })();
                `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          var cX = window.cX = window.cX || {}; cX.callQueue = cX.callQueue || [];
          cX.CCE = cX.CCE || {}; cX.CCE.callQueue = cX.CCE.callQueue || [];
          cX.callQueue.push(['setSiteId', '1145199474754072327']);
          cX.CCE.callQueue.push(['sendPageViewEvent','cps', '6b5338b4d6371a3b98418bd8e3abebed490bd2d9']);
          (function(d,s,e,t){e = d.createElement(s);e.type='text/java'+s;e.async='async';e.src='https://cdn.cxense.com/cx.cce.js';t=d.getElementsByTagName(s)[0];t.parentNode.insertBefore(e,t);})(document,'script');
        `,
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
