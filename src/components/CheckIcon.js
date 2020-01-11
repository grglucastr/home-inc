import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function CheckIcon({ rest, visible }) {
  if (visible) {
    return (
      <FontAwesomeIcon
        size="xs"
        style={{ color: "#fff", marginRight: "10px" }}
        icon={faCheck}
        {...rest}
      />
    );
  }
  return <></>;
}
