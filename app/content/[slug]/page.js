import React from 'react';

// Mock function to fetch content from a CMS or database
async function getContent(slug) {
  // In a real application, you would fetch data from a CMS or database
  const content = {
    'about-me': {
      title: 'About Me',
      content:
        "Hi, I'm Angie Kim. I'm an engineer, writer, and ceramicist.",
    },
    'my-work': {
      title: 'My Work',
      content:
        "Here's a collection of my recent projects and achievements.",
    },
  };
  return (
    content[slug] || { title: 'Not Found', content: 'Page not found' }
  );
}

export default async function ContentPage({ params }) {
  const { slug } = params;
  const { title, content } = await getContent(slug);

  return (
    <div className="content-page">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
