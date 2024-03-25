import React, { Component, useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import "../../screens/home/index.css";
export default function Loader() {
  return (
    <div className="loader">
      <Oval
        type="Puff"
        color="#f4443c"
        height={100}
        width={100}
        secondaryColor="purple"
      />
    </div>
  );
}
