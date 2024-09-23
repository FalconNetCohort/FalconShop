import {CadetItem} from "@/services/constants";
import React from "react";
import {Box, Button, Modal, Typography} from "@mui/material";
import Image from "next/image";

interface ListingModalProps {
    item: CadetItem | null;
    onClose: () => void;
}

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85%',
    maxWidth: '500px',
    maxHeight: '80vh', // Ensure modal height doesn't exceed viewport
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    overflowY: 'auto', // Allow scrolling when content overflows
    p: 4,
};

export const ListingModal: React.FC<ListingModalProps> = ({ item, onClose }) => {
    return (
        <Modal open={!!item} onClose={onClose}>
            <Box sx={modalStyle} className="p-2 sm:p-4 relative">
                {/* X Button - Moved higher and farther away */}
                <Button
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: '-5px',    // Move the button further up
                        right: '-20px',  // Move the button further to the right
                        zIndex: 10
                    }}
                >
                    X
                </Button>
                {item && (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {/* Flex container for image and details */}
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                width={150}
                                height={150}
                                loader={({ src }) => src}
                                className="object-cover rounded"
                            />
                            {/* Right side content */}
                            <Box>
                                <Typography variant="h6" component="h2" className="text-sm md:text-lg">
                                    {item.title}
                                </Typography>
                                <Typography sx={{ mt: 2 }} className="text-sm md:text-lg">
                                    {item.price === '0' ? 'Free' : `$${item.price}`}
                                </Typography>
                                <Typography sx={{ mt: 2 }} className="text-sm md:text-lg">
                                    Cadet: {item.cadetName}
                                </Typography>
                                <Typography sx={{ mt: 2 }} className="text-sm md:text-lg">
                                    Contact: {item.cadetContact}
                                </Typography>
                                <Typography sx={{ mt: 2 }} className="text-sm md:text-lg">
                                    Date: {new Date(item.timeCreated).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric',
                                    timeZone: 'UTC'  // Ensures UTC is used
                                })}
                                </Typography>
                            </Box>
                        </Box>

                        {/* Description below the image-content flex container */}
                        <Box sx={{ mt: 3 }}>
                            <Typography sx={{ mt: 2 }} className="text-xs md:text-lg">
                                {item.description}
                            </Typography>
                        </Box>
                    </Box>
                )}
            </Box>
        </Modal>
    );
};