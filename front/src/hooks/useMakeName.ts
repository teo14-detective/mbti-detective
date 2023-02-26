import React, { ChangeEvent, useState } from "react";

export default function useMakeName() {
  const [name, setName] = useState("");

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return { name, changeName };
}
