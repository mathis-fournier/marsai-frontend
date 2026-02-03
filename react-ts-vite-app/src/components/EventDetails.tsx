import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EventDetails() {
  const { id } = useParams();
  const [data, setData] = useState();

  console.log(id);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/events/` + id)
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur Status: ${res.status}`);
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
        className="p-3 m-3 border rounded border-slate-200"
        onClick={back}
      >
        Retour
      </button>
      {data ? (
        <div className="m-3 w-auto text-center p-6 border border-slate-200 rounded-lg bg-white shadow-sm">
          <h1 className="text-4xl text-bold underline">{data[0].title}</h1>
          <p>{data[0].description}</p>
          <p>{data[0].duration}h</p>
          <p>{data[0].location}</p>
          <p>{data[0].status}</p>
          <p>Start at: {data[0].start_at}</p>
        </div>
      ) : (
        "event indisponible"
      )}
    </>
  );
}
