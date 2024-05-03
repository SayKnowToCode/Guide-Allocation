import React from "react";
import NotificationBox from "../../ReqDivs/notification";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import TeamMembers from "../../TeamMembers/TeamMembers";
import Events from "../../ReqDivs/Events";
const RevealBento = ({ teamMembers, teamName, acceptedGuide, expertAllocated }) => {
    return (
        <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
            {/* <Logo /> */}
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-12"
            >
                <HeaderBlock teamMembers={teamMembers} teamName={teamName} acceptedGuide={acceptedGuide} expertAllocated={expertAllocated} />
                <SocialsBlock />
            </motion.div>
        </div>
    );
};

const Block = ({ className, ...rest }) => {
    return (
        <motion.div
            variants={{
                initial: {
                    scale: 0.5,
                    y: 50,
                    opacity: 0,
                },
                animate: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                },
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
            className={twMerge(
                "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
                className
            )}
            {...rest}
        />
    );
};

const HeaderBlock = ({ teamMembers, teamName, acceptedGuide, expertAllocated }) => (
    <Block className="col-span-12 row-span-2 md:col-span-6">
        <img
            src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
            alt="avatar"
            className="mb-4 size-14 rounded-full"
        />
        <div><TeamMembers teamMembers={teamMembers} teamName={teamName} /></div>
        <div className='guide-expert'>
            <div className=''>{acceptedGuide !== '' ? <p className='mt-5 font-sans font-semibold text-lg uppercase tracking-wider'><span className='c1'>Guide: </span>{acceptedGuide}</p> : 'Empty'}</div>
            <div className=''>{expertAllocated ? <p className='mt-5 font-sans font-semibold text-lg uppercase tracking-wider'><span className='c1'>Expert: </span>{expertAllocated}</p> : 'Empty'}</div>
        </div>
    </Block>
);

const SocialsBlock = () => (
    <div className="flex-col">
        <Block className='w-fit'>
            <div><NotificationBox /></div>
        </Block>

        <Block className='w-fit mt-2 '>
            <div><Events /></div>
        </Block>
    </div>
);

export default RevealBento;