import React from 'react';
import ProjectPageLinks from './IndividualProjects/ProjectPageLinks';

const ProductPageHeader = () => {
    const rowOne = [
        {
            label: 'REACT',
            ref: '#react',
        },
        {
            label: 'CHROME EXTENSIONS',
            ref: '#chrome',
        },
        {
            label: 'AR',
            ref: '#ar',
        },
    ];

    const rowTwo = [
        {
            label: 'iOS',
            ref: '#ios',
        },
        {
            label: 'PYTHON',
            ref: '#python',
        },
    ];

    return (
        <>
            <ProjectPageLinks rowOne={rowOne} rowTwo={rowTwo} />
        </>
    );
};

export default ProductPageHeader;
