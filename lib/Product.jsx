import Link from 'next/link';

export default function ({ image, slug, title, price }) {
  return (
    <Link
      href={`/product/${slug}`}
      className="uk-display-block uk-inline-clip uk-transition-toggle uk-border-rounded uk-box-shadow-medium"
      uk-tooltip={`${title} ${price}`}
    >
      <img className="uk-transition-scale-up uk-transition-opaque" {...image} />
    </Link>
  );
}
