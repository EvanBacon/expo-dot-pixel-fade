"use dom";

import * as AC from "@bacons/apple-colors";

const bg = AC.systemBackground;

export default function DotHeader({
  flip,
  style,
}: {
  flip?: boolean;
  style: any;
  dom?: import("expo/dom").DOMProps;
}) {
  return (
    <div
      style={{
        flex: 1,
        backgroundImage: `radial-gradient(transparent 1.5px, ${bg} 1.5px)`,
        backgroundSize: "5px 5px",

        backdropFilter: "blur(100px)",
        mask: flip
          ? `linear-gradient(rgba(255, 255, 255, 0) 0%, ${bg} 100%)`
          : `linear-gradient(${bg} 60%, rgba(255, 255, 255, 0) 100%)`,
        opacity: 1,
        ...style,
      }}
    />
  );
}
