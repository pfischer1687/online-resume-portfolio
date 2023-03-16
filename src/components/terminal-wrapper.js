import * as React from "react";
import { useInView } from "react-intersection-observer";

const TerminalWrapper = ({
  sectionName,
  cdNumLetters,
  catNumLetters,
  lineBreak = true,
  children,
}) => {
  const [isCdVisible, setIsCdVisible] = React.useState(false);
  const [isCatVisible, setIsCatVisible] = React.useState(false);
  const [isContentVisible, setIsContentVisible] = React.useState(false);

  const [ref] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    onChange: (isSectionVisible) => {
      let cdTimeout = 1000;
      if (sectionName === "about") cdTimeout = 4000;
      setTimeout(() => setIsCdVisible(isSectionVisible), cdTimeout);
      setTimeout(() => setIsCatVisible(isSectionVisible), cdTimeout + 3000);
      setTimeout(() => setIsContentVisible(isSectionVisible), cdTimeout + 6000);
    },
  });

  return (
    <>
      <div ref={ref} className="content-wrap terminal-code">
        <h3 className={isCdVisible ? "show" : "hidden"}>
          <span className={"terminal-usr"}>guest@guest</span>:
          <span className={"terminal-path"}>~</span>${" "}
          <span
            style={{ "--num-letters": cdNumLetters }}
            className={isCdVisible ? "typing" : ""}
          >
            cd ~/{sectionName}
          </span>
        </h3>
        <h3 className={isCatVisible ? "show" : "hidden"}>
          <span className="terminal-usr">guest@guest</span>:
          <span className="terminal-path">~/{sectionName}</span>${" "}
          {lineBreak && <span className="typing-cat-line-break" />}
          <span
            style={{ "--num-letters": catNumLetters }}
            className={isCatVisible ? "typing" : ""}
          >
            cat {sectionName}.txt
          </span>
        </h3>
      </div>
      <div
        className={`text-file content-wrap ${
          isContentVisible ? "show" : "hidden"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default TerminalWrapper;
