import Image from 'next/image'
import React from 'react'
import { FaPersonRays } from 'react-icons/fa6'
import { IconParkOutlineMultiRing, ActionGuardHomeManager, GuidanceMeetingRoom, HugeIconsMentor, LucideWorkflow, MaterialSymbolsBrunchDiningSharp, MaterialSymbolsCommunication, MaterialSymbolsLightBodySystemRounded, SimpleIconsHandshakeProtocol } from '../Common/ui/icons'
import { SiHomeassistantcommunitystore } from 'react-icons/si'

const PersonalityDevelop = () => {
    const focus = {
        title: "Personality Development",
        subTitle: "Personality gives you an edge over others",
        focusOn: "To help you succeed in life",
        description: "We develop personality and leadership skills in Kids, teenagers and adults (youth, homemakers, working professionals, Air hostess )",
        keyPoints: [
            { name: 'Personality Enrichment', icon: <IconParkOutlineMultiRing /> },
            { name: 'Communication skills', icon: <ActionGuardHomeManager /> },
            { name: 'Leadership skills', icon: <HugeIconsMentor /> },
            { name: 'Body language', icon: <FaPersonRays /> },
            { name: 'Image consulting', icon: <MaterialSymbolsCommunication /> },
            { name: 'Public speaking', icon: <MaterialSymbolsLightBodySystemRounded /> },
            { name: 'Client Handling', icon: <FaPersonRays /> },
            { name: 'Etiquettes and protocol', icon: <SimpleIconsHandshakeProtocol /> },
            { name: 'Fine dining and high tea etiquette', icon: <MaterialSymbolsBrunchDiningSharp /> },
            { name: 'smart work Life Balance', icon: <LucideWorkflow /> },
            { name: 'Effective Home Management', icon: <SiHomeassistantcommunitystore /> },
            { name: 'Career Planning', icon: <GuidanceMeetingRoom /> },
            { name: 'Role Play', icon: <FaPersonRays /> },
            { name: 'Counselling', icon: <MaterialSymbolsLightBodySystemRounded /> }
        ]
    }


    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image className="object-cover object-center rounded" alt="hero" src="/images/rahul-p-dev.png" height={720} width={600} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start items-center">
                        <h1 className="text-left text-yellow-600 font-semibold">{focus.title}</h1>
                        <h2 className="title-font text-3xl font-medium text-gray-900 pb-3">{focus.subTitle} </h2>
                        <p className="mb-3 leading-relaxed">{focus.description}</p>
                        <ul className='py-4 grid sm:grid-cols-2 grid-cols-1 gap-4'>
                            {focus.keyPoints.map((keyPoint, i) => (
                                <li key={i} className="flex gap-4 items-center py-3 px-3 rounded-tr-[2rem] border shadow-sm">
                                    <span className='text-3xl text-yellow-600'>{keyPoint.icon}</span>
                                    {keyPoint.name}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default PersonalityDevelop