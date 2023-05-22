import { useEffect, useState } from "react";
import { useGetCountryQuery } from "../graphql/generated/schema";
import { useParams } from "react-router-dom";

interface ICountry {
  code: String;
  name: String;
  capital: string | null | undefined;
  emoji: String;
  currency: String | null;
}

const CountryScreen = () => {
  const { code } = useParams();
  const [country, setCountry] = useState<ICountry | null>(null);
  const { data } = useGetCountryQuery({
    variables: {
      code: code || "",
    },
  });

  useEffect(() => {
    if (data?.country) {
      setCountry({
        name: data.country.name,
        code: data.country.code,
        emoji: data.country.emoji,
        capital: data.country.capital,
        currency: data.country.currency || null,
      });
    }
  }, [data]);
  return (
    <div>
      {country ? (
        <div>
          <h1>{country.name}</h1>
          <div>{country.emoji}</div>
          <div>Currency: {country.currency}</div>
          <div>Capital: {country.capital}</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CountryScreen;
