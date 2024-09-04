// useMotionLogic.ts
import { useTransform, MotionValue } from 'framer-motion';
import { useResponsiveValues as useRVs } from '@/utility/functions';
import { Animate } from '@/utility/functions';

export const useMotionLogic = (scrollY: MotionValue, eventPoints: number[]) => {


    const earth_scale = [0.0125,0.0005, 0, 0,0,0];
    const earth_x = [0,-15,-55, 0,0,0];
    const earth_y = [0,-15,-20, 12,0,0];
    const earth_z = [0, -25, -30, 0, 0,0];
    const earth_rotation_y = [0, 0, 0, 0, 0,0];

    const apt_scale = [0,0,0,0, 0.5,useRVs([0.5, 0.75, 0.75])];
    const apt_x = [0,-15,0,0, 0, useRVs([0,0,-15])];
    const apt_y = [0, 0, 0, 0, 0,useRVs([-5,0,0])];
    const apt_z = [0, 0, 0, 0, 0,0];
    const apt_rotation_y = [0, 0, 0, 0, 0,useRVs([0.75, 0.5, 1])];

    const chess_scale = [0,0, 0.0725, 0.045,0,0];
    const chess_x = [0,-15,-20, useRVs([20,0,40]),0,0];
    const chess_y = [0, 0, 0, useRVs([0,0,5]), 0,0];
    const chess_z = [0, 5, 10, 0, -30,0];
    const chess_rotation_y = [0, 0, 0.5, 1.5, 0,0];

    // Functions to handle animations    
    const earthMotion = () => Animate(useTransform, scrollY, earth_scale, earth_x, earth_y, earth_z, earth_rotation_y, eventPoints);
    const aptMotion = () => Animate(useTransform, scrollY, apt_scale, apt_x, apt_y, apt_z, apt_rotation_y, eventPoints);
    const chessMotion = () => Animate(useTransform, scrollY, chess_scale, chess_x, chess_y, chess_z, chess_rotation_y, eventPoints);
    
    // Return the motions
    return {
        aptMotion,
        earthMotion,
        chessMotion,
    };
}
