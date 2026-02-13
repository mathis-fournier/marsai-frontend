import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
}

function UserDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const { token } = useAuth();
  const { t } = useTranslation("Dashboard");
  const [panel, setPanel] = useState<boolean>(false);

  const promoteToJury = async (userId: number) => {
    if (!token) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/promote/jury/${userId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.ok) {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === userId ? { ...user, role: "JURY" } : user,
          ),
        );
      } else {
        console.error("Failed to promote user to jury");
      }
    } catch (error) {
      console.error("Error promoting user to jury:", error);
    }
  };

  const promoteToAdmin = async (userId: number) => {
    if (!token) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/promote/admin/${userId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.ok) {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === userId ? { ...user, role: "ADMIN" } : user,
          ),
        );
      } else {
        console.error("Failed to promote user to admin");
      }
    } catch (error) {
      console.error("Error promoting user to admin:", error);
    }
  };

  const deleteUser = async (userId: number) => {
    if (!token) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/users/${userId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.ok) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      if (!token) return;

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/admin/users`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error("Failed to fetch users");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [token]);

  return (
    <>
      {" "}
      <div className="w-auto p-6"
        onClick={() => setPanel(!panel)}
      >
        <h2 className="text-secondary text-2xl font-mono uppercase">
          🔳 {t("user.title")}
        </h2>
        <h1 className="text-4xl text-white font-bold">
          {t("user.subtitle")}
        </h1>
        <p className="italic text-white opacity-80">
          {t("user.description")}
        </p>
      </div>
      <div className={`transition-all duration-1350 ease-linear overflow-hidden ${panel ? 'opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-brand2 rounded-md shadow-lg/50 shadow-black">
          <div className="">
            <table className="min-w-full text-white mb-10 text-center mobile-vertical-table">
              <thead className="bg-gray-700">
                <tr>
                  <th className="py-3 lg:px-4">
                    {t("user.table.name")}
                  </th>
                  <th className="py-3 lg:px-4">
                    {t("user.table.firstname")}
                  </th>
                  <th className="py-3 lg:px-4">
                    {t("user.table.email")}
                  </th>
                  <th className="py-3 lg:px-4">
                    {t("user.table.role")}
                  </th>
                  <th className="py-3 lg:px-4">
                    {t("user.table.action")}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800">
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-700">
                    <td
                      className="py-3 px-4"
                      data-label={t("user.table.name")}
                    >
                      {user.lastname}
                    </td>
                    <td
                      className="py-3 px-4"
                      data-label={t("user.table.firstname")}
                    >
                      {user.firstname}
                    </td>
                    <td
                      className="py-3 px-4"
                      data-label={t("user.table.email")}
                    >
                      {user.email}
                    </td>
                    <td
                      className="py-3 px-4"
                      data-label={t("user.table.role")}
                    >
                      {user.role
                        ? user.role
                        : t("user.table.no_role")}
                    </td>
                    <td className="py-3 px-4 action-cell">
                      <button
                        className="bg-white hover:bg-slate-200 text-black font-bold py-1 px-2 rounded"
                        onClick={() => promoteToJury(user.id)}
                      >
                        {t("user.button.promote_jury")}
                      </button>
                      <button
                        className="bg-secondary hover:bg-indigo-400 text-black font-bold py-1 px-2 rounded ml-2"
                        onClick={() => promoteToAdmin(user.id)}
                      >
                        {t("user.button.promote_admin")}
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-black font-bold py-1 px-2 rounded ml-2"
                        onClick={() => deleteUser(user.id)}
                      >
                        {t("user.button.delete")}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
