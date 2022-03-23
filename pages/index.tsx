import type {NextPage} from "next";
import SiteMeta from "../components/Head";
import WordMark from "../components/WordMark";
import Instagram from "../components/Instagram";
import Twitter from "../components/Twitter";
import LottieBackgroundClouds from "../components/LottieBackgroundClouds/LottieBackgroundClouds.json";
import EtherScan from "../components/EtherScan";
import LooksRare from "../components/LooksRare";
import ConnectWallet from "../components/ConnectWallet";
import MintACloud from "../components/MintACloud";
import ExtendedForecastTemp from "../components/ExtendedForecastTemp";
import * as React from "react";
import {ReactElement, useEffect, useRef, useState} from "react";
import Location from "../components/Location";
import Lottie from 'react-lottie-player';
import Image from 'next/image'
import 'react-alice-carousel/lib/alice-carousel.css';

import jas from "../public/images/jas.png";
import and from "../public/images/and.png";
import jaq from "../public/images/jaq.png";
import AliceCarousel from "react-alice-carousel";
import {Panel1Info} from "../components/Panel1Info";

type faq =
    'WhyCacheClouds'
    | "HowManyCacheClouds"
    | "WhatIsADrop"
    | "WhatIsOg"
    | "DoYouHaveARoadmap"
    | "DoYouHaveADiscord"
    | "WhenWillCCLaunch"
    | "HowDoIGetACacheCloud"
    | "DoIHaveFullRightsToMyCC"
    | "WhatIsAnOG";


