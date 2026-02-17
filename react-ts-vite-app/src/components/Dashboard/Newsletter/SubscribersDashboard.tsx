import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

function SubscribersDashboard() {

    const { t } = useTranslation("Dashboard");
    const [subscribers, setSubscribers] = useState<[] | null>(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getsubscribers() {
            setIsLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/subscribers`);
                const data = await response.json();
                setSubscribers(data);
                setIsLoading(false);
            }
            catch (err) {
                if (err) setError(error);
                return null;
            };
        }
        getsubscribers();
    }, []);

    if (error) {
        return (
            <>
                <div>{t('error')}</div>
            </>
        )
    }
    return (
        <>
            <div className="w-auto p-6 bg-brand2 rounded-2xl my-8">
                <h2 className="text-3xl text-white">
                    {t("subscribers.number", { count: subscribers?.length })}
                    {/* {t("subscribers.description")} */}
                </h2>
            </div>
        </>
    );
}

export default SubscribersDashboard