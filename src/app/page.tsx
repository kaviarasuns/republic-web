"use client";

import { getPoliticalParties } from "@/api";
import { useQuery } from "react-query";

export default function Home() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["getPoliticalParties"],
    queryFn: getPoliticalParties,
  });

  if (!isLoading) {
    console.log(data);
  }

  return <div>Home</div>;
}
