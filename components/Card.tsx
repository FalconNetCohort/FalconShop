import { useState } from 'react';
import Image from 'next/image';
import {CadetItem} from "@/components/Listings";

interface CardProps {
    item: CadetItem;
    currentUserId: string | null;
}

const Card: React.FC<CardProps> = ({ item, currentUserId }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`card ${expanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
            {currentUserId === item.createdBy && (
                <p className="block mt-2 font-bold text-red-700 mb-0">Your Listing</p>
            )}
            <h2 className="card-title-font mb-3 text-xl w-full overflow-wrap-anywhere break-words">{item.title}</h2>
            <span className="block mt-2 font-bold text-blue-700 overflow-wrap-anywhere break-words">${item.price}</span>
            <p className="card-body-font mt-3 text-gray-600 overflow-wrap-anywhere break-words">Cadet: {item.cadetName}</p>
            <p className="card-body-font mt-1 text-gray-600 overflow-wrap-anywhere break-words">Contact: {item.cadetContact}</p>
            <p className="card-desc-font opacity-70 mb-3 overflow-wrap-anywhere break-words">{item.description}</p>
            {expanded && (
                <div className="expanded-content">
                    <Image
                        src={item.imageUrl}
                        alt=""
                        width={300} // Adjust the size as needed
                        height={300} // Adjust the size as needed
                        loader={({src}) => src}
                    />
                </div>
            )}
        </div>
    );
};

export default Card;
