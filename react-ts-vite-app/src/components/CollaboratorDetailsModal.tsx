import { useTranslation } from "react-i18next";
import type { MovieCollaborator } from "../types-interfaces/Movie";

interface CollaboratorDetailsModalProps {
    collaborator: MovieCollaborator;
    onClose: () => void;
}

function CollaboratorDetailsModal({ collaborator, onClose }: CollaboratorDetailsModalProps) {
    const { t } = useTranslation();

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="relative mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{collaborator.firstname} {collaborator.lastname}</h3>
                    <div className="mt-2 px-7 py-3">
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <div className="text-left"><span className="font-semibold">{t('movie_details.collaborator_Gender')}:</span> {collaborator.gender}</div>
                            <div className="text-left"><span className="font-semibold">{t('movie_details.collaborator_Email')}:</span> {collaborator.email}</div>
                            <div className="text-left"><span className="font-semibold">{t('movie_details.collaborator_Job')}:</span> {collaborator.job}</div>
                            <div className="text-left"><span className="font-semibold">{t('movie_details.collaborator_Contribution')}:</span> {collaborator.contribution}</div>
                            <div className="text-left"><span className="font-semibold">{t('movie_details.collaborator_Birthdate')}:</span> {collaborator.birthdate}</div>
                            <div className="text-left"><span className="font-semibold">{t('movie_details.collaborator_Country')}:</span> {collaborator.country}</div>
                            <div className="text-left"><span className="font-semibold">{t('movie_details.collaborator_Region')}:</span> {collaborator.region}</div>
                            <div className="text-left"><span className="font-semibold">{t('movie_details.collaborator_City')}:</span> {collaborator.city}</div>
                            <div className="text-left"><span className="font-semibold">{t('movie_details.collaborator_Address')}:</span> {collaborator.address}</div>
                            <div className="text-left"><span className="font-semibold">{t('movie_details.collaborator_Zipcode')}:</span> {collaborator.zipcode}</div>
                            <div className="text-left"><span className="font-semibold">{t('movie_details.collaborator_Phone')}:</span> {collaborator.phone}</div>
                            <div className="text-left"><span className="font-semibold">{t('movie_details.collaborator_Facebook')}:</span> <a href={collaborator.facebook_url} target="_blank" rel="noopener noreferrer">{collaborator.facebook_url}</a></div>
                            <div className="text-left"><span className="font-semibold">{t('movie_details.collaborator_Instagram')}:</span> <a href={collaborator.instagram_url} target="_blank" rel="noopener noreferrer">{collaborator.instagram_url}</a></div>
                            <div className="text-left"><span className="font-semibold">{t('movie_details.collaborator_LinkedIn')}:</span> <a href={collaborator.linkedin_url} target="_blank" rel="noopener noreferrer">{collaborator.linkedin_url}</a></div>
                            <div className="text-left"><span className="font-semibold">{t('movie_details.collaborator_X')}:</span> <a href={collaborator.twitter_url} target="_blank" rel="noopener noreferrer">{collaborator.twitter_url}</a></div>
                        </div>
                    </div>
                    <div className="items-center px-4 py-3">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            {t('close')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollaboratorDetailsModal;
