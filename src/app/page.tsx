"use client";

import { useQuery } from "react-query";

export default function Home() {
  const { isLoading, data, error } = useQuery("political-parties", () =>
    fetch(`http://api.teamrepublic.in/v1/political-parties/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
  );

  if (!isLoading) {
    console.log(data);
  }

  return <div>Home</div>;
}
