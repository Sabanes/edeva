// src/components/MyTemplate.jsx

import React from 'react';

const MyTemplate = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS(); // Convert immutable data to plain JS object

  return (
    <div>
      <h1>{data.title}</h1>
      <div>{widgetFor('body')}</div>  {/* Renders rich text or markdown content */}
    </div>
  );
};

export default MyTemplate;