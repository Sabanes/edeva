import React from 'react';

// Custom preview template for "about" content
const MyTemplate = ({ entry, widgetFor }) => {
  // Extract content fields from the entry object
  const data = entry.getIn(['data']).toJS();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.About_us_text}</p>
      <button>{data.Reach_us_Button}</button>
      <button>{data.Schedule_Button}</button>
    </div>
  );
};

export default MyTemplate;