import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Event {
  title: string;
  description: string;
  duration: number;
  location: string;
  status: string; // This is likely what's missing!
  start_at: string;
}

export default function EventDetails() {
  const { id } = useParams();
  const [data, setData] = useState<Event[]>([]);
  const { t } = useTranslation();

  console.log(id);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/events/` + id)
      .then((res) => {
        if (!res.ok)
          throw new Error(
            t("event_details.error_status", { status: res.status }),
          );
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function back() {
    navigate(`/agenda`);
  }
  return (
    <>
      <button
        className="p-3 m-3 border rounded bg-[var(--color-brand2)] border-black text-white shadow-md hover:border-blue-400 hover:shadow-md hover:text-blue-400"
        onClick={back}
      >
        {t("event_details.back_button")}
      </button>
      {data.length > 0 ? (
        <div className="m-3 w-auto text-center text-white p-6 border border-black rounded-lg bg-[var(--color-brand2)] shadow-sm">
          <h1 className="text-4xl text-bold underline">{data[0].title}</h1>
          <p>{data[0].description}</p>
          <p>{data[0].duration}h</p>
          <p>{data[0].location}</p>
          <p>{data[0].status}</p>
          <p>{t("event_details.start_at", { date: data[0].start_at })}</p>
        </div>
      ) : (
        t("event_details.unavailable")
      )}
    </>
  );
}
