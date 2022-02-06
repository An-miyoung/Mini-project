import { useEffect, useState } from "react";
import { getUser } from "../utils/apis";

export default function useGetUser(id) {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(id)
      .then((user) => setUser(user))
      .catch((error) => {
        // console.log(error);
      });
  }, [id]);
  // console.log("hooks: ", user);
  return user;
}
