import { useEffect, useState } from "react";
import DashboardGlobal from "../components/Dashboard/DashboardGlobal";
import DashboardMovies from "../components/Dashboard/DashboardMovies";
import UserDashboard from "../components/Dashboard/UserDahboard";
import { useAuth } from "../context/AuthContext";
import AccessDenied from "../components/AccessDenied";
import { useTranslation } from "react-i18next";
import SubscribersDashboard from "../components/Dashboard/SubscribersDashboard";

export default function Dashboard() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user, token } = useAuth();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/movies`)
      .then((res) => {
        if (!res.ok)
          throw new Error(t("dashboard.error_status", { status: res.status }));
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!user || !token || user.role !== "ADMIN") {
    return <AccessDenied />;
  }

  return (
    <>
      <SubscribersDashboard />
      <DashboardGlobal />
      <DashboardMovies movies={data} isLoading={isLoading} />
      <UserDashboard />
    </>
  );
}
