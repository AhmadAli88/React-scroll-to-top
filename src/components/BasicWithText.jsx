
import ScrollToTop from "react-scroll-to-top";

const BasicWithText = () => {
  return (
    <div style={{ height: "1500px" }}>
      <h1>Scroll Down and Click the Button</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dolor
        ac orci feugiat aliquet. Donec lacinia placerat metus, ac vehicula elit
        interdum eu.
      </p>

      <ScrollToTop
        smooth
        component={
          <div style={{ padding: "10px", fontSize: "14px", backgroundColor: "#007BFF", color: "#fff", borderRadius: "50%" }}>
            Back to Top
          </div>
        }
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      />
    </div>
  );
};

export default BasicWithText;
