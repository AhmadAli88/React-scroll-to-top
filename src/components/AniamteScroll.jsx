
import { Link } from "react-scroll";
import ScrollToTop from "react-scroll-to-top";

const AnimateScroll = () => {
  return (
    <div style={{ height: "1500px" }}>
      <h1>Scroll Down and Click the Button</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dolor
        ac orci feugiat aliquet. Donec lacinia placerat metus, ac vehicula elit
        interdum eu.
      </p>

      <ScrollToTop smooth />
      
      <Link to="top" smooth duration={500}>
        <div>Scroll to top section</div>
      </Link>
      
      <div id="top" style={{ marginTop: "1200px" }}>
        <h2>Scroll Target</h2>
      </div>
    </div>
  );
};

export default AnimateScroll;
