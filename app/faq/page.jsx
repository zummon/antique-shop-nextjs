import Head from "next/head";
import { sitename } from "../layout";

export default function ({}) {
  let title = "Frequently Asked Questions";
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
        <h3>What is my name?</h3>
        <p>Lorem ipsum dolor.</p>
        <h3>What I really do?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sint
          tempora nemo dicta iusto ab eligendi, atque iure quae asperiores.
        </p>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, culpa?
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          earum qui voluptatem quod optio, error amet officiis ut provident
          quasi eius. Quisquam beatae nihil, illo aliquam iusto eveniet officia
          consectetur voluptate consequuntur, similique cum blanditiis
          voluptatibus exercitationem quis fugit explicabo.
        </p>
      </div>
    </>
  );
}
