// src/components/EventDetails.tsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { EventBookingData } from "./EventGrid";

interface Event {
  title: string;
  description: string;
  duration: number;
  location: string;
  status: string;
  start_at: string;
}

function EventDetails() {
  const { id } = useParams();
  const [data, setData] = useState<Event[]>([]);
  const { t } = useTranslation(['Festival', 'common']);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [bookData, setBookData] = useState<EventBookingData>({
    event_id: parseInt(id || '0'),
    firstname: '',
    lastname: '',
    email: '',
  });
  const [fn, setFirstname] = useState<string>('');
  const [ln, setLastname] = useState<string>('');
  const [mail, setEmail] = useState<string>('');

  async function handleBookEvent(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      setBookData(prev => ({
        ...prev,
        firstname: fn,
        lastname: ln,
        email: mail,
      }));

      const response = await fetch(`${import.meta.env.VITE_API_URL}/events/book`, {
        method: 'POST',
        body: JSON.stringify(bookData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert(t('agenda.event_details.booking_success'));
    } catch (error: any) {
      console.error('Error details:', error);
      alert(t('agenda.event_details.booking_error', { error: error.message }));
    } finally {
      setIsLoading(false);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    fetch(`${import.meta.env.VITE_API_URL}/events/` + id)
      .then((res) => {
        if (!res.ok)
          throw new Error(
            t("agenda.event_details.error_status", { status: res.status }),
          );
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err as Error);
      });
  }, [id]);

  function back() {
    navigate(`/agenda`);
  }

  return (
    <>
      <button
        className="p-3 m-3 border rounded bg-brand2 border-black text-white shadow-md hover:border-blue-400 hover:shadow-md hover:text-blue-400"
        onClick={back}
      >
        {t("agenda.event_details.back_button")}
      </button>
      {data.length > 0 ? (
        <>
          <div className="m-3 w-auto text-center text-white p-6 border border-black rounded-lg bg-brand2 shadow-sm">
            <h1 className="text-4xl text-bold underline">{data[0].title}</h1>
            <p>{data[0].description}</p>
            <p>{data[0].duration}h</p>
            <p>{data[0].location}</p>
            <p>{data[0].status}</p>
            <p>{t("agenda.event_details.start_at", { date: data[0].start_at })}</p>
          </div>
          <form onSubmit={handleBookEvent}>
            <div className="grid grid-cols-2 text-white w-150 m-auto gap-2 border-2 border-primary p-10 rounded-lg bg-brand2 shadow-sm">
              <span className="grid-cols-1 gap-5 justify-around">
                <label htmlFor="fn">{t('form.firstname', { ns: 'common' })}</label>
              </span>
              <input
                className="border border-white rounded-lg"
                name="fn"
                required
                type="text"
                onChange={(e) => setFirstname(e.target.value)}
              />
              <span className="grid-cols-1 gap-5 justify-around">
                <label htmlFor="ln">{t('form.lastname', { ns: 'common' })}</label>
              </span>
              <input
                className="border border-white rounded-lg"
                name="ln"
                required
                type="text"
                onChange={(e) => setLastname(e.target.value)}
              />
              <span className="cols-2 gap-5 justify-around">
                <label htmlFor="mail">{t('form.email', { ns: 'common' })}</label>
              </span>
              <input
                className="border border-white rounded-lg"
                name="mail"
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="col-span-2 bg-brand text-white p-2 rounded-lg hover:bg-secondary"
                type="submit"
                disabled={isLoading}
              >
                {t('actions.book_seat', { ns: 'common' })}
              </button>
            </div>
          </form>
        </>
      ) : (
        t("agenda.event_details.unavailable")
      )}
    </>
  );
}

export default EventDetails;