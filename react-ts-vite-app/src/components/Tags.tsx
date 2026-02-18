import { useEffect, useState } from 'react';
import type { MovieTag } from '../types-interfaces/Movie';

function Tags() {
    const [tags, setTags] = useState<MovieTag[]>([]);

    useEffect(() => {
        async function getAllTags() {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + `/tags`);
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const data = await response.json();
                setTags(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }

        getAllTags();
    }, []);

    return (
        <div>
            {/* TAGS */}
            <div className="flex flex-wrap gap-4 text-white justify-center">
                {tags.map((tag) => (
                    <span
                        key={tag ? tag.id : null}
                        className="bg-gray-800 border border-third px-3 py-1 rounded-full text-sm"
                    >
                        {tag.name}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Tags;



