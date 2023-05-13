import Product from "../lib/Product";
import products from "../lib/products.json";
import Head from "next/head";
import { sitename } from "./layout";

export default function ({}) {
  return (
    <>
      <Head>
        <title>{sitename}</title>
        <meta property="og:title" content={sitename} />
        <meta name="twitter:title" content={sitename} />
      </Head>
      <div className="uk-column-1-2@m uk-column-divider uk-padding">
        <h1>Home</h1>
        <p>Lorem, ipsum dolor.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          libero alias beatae praesentium debitis laborum hic consequatur magni
          esse distinctio cupiditate eaque tenetur sint, rerum reprehenderit
          dicta totam. Minus, eius.
        </p>
        <ul>
          <li>Dolorum.</li>
          <li>Praesentium est quasi qui.</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          libero alias beatae praesentium debitis laborum hic consequatur magni
          esse distinctio cupiditate eaque tenetur sint, rerum reprehenderit
          dicta totam. Minus, eius.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          libero alias beatae praesentium debitis laborum hic consequatur magni
          esse distinctio cupiditate eaque tenetur sint, rerum reprehenderit
          dicta totam. Minus, eius.
        </p>
      </div>
      <div className="uk-margin-top uk-margin-bottom">
        <div
          className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-small"
          uk-grid="masonry: true"
        >
          {products.slice(0, 4).map((item, index) => (
            <div key={index}>
              <Product {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
