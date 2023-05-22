import { useEffect, useState } from "react";
import { useGetContinentQuery } from "../graphql/generated/schema";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface ICountry {
  code: String;
  name: String;
  emoji: String;
}

const ContinentScreen = () => {
  const { code } = useParams();
  let navigate = useNavigate();

  const [countries, setCountries] = useState<ICountry[]>([]);

  const { data } = useGetContinentQuery({
    variables: {
      code: code || "",
    },
  });

  useEffect(() => {
    if (data?.continent) setCountries(data?.continent?.countries);
  }, [data]);
  return (
    <>
      <div className="container">
        <h1>Countries</h1>
        <div className="flex country">
          {countries.length > 0
            ? countries.map((c, i) => (
                <div onClick={() => navigate(`/country/${c.code}`)} key={i}>
                  <span>{c.emoji}</span>
                  <span>{c.name}</span>
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default ContinentScreen;
