// React jSX
//const num = 1 2;
const jsxheading=(
    <>
    <h1 className="header">Hello world</h1>
    <p>This is jsx tutorial</p>
    </>
);
//React Fragment <>........</>
const fragment = (
    <React.Fragment>
    <h1>Heading</h1>
    <p>Paragraph</p>
    </React.Fragment>
);
ReactDOM.createRoot(document.getElementById('root')).render(jsxheading,fragment);