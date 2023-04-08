import products from '../../lib/products.json';
import Head from 'next/head';

export function getStaticPaths() {
  return {
    paths: products.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let product = products.find(({ slug }) => slug === params.slug);

  return {
    props: {
      ...product,
    },
  };
}

export default function ProductSlugPage({ description, image, price, title, sitename }) {
  return (
    <>
          <Head>
          <title>{title} - {sitename}</title>
        <meta property="og:title" content={`${title} - ${sitename}`} />
        <meta name="twitter:title" content={`${title} - ${sitename}`} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta property="og:image" content={image.src} />
        <meta name="twitter:image" content={image.src} />
      </Head>
      <div className="uk-padding">
        <div className="uk-flex uk-flex-wrap">
          <div>
            <h1>{title}</h1>
            <p className="uk-heading-bullet">{description}</p>
          </div>
          <div className="uk-margin-auto-left uk-text-center">
            <a className="uk-button uk-button-primary uk-text-large uk-border-rounded uk-box-shadow-medium">
              Purchese
              <hr className="uk-margin-remove" />
              {price}
            </a>
          </div>
        </div>
        <img
          className="uk-align-center uk-border-rounded uk-box-shadow-medium"
          {...image}
        />
      </div>
    </>
  );
}
