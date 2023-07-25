import ReactDOMServer from "react-dom/server";

const TestMail = () => {
  return (
    <html>
      // important to keep the color scheme on some email clients
      {/* <meta name="color-scheme" content="only"></meta> */}
      <head>// We will use this later</head>
      <div className="py-3">Hi I am a react component</div>
    </html>
  );
};

const emailHtml = ReactDOMServer.renderToStaticMarkup(<TestMail />);