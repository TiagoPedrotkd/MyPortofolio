/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { PropsWithChildren } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Link = ({
  to,
  children,
  colorEnd,
}: { to: string; colorEnd: string } & PropsWithChildren) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClicked = () => {
    const bubbles = document.getElementById("bubbles");

    bubbles?.classList.add("show");

    const bubbleSecond: HTMLDivElement =
      bubbles?.querySelector("div:nth-child(2)")!;

    bubbleSecond.style.background = colorEnd;

    setTimeout(() => navigate(to), 1000);

    setTimeout(() => {
      bubbles?.classList.remove("show");
      bubbles?.classList.add("hide");
    }, 1200);

    setTimeout(() => bubbles?.classList.remove("hide"), 2400);
  };

  return (
    <a
      className={
        location.pathname.includes(children?.toString().toLowerCase()!)
          ? "active"
          : ""
      }
      onClick={handleClicked}
    >
      {children}
    </a>
  );
};

export default Link