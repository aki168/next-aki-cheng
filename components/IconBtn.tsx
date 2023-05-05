import Head from "next/head";

export const IconBtn = ({
  faClass,
  linkTo,
}: {
  faClass: string;
  linkTo: string;
}) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <li className="hero__list__item list-none">
        <a href={linkTo} target="_blank">
          <i className={faClass}></i>
        </a>
      </li>
    </>
  );
};
