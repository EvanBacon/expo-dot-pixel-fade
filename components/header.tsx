"use dom";

import * as AC from "@bacons/apple-colors";

const bg = AC.systemBackground;

export default function DotHeader({
  flip,
}: {
  flip?: boolean;
  dom?: import("expo/dom").DOMProps;
}) {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          flex: 1,
          backgroundColor: "transparent",
          backgroundImage: `radial-gradient(transparent 1px, ${bg} 1px)`,
          backgroundSize: "3px 3px",
          backdropFilter: "blur(3px)",
          mask: flip
            ? `linear-gradient(rgba(255, 255, 255, 0) 0%, ${bg} 100%)`
            : `linear-gradient(${bg} 60%, rgba(255, 255, 255, 0) 100%)`,
          opacity: 1,
        }}
      />
    </div>
  );
}
