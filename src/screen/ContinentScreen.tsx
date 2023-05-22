import { useEffect } from "react";
import { useGetContinentQuery } from "../graphql/generated/schema";

const ContinentScreen = () => {
  const { data } = useGetContinentQuery({
    variables: {
      code: "AF",
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);
  return <div>ContinentScreen</div>;
};

export default ContinentScreen;
