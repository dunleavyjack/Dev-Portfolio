import React, { useEffect } from 'react';

const AnimatedNameHeader = () => {
    useEffect(() => {
        let leon, canvas, ctx;

        const sw = 800;
        const sh = 400;
        const pixelRatio = 2;

        const init = () => {
            canvas = document.createElement('canvas');
            const referenceNode =
                document.getElementsByClassName('reference-node')[0];
            const parentNode =
                document.getElementsByClassName('parent-node')[0];

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
                size: 100,
                weight: 500,
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

        init();
    }, []);

    return (
        <div id="top" className="parent-node">
            <div className="reference-node"></div>
        </div>
    );
};

export default AnimatedNameHeader;
