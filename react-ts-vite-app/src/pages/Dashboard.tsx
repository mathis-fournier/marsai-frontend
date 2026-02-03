import { useEffect, useState } from "react";
import DashboardGlobal from "../components/Dashboard/DashboardGlobal";
import DashboardMovies from "../components/Dashboard/DashboardMovies";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/movies/all`)
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <DashboardGlobal />
      <DashboardMovies movies={data} isLoading={isLoading} />
    </>
  );
}