const Home: NextPage = () => {
    // const [showWalletOptions, setShowWalletOptions] = useState(false);
    // const [{ data: accountData }] = useAccount();
    // const [{ data: balanceData }] = useBalance({
    //   addressOrName: accountData?.address,
    // });
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LottieBackgroundClouds,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        },
        style: "width: 300px; height: 300px;"
    };

    const ref = useRef<ReactElement>(null);

    const [offset, setOffset] = useState(0);

    const [faqSection, setFaqSection] = useState<faq>("WhyCacheClouds");
    const [connectWallet, setConnectWallet] = useState(true);
    const [mintACloud, setMintACloud] = useState(true);

    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < 1024) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })


    const handleDragStart = (e: any) => e.preventDefault();
    const genItems = (offset: number = 0, length: number = 6) => {
        const itemsLength = Array.from({length});
        return itemsLength.map((item, index) => {
            return (
                <div key={`di${index + 1 + offset}`} className="p-6 w-[300px]">
                    <img
                        key={`index${index}`}
                        src={`/images/${index + 1 + offset}.png`}
                        role="presentation"/>
                </div>
            );
        });
    }

    return (
        <>
            <SiteMeta/>
            <div
                className="bg-ccBGBlue w-screen max-w-screen flex flex-col items-center overflow-hidden">
                <div className="fixed">
                    <div className="w-screen h-96 pt-24">
                        <Lottie
                            loop
                            animationData={LottieBackgroundClouds}
                            play
                            rendererSettings={{preserveAspectRatio: "xMidYMid slice"}}
                            style={{width: "100%", height: "100%", minHeight: 600}}
                        />
                    </div>
                </div>
                {/*header*/}
                <div
                    className="w-screen pt-4 flex flex-col md:flex-row md:pt-14 content-center items-center z-10 max-w-7xl">
                    {
                        isMobile ?
                            <>
                                <div className="grow flex flex-row justify-center m-4">
                                    <WordMark/>
                                </div>
                                <div className="flex flex-row grow-0 m-4">
                                    <button>
                                        <Twitter className="m-2.5"
                                                 onClick={() => window.open("https://twitter.com/CacheClouds/", "_blank")}/>
                                    </button>
                                    <button>
                                        <Instagram className="m-2.5"
                                                   onClick={() => window.open("https://instagram.com/cacheclouds/", "_blank")}/>
                                    </button>
                                    <button>
                                        <EtherScan className="m-2.5"/>
                                    </button>
                                    <button>
                                        <LooksRare className="m-2.5"/>
                                    </button>
                                </div>
                            </> :
                            <>
                                <div className="flex flex-row grow-0 m-4 md:ml-20 ml-2">
                                    <button>
                                        <Twitter className="m-2.5"
                                                 onClick={() => window.open("https://twitter.com/CacheClouds/", "_blank")}/>
                                    </button>
                                    <button>
                                        <Instagram className="m-2.5"
                                                   onClick={() => window.open("https://instagram.com/cacheclouds/", "_blank")}/>
                                    </button>
                                    <button>
                                        <EtherScan className="m-2.5"/>
                                    </button>
                                    <button>
                                        <LooksRare className="m-2.5"/>
                                    </button>
                                </div>
                                <div className="grow flex flex-row justify-center m-4">
                                    <WordMark/>
                                </div>
                            </>
                    }
                    <button className="h-16 grow-0 m-4 md:mr-20 ml-2"
                            onMouseOver={() => setConnectWallet(false)}
                            onMouseOut={() => setConnectWallet(true)}>
                        <ConnectWallet hover={connectWallet}/>
                    </button>
                </div>

                <div
                    className="max-w-5xl w-screen pt-4 md:pt-24 pl-6 pr-8 flex flex-col md:items-stretch md:flex-row content-center items-center z-10">
                    <div
                        className="bg-ccPanelWhite m-6 w-300 h-[340px] md:flex-none shadow-cc_panel_dropShadow">
                        <Panel1Info/>
                    </div>
                    <div className="bg-ccPanelWhite opacity-80 m-6 w-full shadow-cc_panel_dropShadow">
                        <div
                            className="pt-6 px-2 mb-4 flex flex-col items-center text-center content-center font-VT323 leading-[1rem]">
                            <p className="text-lg m-2 font-press-start leading-[1.25rem]">
                                Cache Clouds are a Weather Experiment for the Metaverse.
                            </p>
                            <p className="text-xl my-1">
                                There will be 9,000 total Cache Cloud NFTs. The cache will be cleared through
                                separate
                                seasonal and themed Drops taking place over 2022. Anyone can be a cloud, and a
                                cloud
                                can
                                be anything.
                            </p>
                            <p className="text-xl my-1">
                                Weather is constantly changing, just like web3, and as such Cache Clouds will be
                                an
                                evolving long-term experiment. We have plans and ideas around upgrades,
                                expansions,
                                and royalties.
                            </p>
                            <p className="text-xl my-1">
                                Keep an eye out for Severe Weather Alerts, Storm Warnings, and Rare Cloud
                                Formations.
                            </p>
                            <button className="mt-3" onMouseOver={() => setMintACloud(false)}
                                    onMouseOut={() => setMintACloud(true)}>
                                <MintACloud hover={mintACloud}/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl w-screen pl-6 pr-8 z-10">
                    <div className="m-6 bg-ccPanelWhite shadow-cc_panel_dropShadow z-10">
                        <ExtendedForecastTemp/>
                    </div>
                </div>
                <div className="pt-4 md:pt-16">
                    <div className="w-screen h-max">
                        <AliceCarousel mouseTracking items={genItems()} disableDotsControls autoWidth
                                       disableButtonsControls
                                       infinite autoPlay autoPlayStrategy={"action"} autoPlayInterval={2000}/>
                    </div>
                    <div className="w-screen h-max">
                        <AliceCarousel mouseTracking items={genItems(6)} disableDotsControls autoWidth
                                       disableButtonsControls
                                       infinite autoPlay autoPlayStrategy={"action"} autoPlayDirection={"rtl"}
                                       autoPlayInterval={2000}/>
                    </div>
                    <div className="w-screen h-max">

                        <AliceCarousel mouseTracking items={genItems(12)} disableDotsControls autoWidth
                                       disableButtonsControls
                                       infinite autoPlay autoPlayStrategy={"action"} autoPlayInterval={2000}/>

                    </div>
                </div>


                <div
                    className="max-w-7xl pt-4 md:pt-16 md:px-20 px-6 flex flex-col content-center items-center  w-max z-10 font-press-start">
                    <div className="flex flex-row ml-4">
                        <div className="m-1">
                            <Location/>
                        </div>
                        <div className="cursor-pointer p-2 text-ccSocialIcon">
                            Weather Team
                        </div>
                    </div>
                    <div
                        className="pt-4 px-24 flex flex-col md:flex-row content-center items-center">

                        <div
                            className="bg-ccPanelWhite shadow-cc_panel_dropShadow m-4 flex flex-col items-center content-center text-center w-min">
                            <p className="text-xl mx-4 pt-6">
                                Climatologist
                            </p>
                            <div className="w-52 h-52 bg-amber-200 m-2 mx-16">
                                <Image src={jas}/>
                            </div>
                            <p className="text-xl m-4 font-VT323">
                                Creative genius, once in a lifetime visionary.
                            </p>
                        </div>
                        <div
                            className="bg-ccPanelWhite shadow-cc_panel_dropShadow m-4 flex flex-col items-center content-center text-center w-min">
                            <p className="text-xl mx-4 pt-6">
                                Meteorologist
                            </p>
                            <div className="w-52 h-52 bg-amber-200 m-2 mx-16">
                                <Image src={and}/>
                            </div>
                            <p className="text-xl m-4 font-VT323">
                                Crypto playboi, <br/>dreams of being swole.
                            </p>
                        </div>
                        <div
                            className="bg-ccPanelWhite shadow-cc_panel_dropShadow m-4 flex flex-col items-center content-center text-center w-min">
                            <p className="text-xl mx-4 pt-6">
                                Storm Chaser
                            </p>
                            <div className="w-52 h-52 bg-amber-200 m-2 mx-16">
                                <Image src={jaq}/>
                            </div>
                            <p className="text-xl m-4 font-VT323">
                                Voted best looking <br/>in high school.
                            </p>
                        </div>
                    </div>
                </div>


                <div
                    className="max-w-5xl pl-6 pr-8 flex flex-col w-full pt-4 md:pt-16 max-w-7xl text-ccSocialIcon text-left z-10 font-press-start">
                    <div className="w-full h-16 bg-ccOrange my-4 flex items-center">
                        <p className="px-6 text-2xl text-ccSocialIcon">
                            FAQ
                        </p>
                    </div>
                    <div className="w-full bg-ccDarkBlue my-4 flex flex-col px-6 items-start">
                        <button className="text-xl py-4 w-full text-left"
                                onClick={() => setFaqSection("WhyCacheClouds")}>
                            Why Cache Clouds?
                        </button>
                        {faqSection == "WhyCacheClouds" &&
                            <div className="text-base pb-2 w-full font-mono text-xl">
                                <div className="border-b-4 mb-2 border-ccSocialIcon w-full"/>
                                <p className="py-1 ">
                                    Cache Clouds started as an idea to try to bring a different spin to PFP
                                    projects and
                                    the
                                    NFT space. With the team’s past experience of working in the research and
                                    innovation
                                    department at adidas, we sought to bring some of the sneaker world and some
                                    of our
                                    experimental mindset to the NFT space. In short, we didn’t want to release a
                                    standard
                                    10,000 NFT project.
                                </p>
                                <p className="py-1 ">
                                    We created the Drops concept as something akin to a sneaker drop. The team
                                    all has
                                    fond
                                    (sometimes not fond) memories of trying to get a new NMD, Yeezy, or 4D on
                                    release
                                    date.
                                    NFTs give us the chance to store this drop information on-chain, and to
                                    build around
                                    it.

                                </p>
                                <p className="py-1 ">
                                    With that concept in hand we wanted to further explore the NFT space by
                                    creating new
                                    experiences for holders. Think Mutant Ape serums, Doodle’s spaceships, and
                                    more.
                                    Clouds and weather give us a long term opportunity to think about new
                                    utilities and
                                    narratives in a single NFT collection. We hope you join us in our
                                    exploration
                                    through the clouds.
                                </p>
                                <p className="py-1 ">
                                    Anyone can be a cloud, and a cloud can be anything. After all, weather is
                                    constantly
                                    changing.
                                </p>
                            </div>
                        }
                    </div>
                    <div className="w-full bg-ccDarkBlue my-4 flex flex-col px-6 items-start">
                        <button className="text-xl py-4 w-full text-left"
                                onClick={() => setFaqSection("HowManyCacheClouds")}>
                            How many Cache Clouds are there?
                        </button>
                        {faqSection == "HowManyCacheClouds" &&
                            <div className="text-base pb-2 w-full font-mono text-xl">
                                <div className="border-b-4 mb-2 border-ccSocialIcon w-full"/>
                                <p className="py-1 ">
                                    In total there will be 9000 Cache Clouds available to mint. The Clouds will
                                    be
                                    released throughout 2022 in various sized Drops.
                                </p>
                                <p className="py-1 ">
                                    - Our first Drop will be only 250 Clouds, which will be “OG” Clouds.
                                </p>
                                <p className="py-1 ">
                                    - Within 24 hours after the OG Drop, we will launch our first public Drop of
                                    1750
                                    Clouds.
                                </p>
                                <p className="py-1 ">
                                    - Throughout the rest of the year the remaining 7000 Clouds will be released
                                    in
                                    various amounts.
                                </p>
                            </div>
                        }
                    </div>
                    <div className="w-full bg-ccDarkBlue my-4 flex flex-col px-6 items-start">
                        <button className="text-xl py-4 w-full text-left"
                                onClick={() => setFaqSection("WhatIsADrop")}>
                            What is a Drop?
                        </button>
                        {faqSection == "WhatIsADrop" &&
                            <div className="text-base pb-2 w-full font-mono text-xl">
                                <div className="border-b-4 mb-2 border-ccSocialIcon w-full"/>
                                <p className="py-1 ">
                                    A Drop is a release of Clouds from our Cache into the Metaverse. Each Drop
                                    will have
                                    a different theme, which will roughly correspond to different seasons in the
                                    Northern hemisphere. For example, we plan on a “Summer Drop” sometime around
                                    June
                                    with a focus on summer-y traits and artistic styling. </p>
                                <p className="py-1 ">
                                    The Drop that a Cloud belongs to will be stored on-chain. We hope this will
                                    allow us
                                    to do some interesting and unique things around the utility of the NFT.
                                </p>
                                <p className="py-1 ">
                                    Each Drop will be a different size and will be announced prior to the start
                                    of the
                                    Drop - we don’t plan on having any secret Drops.
                                </p>
                            </div>
                        }
                    </div>
                    <div className="w-full bg-ccDarkBlue my-4 flex flex-col px-6 items-start">
                        <button className="text-xl py-4 w-full text-left"
                                onClick={() => setFaqSection("WhatIsAnOG")}>
                            What&apos;s an OG?
                        </button>
                        {faqSection == "WhatIsAnOG" &&
                            <div className="text-base pb-2 w-full font-mono text-xl">
                                <div className="border-b-4 mb-2 border-ccSocialIcon w-full"/>
                                <p className="py-1 ">
                                    An OG Cloud is a Cache Cloud with a token id between 0 and 249. These
                                    correspond to
                                    the first 250 Clouds that were minted. By holding an OG, you will receive
                                    two free
                                    mints (per OG Cloud) to every Drop. All you need to pay is gas fees.
                                </p>
                                <p className="py-1 ">
                                    The first 100 OGs will be reserved by the Cache Cloud team for giveaways,
                                    marketing
                                    purposes, and more. The next 100 OGs will be reserved for our allowlist and
                                    the
                                    final 50 will be available for public sale.

                                </p>
                            </div>
                        }
                    </div>
                    <div className="w-full bg-ccDarkBlue my-4 flex flex-col px-6 items-start">
                        <button className="text-xl py-4 w-full text-left"
                                onClick={() => setFaqSection("DoYouHaveARoadmap")}>
                            Do you have a roadmap?
                        </button>
                        {faqSection == "DoYouHaveARoadmap" &&
                            <div className="text-base pb-2 w-full font-mono text-xl">
                                <div className="border-b-4 mb-2 border-ccSocialIcon w-full"/>
                                <p className="py-1 ">
                                    Our Extended Forecast is our version of a roadmap. Drops will be happening
                                    periodically throughout the course of 2022. We have additional plans for
                                    merch,
                                    activations, and adding functionality to each NFT. These things will be
                                    sprinkled in
                                    throughout the year. You might actually want to look forward to hurricane
                                    season.
                                </p>
                            </div>
                        }
                    </div>
                    <div className="w-full bg-ccDarkBlue my-4 flex flex-col px-6 items-start">
                        <button className="text-xl py-4 w-full text-left"
                                onClick={() => setFaqSection("DoYouHaveADiscord")}>
                            Do you have a Discord?
                        </button>
                        {faqSection == "DoYouHaveADiscord" &&
                            <div className="text-base pb-2 w-full font-mono text-xl">
                                <div className="border-b-4 mb-2 border-ccSocialIcon w-full"/>
                                <p className="py-1 ">
                                    We don’t yet. At this time, we don’t plan on much of a public Discord and
                                    certainly
                                    not an allowlist competition in our Discord. If you have thoughts on how to
                                    improve
                                    the Discord experience for a NFT community, we would like to hear from you!
                                    Drop us
                                    a DM on Twitter.
                                </p>
                                <p className="py-1 ">
                                    Once we start minting there will be holders only channels.
                                </p>
                            </div>
                        }
                    </div>
                    <div className="w-full bg-ccDarkBlue my-4 flex flex-col px-6 items-start">
                        <button className="text-xl py-4 w-full text-left"
                                onClick={() => setFaqSection("WhenWillCCLaunch")}>
                            When will Cache Clouds launch?
                        </button>
                        {faqSection == "WhenWillCCLaunch" &&
                            <div className="text-base pb-2 w-full font-mono text-xl">
                                <div className="border-b-4 mb-2 border-ccSocialIcon w-full"/>
                                <p className="py-1">
                                    Cache Clouds will be launching in Q1 2022 with the first mint tentatively
                                    planned
                                    for early March.
                                </p>
                            </div>
                        }
                    </div>

                    <div className="w-full bg-ccDarkBlue my-4 flex flex-col px-6 items-start">
                        <button className="text-xl py-4 w-full text-left"
                                onClick={() => setFaqSection("HowDoIGetACacheCloud")}>
                            How do I get a Cache Cloud?
                        </button>
                        {faqSection == "HowDoIGetACacheCloud" &&
                            <div className="text-base pb-2 w-full font-mono text-xl">
                                <div className="border-b-4 mb-2 border-ccSocialIcon w-full"/>
                                <p className="py-1">
                                    A mint guide is coming soon. Follow @cacheclouds on Twitter for updates.
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;
