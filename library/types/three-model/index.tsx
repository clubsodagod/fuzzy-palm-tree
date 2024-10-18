import { BolsaDeDinero, CoinGrowthModel, MacbookModel } from "@/public/3d-objects";
import { MotionProps } from "framer-motion";
import { motion } from "framer-motion-3d";
import React from "react";

export type Model3D = 'BolsaDeDinero' | 'MacbookModel' | 'CoinGrowthModel';


export class MotionModel implements MotionObject {
    x: number;
    y: number;
    z: number;
    scale: number;
    model: Model3D;

    constructor(model: Model3D) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.scale = 1;
        this.model = model;
    }

    updateScroll(scrollValue: number): void {
        // Calculate new position and scale based on scrollValue
        this.x = scrollValue * 2;
        this.y = scrollValue * -1.5;
        this.scale = 1 + scrollValue * 0.1;
    }

    render(): JSX.Element {

        const MemoizedBolsaDeDinero = React.memo(BolsaDeDinero);
        const MemoizedMacbookModel = React.memo(MacbookModel);
        const MemoizedCoinGrowthModel = React.memo(CoinGrowthModel);

        return (
            <motion.group
                castShadow
                position={[this.x, this.y, this.z]}
                scale={this.scale}
            >
                {/* Render 3D model based on the `model` property */}
                {this.model === 'BolsaDeDinero' && <MemoizedBolsaDeDinero />}
                {this.model === 'MacbookModel' && <MemoizedMacbookModel />}
                {this.model === 'CoinGrowthModel' && <MemoizedCoinGrowthModel />}
            </motion.group>
        );
    }
}
