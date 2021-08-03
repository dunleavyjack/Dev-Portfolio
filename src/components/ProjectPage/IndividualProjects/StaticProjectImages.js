import React from 'react';
import StaticProjectImage from './StaticProjectImage';

const StaticProjectImages = ({ images }) => {
    const imageList = images.map((img) => {
        return <StaticProjectImage image={img} />;
    });

    return <div className="static-project-images">{imageList}</div>;
};

export default StaticProjectImages;
