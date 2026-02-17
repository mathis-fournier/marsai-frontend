import NewsletterSend from './NewsletterSend'
import SubscribersDashboard from './SubscribersDashboard'
import NewsletterCreate from './NewsletterCreate'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function NewsletterDashboard() {

    const { t } = useTranslation('Dashboard');
    const [panel, setPanel] = useState<boolean>(false);

    return (
        <div>
            <div
                onClick={() => setPanel(!panel)}
                className="cursor-pointer w-auto p-6"
            >
                <h2 className="text-secondary text-2xl font-mono uppercase">
                    🔳 {t("newsletters.title")}
                </h2>
                <h1 className="text-4xl text-white font-bold">
                    {t("newsletters.subtitle")}
                </h1>
                <p className="italic text-white opacity-80">
                    Create & Send newsletters
                </p>
            </div>


            <div
                className={`px-10 transition-all duration-150 ease-linear overflow-hidden ${panel ? "opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="bg-brand2 p-4 my-8 rounded-2xl  border-2 shadow-lg shadow-white border-white">
                    <NewsletterCreate />
                </div>
                <SubscribersDashboard />
                <div className="bg-brand2 p-4 rounded-2xl border-2 shadow-lg shadow-white border-white">
                    <div className='flex flex-col md:flex-rows justify-between '>
                        <h2 className="text-3xl my-4 text-white">Send a specific Newsletter to all actual subscribers</h2>
                        {/* <p className="italic text-white opacity-80">Please select an existing newsletter to send it to the contacts</p> */}
                        <NewsletterSend />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsletterDashboard
