import Product from "../lib/Product";
import products from "../lib/products.json";
import Head from "next/head";
import { sitename } from "../layout";

export default function ({}) {
  let title = "About";
  return (
    <>
      <Head>
        <title>
          {title} - {sitename}
        </title>
        <meta property="og:title" content={`${title} - ${sitename}`} />
        <meta name="twitter:title" content={`${title} - ${sitename}`} />
      </Head>
      <div className="uk-column-1-2@m uk-column-divider uk-padding">
        <h1>{title}</h1>
        <p>
          <a
            className="uk-icon-button uk-margin-small-right"
            uk-icon="facebook"
            href="#"
          ></a>
          <a
            className="uk-icon-button uk-margin-small-right"
            uk-icon="instagram"
            href="#"
          ></a>
          <a
            className="uk-icon-button uk-margin-small-right"
            uk-icon="pinterest"
            href="#"
          ></a>
          <a
            className="uk-icon-button uk-margin-small-right"
            uk-icon="twitter"
            href="#"
          ></a>
          <a
            className="uk-icon-button uk-margin-small-right"
            uk-icon="youtube"
            href="#"
          ></a>
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
          recusandae. Vitae voluptates, ad ipsam itaque qui, doloremque,
          recusandae possimus sunt exercitationem ullam harum temporibus nulla.
          Praesentium est quasi qui. Dolorum.
        </p>
        <ul>
          <li>Dolorum.</li>
          <li>Praesentium est quasi qui.</li>
        </ul>
      </div>
      <div className="uk-margin-top uk-margin-bottom">
        <div
          className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-small"
          uk-grid="masonry: true"
        >
          {products.slice(4, 8).map((item, index) => (
            <div key={index}>
              <Product {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
