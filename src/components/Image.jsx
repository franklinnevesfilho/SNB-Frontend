import React, {useEffect, useState} from "react";

const Image = ({ binaryData , styling}) => {
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        // Function to convert binary data to Data URL
        const binaryToDataURL = (arrayBuffer) => {
            const blob = new Blob([arrayBuffer], { type: "image/png" }); // Change the type based on your image format
            return URL.createObjectURL(blob);
        };

        // Convert binary data to Data URL
        const dataURL = binaryToDataURL(binaryData);

        // Set the Data URL to the state
        setImageSrc(dataURL);
    }, [binaryData]);

    return <img className={styling} src={imageSrc} alt="Binary Image" />;
};

export default Image;
