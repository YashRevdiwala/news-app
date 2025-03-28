"use client"

import { useEffect, useState } from "react";
import ReactTimeago from "react-timeago"

export const TimeAgo = ({ date }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  },[]);

  if (!isClient) return null;
  
  return <ReactTimeago date={date} />
}
