import { useEffect, useState } from "react";
import { useGetContinentsQuery } from "../graphql/generated/schema";

const ContinentsScreen = () => {
  const { data } = useGetContinentsQuery();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div>ContinentScreen</div>;
};

export default ContinentsScreen;
