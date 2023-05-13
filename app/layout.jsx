"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import "@fontsource/sacramento";
import "uikit/dist/css/uikit.min.css";
// import 'uikit/dist/js/uikit.min.js';
// import 'uikit/dist/js/uikit-icons.min.js';

export const sitename = "Antique Shop";

export default function ({ children }) {
  const { pathname } = useRouter();

  return (
    <html>
      <body
        className="uk-background-cover uk-background-fixed uk-height-viewport"
        style={{
          backgroundImage:
            "url(https://source.unsplash.com/YSUnEXMVN5k/1920x2400)",
        }}
      >
        <div className="uk-padding uk-visible@s"></div>
        <div className="uk-container uk-container-small uk-background-muted uk-border-rounded uk-box-shadow-large">
          {/* Header */}
          <div>
            <h2
              className="uk-margin-top uk-text-muted uk-text-center"
              style={{ fontFamily: "'Sacramento', cursive" }}
            >
              {sitename}
            </h2>
            <ul className="uk-flex-center uk-tab">
              <li className={pathname === "/" ? "uk-active" : ""}>
                <Link href="/">Home</Link>
              </li>
              <li className={pathname === "/about" ? "uk-active" : ""}>
                <Link href="/about">About</Link>
              </li>
              <li
                className={pathname.startsWith("/product") ? "uk-active" : ""}
              >
                <Link href="/product">Product</Link>
              </li>
              <li className={pathname === "/faq" ? "uk-active" : ""}>
                <Link
                  href="/faq"
                  uk-tooltip="title: Frequently Asked Questions; pos: bottom"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Body */}
          {children}

          {/* Footer */}
          <div className="uk-text-center uk-margin-large-top uk-margin-large-bottom">
            <a
              className="uk-link-reset uk-text-large"
              href="https://zummon.page/"
              target="_blank"
              style={{ fontFamily: "'Sacramento', cursive" }}
            >
              Made by zummon
            </a>
          </div>
        </div>
        <div className="uk-padding uk-visible@s"></div>
      </body>
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/js/uikit.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/js/uikit-icons.min.js"></Script>
    </html>
  );
}
