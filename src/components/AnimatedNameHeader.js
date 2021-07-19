import React from 'react';

const AnimatedNameHeader = () => {
    let leon, canvas, ctx;

    const sw = 800;
    const sh = 400;
    const pixelRatio = 2;

    const init = () => {
        canvas = document.createElement('canvas');
        const referenceNode = document.getElementById('referenceNode');
        const parentNode = document.getElementById('parentNode');

        parentNode.insertBefore(canvas, referenceNode);
        ctx = canvas.getContext('2d');
        canvas.width = sw * pixelRatio;
        canvas.height = sh * pixelRatio;
        canvas.style.width = '100%';
        canvas.style.height = sh;
        ctx.scale(pixelRatio, pixelRatio);

        leon = new window.LeonSans({
            text: 'Jack Dunleavy',
            color: ['#000000'],
            size: 80,
            weight: 200,
        });

        requestAnimationFrame(animate);

        let i,
            total = leon.drawing.length;
        for (i = 0; i < total; i++) {
            window.TweenMax.fromTo(
                leon.drawing[i],
                1.6,
                {
                    value: 0,
                },
                {
                    delay: i * 0.05,
                    value: 1,
                    ease: window.Power4.easeOut,
                }
            );
        }
    };

    const animate = (t) => {
        requestAnimationFrame(animate);

        ctx.clearRect(0, 0, sw, sh);

        const x = (sw - leon.rect.w) / 2;
        const y = (sh - leon.rect.h) / 2;
        leon.position(x, y);

        leon.draw(ctx);
    };

    window.onload = () => {
        init();
    };

    return (
        <div id="parentNode" className="animation-container">
            <div id="referenceNode"></div>
        </div>
    );
};

export default AnimatedNameHeader;
