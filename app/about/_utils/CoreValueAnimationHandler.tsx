'use client'
import React, { useEffect } from 'react'
import { VariantThreeType, VisibilityThreeType } from '@/app/_library/types/common';

interface AnimationHandlerProps {
    visible: VisibilityThreeType;
    setVisible: React.Dispatch<React.SetStateAction<VisibilityThreeType>>;
    setVariantStatus: React.Dispatch<React.SetStateAction<VariantThreeType>>;
    setPreviousValue: React.Dispatch<number>;
    value: number;
    previousValue: number;
}

const CoreValueAnimationHandler = ({
    visible, setVisible,
    setVariantStatus, setPreviousValue, value, previousValue
}: AnimationHandlerProps) => {
    return (
        useEffect(() => {
            const handleIndex = (index: number) => {
                switch (index) {
                    case 0:

                        return "atom";
                    case 1:

                        return "scale";
                    case 2:

                        return "diamonds";
                    case 3:

                        return "book";
                    case 4:

                        return "team";
                    case 5:

                        return "compass";
                    case 6:

                        return "rubiksCube";
                    case 7:

                        return "city";
                    case 8:

                        return "pumpingHeart";
                    case 9:

                        return "tropicalIsland";

                    default:
                        return "atom";
                }

            }
            // create animation motion
            const animationHandler = (v: number, pv: number) => {


                const handleAnimation = () => {

                    // alert(`newValue:${value} , prevValue:${previousValue}`);

                    switch (v) {
                        case 4:

                            setVisible((prev: VisibilityThreeType) => ({
                                ...prev,
                                bee: true,
                                beeBuddy: true,
                                hive: true
                            }))
                            setVariantStatus((prev: VariantThreeType) => ({
                                ...prev,
                                [handleIndex(pv)]: "exit",
                                bee: "enter",
                                beeBuddy: "enter",
                                hive: "enter"
                            }));
                            setTimeout(() => {
                                setVisible((prev) => ({
                                    ...prev,
                                    [handleIndex(pv)]: false,
                                }))
                            }, 1000);
                            break;
                        case 9:

                            setVisible((prev: VisibilityThreeType) => ({
                                ...prev,
                                powerTowerCoreValue: true,
                                tropicalIsland: true
                            }))
                            setVariantStatus((prev: VariantThreeType) => ({
                                ...prev,
                                [handleIndex(pv)]: "exit",
                                powerTowerCoreValue: "enter",
                                tropicalIsland: "enter",
                            }));
                            setTimeout(() => {
                                setVisible((prev) => ({
                                    ...prev,
                                    [handleIndex(pv)]: false,
                                }))
                            }, 1000);
                            break;
                        default:

                            switch (pv) {
                                case 4:
                                    setVariantStatus((prev: VariantThreeType) => ({
                                        ...prev,
                                        [handleIndex(v)]: "enter",
                                        bee: "exit",
                                        beeBuddy: "exit",
                                        hive: "exit"
                                    }));
                                    setTimeout(() => {
                                        setVisible((prev) => ({
                                            ...prev,
                                            bee: false,
                                            beeBuddy: false,
                                            hive: false
                                        }));
                                    }, 1000);
                                    break;

                                case 9:
                                    setVariantStatus((prev: VariantThreeType) => ({
                                        ...prev,
                                        [handleIndex(v)]: "enter",
                                        powerTowerCoreValue: "exit",
                                        tropicalIsland: "exit",
                                    }));
                                    setTimeout(() => {
                                        setVisible((prev) => ({
                                            ...prev,
                                            powerTowerCoreValue: false,
                                            tropicalIsland: false,
                                        }));
                                    }, 1000);
                                    break;

                                default:
                                    setVariantStatus((prev: VariantThreeType) => ({
                                        ...prev,
                                        [handleIndex(pv)]: "exit",
                                        [handleIndex(v)]: "enter",
                                    }));
                                    setTimeout(() => {
                                        setVisible((prev) => ({
                                            ...prev,
                                            [handleIndex(pv)]: false,
                                        }));
                                    }, 1000);

                                    break;
                            }

                            break;

                    }
                };


                setVisible((prev) => ({
                    ...prev,
                    [handleIndex(v)]: true,
                }))

                handleAnimation();
                setPreviousValue(value);
            };

            // core value index change
            if (value != previousValue) {
                animationHandler(value, previousValue);
            }

            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [previousValue, value])
    )
}

export default CoreValueAnimationHandler