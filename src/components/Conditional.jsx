import  { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";

const Conditional = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "1500px" }}>
      <h1>Scroll Down and Click the Button</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dolor
        ac orci feugiat aliquet. Donec lacinia placerat metus, ac vehicula elit
        interdum eu.
      </p>

      {isScrolled && (
        <ScrollToTop smooth top={50} style={{ backgroundColor: "green", borderRadius: "50%" }} />
      )}
    </div>
  );
};

export default Conditional;
