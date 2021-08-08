import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import parse from 'html-react-parser';

function Syntax() {
  return <div className="answer"></div>;
}

export default function ContentRight({ content }) {
  let code = content?.code;

  //   text = text?.split('```');
  //   console.log(text);

  code = code
    ?.replace('{!answer}', `<span class='answer-active'></span>`)
    .replaceAll('{!answer}', `<span class='answer-non-active'></span>`);

  //   code = code?.replaceAll('"', '');

  //   function stripHtml(dirtyString) {
  //     const doc = new DOMParser().parseFromString(dirtyString, 'text/html');
  //     return doc.body.innerHTML;
  //   }

  //   console.log(stripHtml(text));

  //   let string = text;
  //   let doc = new DOMParser().parseFromString(code, 'text/html');
  //   code = doc.body.innerHTML;
  //   console.log(code);

  //   console.log(text);

  //   text[1] = text[1].replace('\r\n', '');
  //   console.log(typeof parse(code));
  return (
    <Container>
      <Row>
        <Col>
          {content && (
            <div className="card-content-right py-2 rounded">
              <div className="mb-3">{content?.content}</div>
              <div className="card-code">{parse(code)}</div>
              {/* <SyntaxHighlighter
                language="xml"
                style={atomOneDark}
                showLineNumbers
                className="rounded"
              >
                {code}
              </SyntaxHighlighter> */}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
