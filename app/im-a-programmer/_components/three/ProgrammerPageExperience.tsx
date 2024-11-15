'use client'
import { useAppContext } from '@/app/_context/AppContext';
import { ScalesThreeType, VisibilityThreeType } from '@/app/_library/types/common';
import { Atom } from '@/public/3d-objects';
import CoinGrowth from '@/public/3d-objects/coin-growth/CoinGrowth';
import CombinationLock from '@/public/3d-objects/combination-lock/CombinationLock';
import DigitalDataHighway from '@/public/3d-objects/digital-data-highway/DigitalDataHighway';
import DollarSign from '@/public/3d-objects/dollar-sign/DollarSign';
import SmilingEmojiOne from '@/public/3d-objects/emoji-smile-one/SmilingEmojiOne';
import SmilingEmojiTwo from '@/public/3d-objects/emoji-smile-two/SmilingEmojiTwo';
import IPhone from '@/public/3d-objects/iphone/IPhone';
import LightBulb from '@/public/3d-objects/light-bulb/LightBulb';
import Macbook from '@/public/3d-objects/macbook/Macbook';
import POSMachine from '@/public/3d-objects/pos-machine/POSMachine';
import Puzzle from '@/public/3d-objects/puzzle/Puzzle';
import SphereBot from '@/public/3d-objects/sphere-bot/SphereBot';
import SwissArmyKnife from '@/public/3d-objects/swiss-army-knife/SwissArmyKnife';
import React from 'react'
import { programmerPageMotionLogic } from '../../_utility/motion';
import { useScroll } from 'framer-motion';
import ScalingFactorManager from '@/app/_utility/three/ScalingFactorManager';
import VisibilityManager from '@/app/_utility/three/VisibilityManager';
import ScaleManager from '@/app/_utility/three/ScaleManager';
import { MotionGroup } from '@/app/_components/common/framer/MotionGroup';
import { Float } from '@react-three/drei';

