// useMotionLogic.ts
import { useTransform, MotionValue } from 'framer-motion';
import { useResponsiveValues as useRVs } from '@/app/_utility/scroll/scroll-animation-helpers';
import { Animate } from '@/app/_utility/scroll/scroll-animation-helpers';

export const useHomePageMotion = (scrollY: MotionValue, homeEventPoints: number[]) => {


    const main_scale = [1,1,1,1,1,];
    const main_x = [0,0,0,0,0,];
    const main_y = [0,0,0,0,0,];
    const main_z = [0,0,0,0,0,];
    const main_rotation_x = [0,0,0,0,0,];
    const main_rotation_y = [0,0,0,0,0,];
    const main_rotation_z = [0,0,0,0,0,];

    // Define your animation arrays here
    const developer_scale = [72,120,170,140,0,];
    const developer_x = [0,-120,0,120,0,];
    const developer_y = [useRVs([-5,-5,10]),0,useRVs([-15,-15,-10]),72,0,];
    const developer_z = [0,-150,0,0,0,];
    const developer_rotation_x = [0,0,0.75,0,0,];
    const developer_rotation_y = [0,0,0,0,0,];
    const developer_rotation_z = [0,0,0,0,0,];





    // Functions to handle animations    
    const mainMotion = () => Animate(useTransform, scrollY, main_scale, main_x, main_y, main_z, main_rotation_x,main_rotation_y,main_rotation_z, homeEventPoints);
    const programmerMotion = () => Animate(useTransform, scrollY, developer_scale, developer_x, developer_y, developer_z, developer_rotation_x,developer_rotation_y,developer_rotation_z, homeEventPoints);
   
    // Return the motions
    return {
        programmerMotion,
        mainMotion,
     
    };
}
