import { useEffect, useRef } from "react";
import Typed from "typed.js";
const TypingAnimation = ({ typingData, extraClassName }) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: typingData
        ? typingData
        : [
            "I make <strong>awesome Websites</strong>",
            "I develop <strong>Mobile apps</strong>",
            "I optimise  <strong> Websites</strong>",
            "And I love <strong>Travelling <3</strong>",
          
          ], // Strings to display
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <span
      className={`${extraClassName} typing-subtitle`}
      id="subtitle"
      ref={el}
    ></span>
  );
};
export default TypingAnimation;
