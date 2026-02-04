import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();


    const promoteToJury = async (userId: number) => {
        if (!token) return;

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/promote/jury/${userId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                setUsers(prevUsers => prevUsers.map(user => user.id === userId ? { ...user, role: "JURY" } : user));
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
            const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/promote/admin/${userId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                setUsers(prevUsers => prevUsers.map(user => user.id === userId ? { ...user, role: "ADMIN" } : user));
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
            const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
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
                const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/users`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
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
        <div className='xl:p-25'>

            <div className='bg-brand2 md:max-w-[75%] mx-auto lg:px-6 lg:pt-10 md:rounded-4xl shadow-lg/50 shadow-black mb-10'>
                <h1 className='text-4xl text-center xl:mt-10 text-white'>{t('user_dashboard.title')}</h1>
                <div className="overflow-x-auto">
                    <table className='min-w-full text-white mt-10 mb-10 text-center'>
                        <thead className="bg-gray-700">
                            <tr>
                                <th className="py-3 lg:px-4">{t('user_dashboard.table.name')}</th>
                                <th className="py-3 lg:px-4">{t('user_dashboard.table.firstname')}</th>
                                <th className="py-3 lg:px-4">{t('user_dashboard.table.email')}</th>
                                <th className="py-3 lg:px-4">{t('user_dashboard.table.role')}</th>
                                <th className="py-3 lg:px-4">{t('user_dashboard.table.action')}</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800">
                            {users.map(user => (
                                <tr key={user.id} className="border-b border-gray-700">
                                    <td className="py-3 px-4">{user.lastname}</td>
                                    <td className="py-3 px-4">{user.firstname}</td>
                                    <td className="py-3 px-4">{user.email}</td>
                                    <td className="py-3 px-4">{user.role ? user.role : t('user_dashboard.table.no_role')}</td>
                                    <td className="py-3 px-4">
                                        <button className="bg-yellow-200 hover:bg-yellow-700 text-black w-34 font-bold py-1 px-2 rounded" onClick={() => promoteToJury(user.id)}>{t('user_dashboard.button.promote_jury')}</button>
                                        <button className="bg-yellow-500 hover:bg-yellow-700 text-black w-34 font-bold py-1 px-2 rounded ml-2" onClick={() => promoteToAdmin(user.id)}>{t('user_dashboard.button.promote_admin')}</button>
                                        <button className="bg-red-500 hover:bg-red-700 text-black w-34 font-bold py-1 px-2 rounded ml-2" onClick={() => deleteUser(user.id)}>{t('user_dashboard.button.delete')}</button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;