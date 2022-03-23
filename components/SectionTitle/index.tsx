// @flow
import * as React from 'react';

type Props = {
    title: string;
};

export function SectionTitle({title}: Props) {
    return (
        <div className="pt-10 pb-16 pr-20 pl-2">
            <p className="text-sm font-press-start">{title}</p>
            <div className="border-b-4 h-2 border-dashed border-black w-full"/>
        </div>
    );
};
