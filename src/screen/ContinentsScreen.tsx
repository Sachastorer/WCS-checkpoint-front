import { useEffect, useState } from "react";
import { useGetContinentsQuery } from "../graphql/generated/schema";
import { useNavigate } from "react-router-dom";

interface IContinent {
  code: String;
  name: String;
}

const ContinentsScreen = () => {
  const [continents, setContinents] = useState<IContinent[]>([]);
  const { data } = useGetContinentsQuery();
  let navigate = useNavigate();

  useEffect(() => {
    if (data?.continents) setContinents(data.continents);
  }, [data]);

  return (
    <>
      <div className="container">
        <h1>Continents</h1>
        <div className="flex">
          {continents.length > 0
            ? continents.map((c, i) => (
                <div onClick={() => navigate(`/continent/${c.code}`)} key={i}>
                  {c.name}
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default ContinentsScreen;
