import { useEffect, useState } from "react";

const useTshirts = () => {
  const [tShirts, settShirts] = useState([]);

  useEffect(() => {
    fetch("tshirts.json")
      .then((res) => res.json())
      .then((data) => settShirts(data));
  }, []);
  return [tShirts, settShirts];
};

export default useTshirts;
