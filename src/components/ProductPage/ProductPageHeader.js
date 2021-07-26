import React from 'react';
import Links from '../Links';

const ProductPageHeader = () => {
    const links = [
        {
            label: 'REACT',
            ref: '#react',
        },
        {
            label: 'iOS',
            ref: '#ios',
        },
        {
            label: 'CHROME EXTENSIONS',
            ref: '#chrome',
        },
        {
            label: 'PYTHON',
            ref: '#python',
        },
    ];

    return (
        <>
            <h1>hi</h1>
            <Links data={links} />
        </>
    );
};

export default ProductPageHeader;
