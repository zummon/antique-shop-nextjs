import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  let sitename = 'Antique Shop';

  return (
    <>
      <div className="uk-padding uk-visible@s"></div>
      <div className="uk-container uk-container-small uk-background-muted uk-border-rounded uk-box-shadow-large">
        <Header sitename={sitename} />
        <Component sitename={sitename} {...pageProps} />
        <Footer />
      </div>
      <div className="uk-padding uk-visible@s"></div>
    </>
  );
}
