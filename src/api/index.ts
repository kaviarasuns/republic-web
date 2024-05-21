export const getPoliticalParties = async () =>
  await fetch(`https://api.teamrepublic.in/v1/political-parties/all`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
