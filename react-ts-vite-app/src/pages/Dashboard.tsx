import { useEffect, useState } from "react";
import DashboardGlobal from "../components/Dashboard/DashboardGlobal";
import DashboardMovies from "../components/Dashboard/DashboardMovies";
import UserDashboard from "../components/Dashboard/UserDahboard";
import { useAuth } from "../context/AuthContext";
import AccessDenied from "../components/AccessDenied";
import { useTranslation } from "react-i18next";
import type { Movie } from "../types-interfaces/Movie";
import DashboardEvent from "../components/Dashboard/DashboardEvent";
import NewsletterDashboard from "../components/Dashboard/Newsletter/NewsletterDashboard";

export default function Dashboard() {
  const { t } = useTranslation('Dashboard');
  const [data, setData] = useState<Movie[] | undefined>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user, token } = useAuth();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/movies`)
      .then((res) => {
        if (!res.ok)
          throw new Error(t("error_status", { status: res.status }));
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (!user || !token || user.role !== "ADMIN") {
    return <AccessDenied />;
  }

  return (
    <>
      <DashboardGlobal />
      <DashboardEvent />
      <DashboardMovies movies={data} isLoading={isLoading} />
      <UserDashboard />
      <NewsletterDashboard />
    </>
  );
}
