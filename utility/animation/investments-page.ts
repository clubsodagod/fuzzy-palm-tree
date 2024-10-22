// useMotionLogic.ts
import { useTransform, MotionValue } from 'framer-motion';
import { useResponsiveValues as rV } from '@/utility/functions';
import { Animate } from '@/utility/functions';

export const useMotionLogic = (scrollY: MotionValue, eventPoints: number[]) => {


    const earth_scale = [0.02,0.01, 0, 0,0,];
    const earth_x = [rV([-10,-15,-15]),15,155, 0,0,];
    const earth_y = [rV([-3,0,0]),-15,-60, -120,0,];
    const earth_z = [0, -25, -30, 0, 0,];
    const earth_rotation_x = [0, 0, 0, 0, 0,];
    const earth_rotation_y = [0, 0, 0, 0, 0,];
    const earth_rotation_z = [0, 0, 0, 0, 0,];

    const chess_scale = [0,0, 0.0725, 0.045,0];
    const chess_x = [0,-45,rV([0,15,15]), 160,190];
    const chess_y = [0, 0, 0, rV([0,0,5]), 0];
    const chess_z = [0, 5, 10, 0, -30];
    const chess_rotation_x = [0, 0, 0.5, 3.5, 0];
    const chess_rotation_y = [0, 0, 0.5, 3.5, 0];
    const chess_rotation_z = [0, 0, 0.5, 3.5, 0];

    const apt_scale = [0,0,0,0, 0.85];
    const apt_x = [0,0,0,-45, rV([-20,-15,-15])];
    const apt_y = [0, 0, 0, 0, rV([-5,0,0])];
    const apt_z = [0, 0, 0, 0, 0,];
    const apt_rotation_x = [0, 0, 0, 0, 1];
    const apt_rotation_y = [0, 0, 0, 0, 0];
    const apt_rotation_z = [0, 0, 0, 0, 0];

    // Functions to handle animations    
    const earthMotion = () => Animate(useTransform, scrollY, earth_scale, earth_x, earth_y, earth_z, earth_rotation_x, earth_rotation_y, earth_rotation_z, eventPoints);
    const aptMotion = () => Animate(useTransform, scrollY, apt_scale, apt_x, apt_y, apt_z, apt_rotation_x, apt_rotation_y, apt_rotation_z, eventPoints);
    const chessMotion = () => Animate(useTransform, scrollY, chess_scale, chess_x, chess_y, chess_z, chess_rotation_x, chess_rotation_y, chess_rotation_z, eventPoints);
    
    // Return the motions
    return {
        aptMotion,
        earthMotion,
        chessMotion,
    };
}
