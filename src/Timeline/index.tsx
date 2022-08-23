import React from "react";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";
import './index.css'
import { Divider } from '@arco-design/web-react';

export default function() {
  return (
    <div className="demo">
      <Demo1 />
      <Divider />
      {/* <Demo2 />
      <Divider />
      <Demo3 /> */}
    </div>
  )
}
