"use client";
import Product from "../../lib/Product";
import products from "../../lib/products.json";
import Head from "next/head";
import { sitename } from "../layout";

export default function ({}) {
  let categories = [...new Set(products.map(({ category }) => category))];
  let title = "Product";

  return (
    <>
      <Head>
        <title>
          {title} - {sitename}
        </title>
        <meta property="og:title" content={`${title} - ${sitename}`} />
        <meta name="twitter:title" content={`${title} - ${sitename}`} />
      </Head>
      <div
        className="uk-margin-top uk-margin-bottom"
        uk-filter="target: .js-filter"
      >
        <ul className="uk-subnav uk-subnav-divider uk-flex-center">
          <li className="uk-active" uk-filter-control="">
            <a href="#">All</a>
          </li>
          {categories.map((text, index) => (
            <li
              uk-filter-control={`[data-category='${text}']`}
              key={`category-${index}`}
            >
              <a href="#">{text}</a>
            </li>
          ))}
        </ul>
        <div
          className="js-filter uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-small"
          uk-grid="masonry: true"
        >
          {products.map((item, index) => (
            <div data-category={item.category} key={`product-${index}`}>
              <Product {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