const ProgrammerPageExperience = () => {

    // app context values and functions
    const { scroll: { dynamicIncrement: dI, }, appContainer:{scrollRef}} = useAppContext();
    
    // scroll motion values for scroll animations
    const {scrollY,} = useScroll({container:scrollRef,}); 

    // memoized 3D assets
    const CachedLightBulb = React.memo(LightBulb);
    const CachedSphereBot = React.memo(SphereBot);
    const CachedPOSMachine = React.memo(POSMachine);
    const CachedIPhone = React.memo(IPhone);
    const CachedPuzzle = React.memo(Puzzle);
    const CachedEmoji = React.memo(SmilingEmojiTwo);
    const CachedSwissArmyKnife = React.memo(SwissArmyKnife);
    const CachedMacbook = React.memo(Macbook);
    const CachedCoinGrowth = React.memo(CoinGrowth);
    const CachedDataHighway = React.memo(DigitalDataHighway);
    const CachedEmojiTwo = React.memo(SmilingEmojiOne);
    const CachedDollarSign = React.memo(DollarSign);
    const CachedCombinationLock = React.memo(CombinationLock);
    const CachedAtom = React.memo(Atom);


    // create visible states
    const [scalingFactor, setScalingFactor] = React.useState<number>(1);

    const [visible, setVisible] = React.useState<VisibilityThreeType>({
        lightBulb: true,
        bot: false,
        pos: false,
        iPhone: false,
        puzzle: false,
        emoji: false,
        swiss: false,
        macbook: false,
        coin: false,
        dataHighway: false,
        emojiTwo: false,
        dollar: false,
        lock: false,
        atom: false,
    });

    // event points for calculating 3d assets
    const homeEventPoints = [
        0, dI(0.5), dI(1), dI(1.5), dI(2 ), dI(2.5), dI(3 ), dI(3.5),
        dI(4 ), dI(4.5), dI(5 ), dI(5.5), dI(6 ), dI(6.5), dI(7 ), dI(7.5),
        dI(8 ), dI(8.5), dI(9 ), dI(9.5), dI(10 ), dI(10.5), dI(11 ), dI(11.5),
        dI(12 ), dI(12.5), dI(13 ), dI(13.5), dI(14 ), dI(14.5), dI(15 ), dI(15.5),
        dI(16 ), dI(16.5), dI(17 ), dI(17.5), dI(18 ), dI(18.5), dI(19 ), dI(19.5),dI(20),
    ];

    // motion paths for 3d objects
    const {
        lightBulbMotion, robotMotion, posMachineMotion,
        iPhoneMotion, puzzleMotion, emojiMotion,
        swissMotion, macbookMotion, coinGrowthMotion,
        dataHighwayMotion, emojiTwoMotion, dollarSignMotion,
        combinationLockMotion, atomMotion,
    } = programmerPageMotionLogic(scrollY, homeEventPoints);

    // Scaling value for responsive experience
    const mainScalingFactor = window ? Math.min(Math.max(window.innerWidth / 1920, window.innerWidth > 700 && window.innerWidth < window.innerHeight ? 0.4 :0.6), 3) : 1;

    // scale const for managing visibility
    const lightBulb = lightBulbMotion().scale.get() * mainScalingFactor;
    const bot = robotMotion().scale.get() * mainScalingFactor;
    const pos = posMachineMotion().scale.get() * mainScalingFactor;
    const iPhone = iPhoneMotion().scale.get() * mainScalingFactor;
    const puzzle = puzzleMotion().scale.get() * mainScalingFactor;
    const emoji = emojiMotion().scale.get() * mainScalingFactor;
    const swiss = swissMotion().scale.get() * mainScalingFactor;
    const macbook = macbookMotion().scale.get() * mainScalingFactor;
    const coin = coinGrowthMotion().scale.get() * mainScalingFactor;
    const dataHighway = dataHighwayMotion().scale.get() * mainScalingFactor;
    const emojiTwo = emojiTwoMotion().scale.get() * mainScalingFactor;
    const dollar = dollarSignMotion().scale.get() * mainScalingFactor;
    const lock = combinationLockMotion().scale.get() * mainScalingFactor;
    const atom = atomMotion().scale.get() * mainScalingFactor;

    // scales object for visibility manager
    const [scales, setScales] = React.useState<ScalesThreeType>({
        lightBulb, bot, pos,
        iPhone, puzzle, emoji,
        swiss, macbook, coin,
        dataHighway, emojiTwo, dollar,
        lock, atom
    });

    // update scaling factor when it changes
    ScalingFactorManager({scalingFactor,setScalingFactor,mainScalingFactor});

    // manage visibility of 3d  models
    VisibilityManager({scales,visible,setVisible});

    // manage scales of object for scroll changes
    ScaleManager({scrollY,setScales,scalesPayload:{
        lightBulb,bot,pos,iPhone,puzzle,emoji,swiss,macbook,coin,
        dataHighway,emojiTwo,dollar,lock,atom
    }});

    return (
        
        <group
        scale={mainScalingFactor}
        >


            {/* light bulb model */}
            <MotionGroup
                visible={visible.lightBulb}
                castShadow
                scale={lightBulbMotion().scale}
                position={[lightBulbMotion().x, lightBulbMotion().y, lightBulbMotion().z]}
                rotation={[lightBulbMotion().rotationX, lightBulbMotion().rotationY, lightBulbMotion().rotationZ]}
            >
                <Float
                    floatIntensity={1.5}
                    rotationIntensity={3}
                >
                    <CachedLightBulb />
                </Float>
            </MotionGroup>

            {/* sphere bot model */}
            <MotionGroup
                visible={visible.bot}
                castShadow
                scale={robotMotion().scale}
                position={[robotMotion().x, robotMotion().y, robotMotion().z]}
                rotation={[robotMotion().rotationX, robotMotion().rotationY, robotMotion().rotationZ]}
            >
                <CachedSphereBot />

            </MotionGroup>

            {/* pos machine model */}
            <MotionGroup
                visible={visible.pos}
                castShadow
                scale={posMachineMotion().scale}
                position={[posMachineMotion().x, posMachineMotion().y, posMachineMotion().z]}
                rotation={[posMachineMotion().rotationX, posMachineMotion().rotationY, posMachineMotion().rotationZ]}
            >
                <CachedPOSMachine />
            </MotionGroup>

            {/* iPhone model */}
            <MotionGroup
                visible={visible.iPhone}
                castShadow
                scale={iPhoneMotion().scale}
                position={[iPhoneMotion().x, iPhoneMotion().y, iPhoneMotion().z]}
                rotation={[iPhoneMotion().rotationX, iPhoneMotion().rotationY, iPhoneMotion().rotationZ]}
            >
                <Float
                    floatIntensity={1.5}
                    rotationIntensity={1.5}
                >
                    <CachedIPhone />
                </Float>
            </MotionGroup>

            {/* puzzle model */}
            <MotionGroup
                visible={visible.puzzle}
                castShadow
                scale={puzzleMotion().scale}
                position={[puzzleMotion().x, puzzleMotion().y, puzzleMotion().z]}
                rotation={[puzzleMotion().rotationX, puzzleMotion().rotationY, puzzleMotion().rotationZ]}
            >
                <CachedPuzzle />
            </MotionGroup>

            {/* emoji model */}
            <MotionGroup
                visible={visible.emoji}
                castShadow
                scale={emojiMotion().scale}
                position={[emojiMotion().x, emojiMotion().y, emojiMotion().z]}
                rotation={[emojiMotion().rotationX, emojiMotion().rotationY, emojiMotion().rotationZ]}
            >
                <Float
                // floatIntensity={1.5}
                // rotationIntensity={1.5}
                >
                    <CachedEmoji />
                </Float>
            </MotionGroup>

            {/* swiss army knife model */}
            <MotionGroup
                visible={visible.swiss}
                castShadow
                scale={swissMotion().scale}
                position={[swissMotion().x, swissMotion().y, swissMotion().z]}
                rotation={[swissMotion().rotationX, swissMotion().rotationY, swissMotion().rotationZ]}
            >
                {/* <Float
                            // floatIntensity={1.5}
                            // rotationIntensity={1.5}
                            > */}
                <CachedSwissArmyKnife />
                {/* </Float> */}
            </MotionGroup>

            {/* macbook model */}
            <MotionGroup
                visible={visible.macbook}
                castShadow
                scale={macbookMotion().scale}
                position={[macbookMotion().x, macbookMotion().y, macbookMotion().z]}
                rotation={[macbookMotion().rotationX, macbookMotion().rotationY, macbookMotion().rotationZ]}
            >
                <Float
                    floatIntensity={0.25}
                    rotationIntensity={1.5}
                >
                    <CachedMacbook />
                </Float>
            </MotionGroup>

            {/* coin growth model */}
            <MotionGroup
                visible={visible.coin}
                castShadow
                scale={coinGrowthMotion().scale}
                position={[coinGrowthMotion().x, coinGrowthMotion().y, coinGrowthMotion().z]}
                rotation={[coinGrowthMotion().rotationX, coinGrowthMotion().rotationY, coinGrowthMotion().rotationZ]}
            >
                <Float
                    floatIntensity={0.25}
                    rotationIntensity={1.5}
                >
                    <CachedCoinGrowth />
                </Float>
            </MotionGroup>

            {/* data highway model */}
            <MotionGroup
                visible={visible.dataHighway}
                castShadow
                scale={dataHighwayMotion().scale}
                position={[dataHighwayMotion().x, dataHighwayMotion().y, dataHighwayMotion().z]}
                rotation={[dataHighwayMotion().rotationX, dataHighwayMotion().rotationY, dataHighwayMotion().rotationZ]}
            >
                <Float
                    floatIntensity={0.25}
                    rotationIntensity={1.5}
                >
                    <CachedDataHighway />
                </Float>
            </MotionGroup>

            {/* emoji two model */}
            <MotionGroup
                visible={visible.emojiTwo}
                castShadow
                scale={emojiTwoMotion().scale}
                position={[emojiTwoMotion().x, emojiTwoMotion().y, emojiTwoMotion().z]}
                rotation={[emojiTwoMotion().rotationX, emojiTwoMotion().rotationY, emojiTwoMotion().rotationZ]}
            >
                <Float
                    floatIntensity={0.25}
                    rotationIntensity={1.5}
                >
                    <CachedEmojiTwo />
                </Float>
            </MotionGroup>

            {/* dollar sign model */}
            <MotionGroup
                visible={visible.dollar}
                castShadow
                scale={dollarSignMotion().scale}
                position={[dollarSignMotion().x, dollarSignMotion().y, dollarSignMotion().z]}
                rotation={[dollarSignMotion().rotationX, dollarSignMotion().rotationY, dollarSignMotion().rotationZ]}
            >
                <Float
                    floatIntensity={0.25}
                    rotationIntensity={1.5}
                >
                    <CachedDollarSign />
                </Float>
            </MotionGroup>

            {/* pad lock model */}
            <MotionGroup
                visible={visible.lock}
                castShadow
                scale={combinationLockMotion().scale}
                position={[combinationLockMotion().x, combinationLockMotion().y, combinationLockMotion().z]}
                rotation={[combinationLockMotion().rotationX, combinationLockMotion().rotationY, combinationLockMotion().rotationZ]}
            >
                <CachedCombinationLock />
            </MotionGroup>

            {/* atom model */}
            <MotionGroup
                visible={visible.atom}
                castShadow
                scale={atomMotion().scale}
                position={[atomMotion().x, atomMotion().y, atomMotion().z]}
                rotation={[atomMotion().rotationX, atomMotion().rotationY, atomMotion().rotationZ]}
            >
                <CachedAtom />
            </MotionGroup>
        </group>
    )
}

export default ProgrammerPageExperience