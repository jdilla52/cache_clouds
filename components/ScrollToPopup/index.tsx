import React, {useState} from "react";
import {animateScroll as scroll, Link} from "react-scroll";
import Location from "../Location";

export default function ScrollPopup (props: JSX.IntrinsicAttributes | {className: string}){
    const [isShown, setIsShown] = useState(false);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <nav className="text-ccSocialIcon" {...props}>
            <div className="text-lg text-ccSocialIcon">
                <ul className="flex flex-row"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                    <div className="m-1">
                        <Location/>
                    </div>
                    <li className="cursor-pointer p-2">
                           Metaverse
                    </li>
                    {isShown ? (
                        <>
                            <li className="cursor-pointer p-2">
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                   about
                                </Link>
                            </li>
                            <li className="cursor-pointer p-2">
                                <Link
                                    activeClass="active"
                                    to="how"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                   how
                                </Link>
                            </li>
                            <li className="cursor-pointer p-2">
                                <Link
                                    activeClass="active"
                                    to="who"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                   who
                                </Link>
                            </li>
                            <li className="cursor-pointer p-2">
                                <Link
                                    activeClass="active"
                                    to="club"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                   club
                                </Link>
                            </li>
                        </>) : null}
                </ul>
            </div>
        </nav>
    );
}
