import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function DashboardEventCard({ gridLayout, event }: any) {
  const { t } = useTranslation();
  const { token } = useAuth();
  const navigate = useNavigate();

  const deleteUser = async () => {
    console.log(event.id);
    if (!token) return;
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/event/${event.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.ok) {
        console.log("ok");
      } else {
        console.error("Failed to delete event");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <div
      className={`${gridLayout} p-4 md:p-6 border-b border-border hover:bg-brand`}
    >
      <div
        className="font-semibold text-white cursor-pointer"
        onClick={() => navigate(`/event/${event.id}`)}
      >
        {event.title}
      </div>
      <button
        className="cursor-pointer p-2 rounded text-brand bg-red-500 border border-border"
        onClick={deleteUser}
      >
        Delete
      </button>
    </div>
  );
}
