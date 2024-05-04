import React from "react";

export default function AceessDetails({ params }) {
  console.log(params);
  return <div>Welcome! {params.accessId}</div>;
}
