import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Your Name",
    "url": "https://your-portfolio-url.com",
    "sameAs": [
      "https://www.linkedin.com/in/yourprofile",
      "https://github.com/yourprofile"
    ],
    "jobTitle": "Your Job Title",
    "worksFor": {
      "@type": "Organization",
      "name": "Your Organization"
    },
    "description": "Your professional portfolio showcasing projects, skills, and experience."
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Professional portfolio of Your Name, showcasing projects, skills, and experience." />
        <meta name="keywords" content="Your Name, portfolio, projects, skills, experience, web developer, software engineer" />
        <meta name="author" content="Your Name" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Helmet>
    </HelmetProvider>
  );
};

export default SEO;
