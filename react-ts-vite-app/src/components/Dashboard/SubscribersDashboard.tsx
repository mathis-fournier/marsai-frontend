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
            <div className="w-auto p-6 bg-[var(--color-bg2)]">
                <h2 className="text-[var(--color-secondary)] text-2xl font-mono">
                    🔳 {t("subscribers.title")}
                </h2>
                <h1 className="text-4xl text-[var(--color-white)] font-bold">
                    {t("subscribers.number", { count: subscribers?.length })}
                    {/* {t("subscribers.description")} */}
                </h1>
            </div>
        </>
    );
}

export default SubscribersDashboard