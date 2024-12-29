"use dom";

import * as AC from "@bacons/apple-colors";

const bg = AC.secondarySystemBackground;

export default function DotHeader(_: { dom?: import("expo/dom").DOMProps }) {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        top: 0,
        left: 0,
        right: 0,
        height: 72,
      }}
    >
      <div
        style={{
          flex: 1,
          backgroundColor: "transparent",
          backgroundImage: `radial-gradient(transparent 1px, ${bg} 1px)`,
          backgroundSize: "3px 3px",
          backdropFilter: "blur(3px)",
          mask: `linear-gradient(${bg} 60%, rgba(255, 255, 255, 0) 100%)`,
          opacity: 1,
        }}
      />
    </div>
  );
}
