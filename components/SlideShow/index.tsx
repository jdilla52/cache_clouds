// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';

type Props = {};

export function SlideShow(props: Props) {
    const [offset, setOffset] = useState(0);

    useEffect(() => {


        const onScroll = () => setOffset(window.scrollY - window.screenX);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, {passive: false});
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div>
            {(function (rows: any[], i, len) {
                while (++i <= len) {
                    rows.push(<div className="w-96 h-96 bg-amber-200" style={{
                        left: `${offset - (280 * i)}px`,
                        position: "absolute",
                        width: 240,
                        height: 240
                    }}/>)
                }
                return rows;
            })([], 0, 1000)}

        </div>
    );
};
