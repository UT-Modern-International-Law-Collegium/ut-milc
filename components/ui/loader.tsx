"use client";

import { PropagateLoader, PuffLoader } from "react-spinners";

export const Loader = ({ type }: { type?: "propagete" }) => {
  switch (type) {
    case "propagete":
      return <PropagateLoader color={"#00ffb1"} speedMultiplier={3} />;
    default:
      return <PuffLoader color={"#00ffb1"} size={200} />;
  }
};
