import { useEffect, useState } from 'react';
import type { MovieTag } from '../types-interfaces/Movie';

function Tags(props: { tags: MovieTag[] | null, selected: MovieTag | null, onTagSelect: (t: MovieTag | null) => void }) {
    const { tags, selected, onTagSelect } = props;

    const handleTagClick = (t: MovieTag) => {
        if (selected === t) onTagSelect(null);
        else {
            onTagSelect(t);
        }
    }
    if (!tags || tags.length === 0) return <>Chargement des tags en cours</>


    return (
        <div>
            {/* TAGS */}
            <div className="flex flex-wrap gap-4 text-white justify-center">
                {tags && tags.map((t) => (
                    <span
                        key={t ? t.id : null}
                        onClick={() => handleTagClick(t)}
                        className={(props.selected == t ? "border border-primary px-3 py-1 rounded-full text-sm" : "border border-secondary px-3 py-1 rounded-full text-sm")}
                    >
                        {t.name}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Tags;



