import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ({ sitename }) {
  const { pathname } = useRouter();

  return (
    <div>
      <h2
        className="uk-margin-top uk-text-muted uk-text-center"
        style={{ fontFamily: "'Sacramento', cursive" }}
      >
        {sitename}
      </h2>
      <ul className="uk-flex-center uk-tab">
        <li className={pathname === '/' ? 'uk-active' : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === '/about' ? 'uk-active' : ''}>
          <Link href="/about">About</Link>
        </li>
        <li className={pathname.startsWith('/product') ? 'uk-active' : ''}>
          <Link href="/product">Product</Link>
        </li>
        <li className={pathname === '/faq' ? 'uk-active' : ''}>
          <Link
            href="/faq"
            uk-tooltip="title: Frequently Asked Questions; pos: bottom"
          >
            FAQ
          </Link>
        </li>
      </ul>
    </div>
  );
}
