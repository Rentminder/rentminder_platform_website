import React from 'react';
import LogoImage from '../../images/logo.png';

export function Head() {
  return (
    <>
      <meta
        name="description"
        content="RentMinder connects with your financial software to monitor, analyze, and report."
      />

      <meta property="og:url" content="https://rentminder.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="RentMinder" />
      <meta property="og:image" content={LogoImage} />
      <meta property="og:image:alt" content="RentMinder Logo" />
      <meta
        property="og:description"
        content="RentMinder connects with your financial software to monitor, analyze, and report."
      />
      <meta property="og:site_name" content="RentMinder" />
      <meta property="og:locale" content="en_US" />
      <meta property="article:author" content="RentMinder" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://rentminder.com" />
      <meta name="twitter:title" content="RentMinder" />
      <meta
        name="twitter:description"
        content="RentMinder connects with your financial software to monitor, analyze, and report."
      />
      <meta name="twitter:image" content={LogoImage} />
      <meta
        name="twitter:image:alt"
        content="A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters."
      />
    </>
  );
}
