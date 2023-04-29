import React from "react";
import Image from "next/image";

function Loading() {
  return (
    <div className={"flex justify-center"}>
      <Image
        className={"h-96"}
        width={"300"}
        height={"300"}
        src={"spinner.svg"}
        alt={"loading..."}
      />
    </div>
  );
}

export default Loading;
