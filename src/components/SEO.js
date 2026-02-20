import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Pearl Oyewole | Computer Science Student at Caltech",
  description = "Computer Science student at Caltech with experience in software engineering, machine learning, and data visualization. Research at NASA JPL, internships at CrowdStrike and Jane Street.",
  keywords = "Pearl Oyewole, Caltech, Computer Science, Software Engineer, Machine Learning, Data Visualization, NASA JPL, CrowdStrike, Jane Street, React, Python, JavaScript, Portfolio, Research, Internship",
  image = "/intro-photo.png",
  url = "https://pearloyewole.com",
  type = "website"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
  }, [title, description, keywords]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
