
import ScrollToTop from "react-scroll-to-top";

const Customizing = () => {
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
        top={50} // Show the button 50px from the top of the screen
        style={{ backgroundColor: "purple", borderRadius: "50%" }}
        className="scroll-to-top"
      />
    </div>
  );
};

export default Customizing;
