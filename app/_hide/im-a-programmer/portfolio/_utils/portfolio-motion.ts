// useMotionLogic.ts
import { useTransform, MotionValue } from 'framer-motion';
import { useResponsiveValues as rv } from '@/utility/functions';
import { Animate } from '@/utility/functions';

export const usePortfolioMotionLogic = (scrollY: MotionValue, homeEventPoints: number[]) => {


    let macbook_scale = [192, 96, 0,];
    let macbook_x = [10, 35, 95,];
    let macbook_y = [-15, 0, 96,];
    let macbook_z = [0, 0, 0,];
    let macbook_rotation_x = [-0.5, 0, 0,];
    let macbook_rotation_y = [0, 0, 0,];
    let macbook_rotation_z = [0, 0, 0,];


    let desk_scale = [0.001, 0.125, 1,];
    let desk_x = [ -125, -10, 25,];
    let desk_y = [-15, 0, -70,];
    let desk_z = [0, 0, 25,];
    let desk_rotation_x = [-1, 0, 0.5,];
    let desk_rotation_y = [0, 0, 0,];
    let desk_rotation_z = [0, 0, 0,];


    let paper_scale = [0, 0.015, 1.25,];
    let paper_x = [0, 0, rv([0,0,-35])];
    let paper_y = [0, 0, -5,];
    let paper_z = [0, 0, 0,];
    let paper_rotation_x = [0, 0,rv([1.75,1.75,2.5]),];
    let paper_rotation_y = [0, 0, 0,];
    let paper_rotation_z = [0, 0, 1.5,];



    // Functions to handle animations    
    const macbookMotion = () => Animate(useTransform, scrollY, macbook_scale, macbook_x, macbook_y, macbook_z, macbook_rotation_x, macbook_rotation_y, macbook_rotation_z, homeEventPoints);

    const deskMotion = () => Animate(useTransform, scrollY, desk_scale, desk_x, desk_y, desk_z, desk_rotation_x, desk_rotation_y, desk_rotation_z, homeEventPoints);

    const paperMotion = () => Animate(useTransform, scrollY, paper_scale, paper_x, paper_y, paper_z, paper_rotation_x, paper_rotation_y, paper_rotation_z, homeEventPoints);

    // Return the motions
    return {
        macbookMotion,
        deskMotion,
        paperMotion,
    };
}
