// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import MetaversePanel1 from "../MetaversePanel1";
import Panel1Dude from "../Panel1Dude";
import Panel1Drop from "../Panel1Drop";
import Panel1420 from "../Panel1420";
import Panel1Green from "../Panel1Green";
import Panel100 from "../Panel100";
import Panel1InfoButton from "../Panel1InfoButton";
import {wait} from "@hapi/hoek";
import Panel1TableBackground from "../Panel1TableBackground";
import Panel1VeryCloudy from '../Panel1VeryCloudy';
import Panel169 from '../Panel169';
import {Panel1SubPanelTitle} from "../Panel1SubpanelTitle";
import Panel1SubpanelAbout from "../Panel1SubpanelAbout";
import {Panel1SubPanelFaq} from "../Panel1SubpanelFaq";
import {Panel1SubPanelForcaste} from "../Panel1SubpanelForecast";
import {Panel1SubPanelTeam} from '../Panel1SubpanelTeam';

type Props = {};

export function Panel1Info(props: Props) {
    const [showTableContents, setShowTableContents] = useState(false);
    const [hover, setHover] = useState(false);

    const toggle = () => {
        setHover(e => !e);
        wait(5000).then(() => toggle())
    }
    useEffect(() => {
        toggle();
    }, []);

    return (
        <div className="flex flex-col items-center w-full h-full content-center relative">
            {showTableContents ?
                <div className="absolute pl-6 top-10 right-8 bottom-6 z-10">
                    <div className="relative w-full h-full">
                        <Panel1TableBackground/>
                        <div
                            className="absolute top-3 bottom-3 pl-3 pt-3 flex flex-col w-full items-center content-center justify-between h-3/4">
                            <div>
                                <Panel1SubPanelTitle/>
                            </div>
                            {/*<div className="pt-6 flex flex-col items-center content-center items-start justify-between h-full">*/}
                            <Panel1SubpanelAbout/>

                            <Panel1SubPanelForcaste/>

                            <Panel1SubPanelTeam/>

                            <Panel1SubPanelFaq/>
                            {/*</div>*/}
                        </div>
                    </div>

                </div>
                :
                null}
            <div className="h-12 flex flex-col justify-center">
                <MetaversePanel1/>
            </div>

            <div
                className="flex flex-col items-center content-center justify-center flex-grow w-full bg-ccLightTeal relative">
                <div className="p-4">
                    <Panel1Dude hover={hover}/>
                </div>
                <div className="p-2 ml-4">
                    <Panel169 hover={hover}/>
                </div>
                <div className="p-2">
                    <Panel1VeryCloudy/>
                </div>
            </div>
            <div className="flex flex-row w-full h-11 items-center justify-between px-4">
                <div className="flex flex-row items-center pr-2">
                    <div className="pr-2">
                        <Panel1Drop/>
                    </div>
                    <div className="pb-0.5 pr-2">
                        <Panel1420/>
                    </div>
                </div>
                <div className="flex flex-row items-center pr-2">
                    <div className="pr-2">
                        <Panel1Green/>
                    </div>
                    <div className="pb-0.5 pr-2">
                        <Panel100/>
                    </div>
                </div>
                <div onClick={() => setShowTableContents(!showTableContents)}>

                       <Panel1InfoButton/>
                </div>

            </div>
        </div>
    )
        ;
};
