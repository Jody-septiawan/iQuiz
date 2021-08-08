import React, { useEffect } from 'react';

export default function ContentLeft({ contentData, setContent, content }) {
  return (
    <div className="card-content-left rounded p-2">
      {contentData?.map((item) => (
        <div
          className={`rounded p-1 mb-1 ${
            content?.id == item?.id && 'card-content-left-children-active'
          }`}
          onClick={() => setContent(item)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}
