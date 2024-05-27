"use client";

import { getPoliticalParties } from "@/api";
import { useQuery } from "react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import posthog from "posthog-js";

export default function Home() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["getPoliticalParties"],
    queryFn: getPoliticalParties,
  });

  if (!isLoading) {
    console.log("This is Spring Data", data);
  }

  const politicalParties = [
    {
      name: "DMK",
      symbol:
        "https://upload.wikimedia.org/wikipedia/en/5/5e/Dravida_Munnetra_Kazhagam_logo.png",
      type: "State Party",
      founder: "C. N. Annadurai",
    },
    {
      name: "AIDMK",
      symbol:
        "https://upload.wikimedia.org/wikipedia/en/a/a4/Official_logo_of_the_All_India_Anna_Dravida_Munnetra_Kazhagam.png",
      type: "State Party",
      founder: "M. G. Ramachandran",
    },
    {
      name: "CPI",
      symbol:
        "https://upload.wikimedia.org/wikipedia/en/d/d3/Communist_Party_of_India_logo.png",
      type: "State Party",
      founder: "M. N. Roy",
    },
    {
      name: "DMDK",
      symbol:
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/Flag_DMDK.png",
      type: "State Party",
      founder: "Vijayakant",
    },
    {
      name: "AAP",
      symbol:
        "https://upload.wikimedia.org/wikipedia/commons/0/02/AAP_Symbol.png",
      type: "National Party",
      founder: "Arvind Kejriwal",
    },
    {
      name: "Bahujan Samaj Party",
      symbol:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Indian_Election_Symbol_Elephant.png",
      type: "National Party",
      founder: "Kanshi Ram",
    },
    {
      name: "Bharatiya Janata Party",
      symbol:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1024px-Bharatiya_Janata_Party_logo.svg.png?20180718134627",
      type: "National Party",
      founder: "Atal Bihari Vajpayee",
    },
    {
      name: "Communist Party of India (Marxist)",
      symbol:
        "https://upload.wikimedia.org/wikipedia/commons/a/af/Cpm_election_symbol.svg",
      type: "National Party",
      founder: "E. M. S. Namboodiripad",
    },
    {
      name: "Indian National Congress",
      symbol:
        "https://upload.wikimedia.org/wikipedia/commons/6/6c/Indian_National_Congress_hand_logo.svg",
      type: "National Party",
      founder: "Allan Octavian Hume",
    },
    {
      name: "National People's Party",
      symbol:
        "https://upload.wikimedia.org/wikipedia/commons/5/58/National_People%27s_Party_%28India%29_logo_2023.png",
      type: "National Party",
      founder: "P. A. Sangma",
    },
    {
      name: "Indian Union Muslim League",
      symbol:
        "https://upload.wikimedia.org/wikipedia/en/d/da/Indian_Union_Muslim_Leage_logo.jpg",
      type: "Unrecognized Party",
      founder: "K. M. Kader Mohideen",
    },
    {
      name: "Marumalarchi Dravida Munnetra Kazhagam",
      symbol: "https://upload.wikimedia.org/wikipedia/commons/8/8c/MDMK.svg",
      type: "Unrecognized Party",
      founder: "Vaiko",
    },

    {
      name: "Pattali Makkal Katchi",
      symbol:
        "https://upload.wikimedia.org/wikipedia/commons/6/67/Pmk_flag.jpg",
      type: "Unrecognized Party",
      founder: "Anbumani Ramadoss",
    },
    {
      name: "Tamil Maanila Congress (Moopanar)",
      symbol:
        "https://upload.wikimedia.org/wikipedia/en/c/c8/Political_Party_Flag_Tamil_Maanila_Congress_%28M%29_Tamilnadu_India.jpg",
      type: "Unrecognized Party",
      founder: "G. K. Vasan",
    },
    {
      name: "Viduthalai Chiruthaigal Katchi",
      symbol:
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/Pot_Symbol.png",
      type: "Unrecognized",
      founder: "Thol. Thirumavalavan",
    },
  ];

  return (
    <div className="flex flex-wrap justify-start p-8 gap-10">
      {politicalParties.map((party, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-wrap max-w-3">{party.name}</CardTitle>
            <CardDescription>{party.type}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image alt="" src={party.symbol} height={200} width={200} />
          </CardContent>
          <CardFooter className="flex flex-col">
            <p className="font-bold">Founder</p>
            <p>{party.founder}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
