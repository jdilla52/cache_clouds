import React from 'react';

export default function EtherScan(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g filter="url(#filter0_d_261_196)">
                <path
                    d="M45.8182 6.54545V4.36364H43.6364V2.18182H41.4545V0H6.54545V2.18182H4.36364V4.36364H2.18182V6.54545H0V41.4545H2.18182V43.6364H4.36364V45.8182H6.54545V48H41.4545V45.8182H43.6364V43.6364H45.8182V41.4545H48V6.54545H45.8182Z"
                    fill="#269AFF"/>
                <path
                    d="M41.4544 21.8182V24H39.2726V26.1818H37.0908V8.72729H30.5453V30.5455H26.1817V13.0909H19.6363V34.9091H15.2726V17.4546H8.72716V37.0909H4.36353V39.2728H6.54534V41.4546H15.2726V39.2728H21.8181V37.0909H28.3635V34.9091H32.7272V32.7273H37.0908V30.5455H39.2726V28.3637H41.4544V26.1818H43.6363V24V21.8182H41.4544Z"
                    fill="white"/>
            </g>
            <defs>
                <filter id="filter0_d_261_196" x="0" y="0" width="53" height="53" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="5" dy="5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_261_196"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_261_196" result="shape"/>
                </filter>
            </defs>
        </svg>

    );
}
