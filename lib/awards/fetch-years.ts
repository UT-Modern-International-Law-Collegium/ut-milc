import { nextPrefix } from "@/lib/url-prefix";

type _Data = {
  data: {
    year: number;
    id: number;
  }[];
};

export const fetchYears = async () => {
  const res = await fetch(`${nextPrefix()}/awards/years`);
  const data: _Data = await res.json();

  return data.data;
};
