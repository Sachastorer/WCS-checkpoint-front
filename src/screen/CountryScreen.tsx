import { useEffect } from "react";
import { useGetCountryQuery } from "../graphql/generated/schema";

const CountryScreen = () => {
  const { data } = useGetCountryQuery({
    variables: {
      code: "AO",
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);
  return <div>CountryScreen</div>;
};

export default CountryScreen;
