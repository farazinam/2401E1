import ChildA from "../LIfting State Up/ChildA";
import ChildB from "../LIfting State Up/ChildB";

import React, { useState } from 'react'

function LiftingStateUp() {
    const [name, setName] = useState();
  return (
    <>
    <ChildA setName={setName} />
    <ChildB name={name} />
    </>
  )
}

export default LiftingStateUp