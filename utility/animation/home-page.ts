// useMotionLogic.ts
import { useTransform, MotionValue } from 'framer-motion';
import { useResponsiveValues as useRVs } from '@/utility/functions';
import { Animate } from '@/utility/functions';

export const useMotionLogic = (scrollY: MotionValue, homeEventPoints: number[]) => {


    let main_scale = [useRVs([5,5,15]), 7, -15, 0, 0, 0, 0, 0, 0];
    let main_x = [useRVs([5,5,15]), 7, -15, 0, 0, 0, 0, 0, 0];
    let main_y = [useRVs([-6,-3,7]), 0, 7, 15, 3, 0, 0, 0, 0];
    let main_z = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let main_rotation_x =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];
    let main_rotation_y =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];
    let main_rotation_z =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];

    // Define your animation arrays here
    const developer_scale = [useRVs([36, 48, 36]), useRVs([72, 96, 48]), useRVs([72, 96, 48]), 96, 0, 0, 0, 0, 0];
    const developer_x = [0, 0, 7, 0, 3, 0, 0, 0, 0];
    const developer_y = [0, 0, useRVs([-5, -5, -5]), useRVs([-35, -30, -30]), 0, 0, 0, 0, 0];
    const developer_z = [1, 0, 0, 0, 0, 0, 0, 0, 0];
    let developer_rotation_x =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];
    let developer_rotation_y =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];
    let developer_rotation_z =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];

    let atom_scale = [24,48, 72, 96, 1, 1, 1, 1, 1];
    let atom_x = [0, 0, 7, 0, 3, 0, 0, 0, 0];
    let atom_y = [0, 0, -7, -35, 3, 0, 0, 0, 0];
    let atom_z = [1, 0, 0, 0, 0, 0, 0, 0, 0];
    let atom_rotation_x =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];
    let atom_rotation_y =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];
    let atom_rotation_z =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];

    let bolsa_scale = [3,0, 0, 0, 2, 2.75, 3.5, 0, 0];
    let bolsa_x = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let bolsa_y = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let bolsa_z = [-10, 0, 0, 0, 0, 0, 75, 5, 0];
    let bolsa_rotation_x =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];
    let bolsa_rotation_y =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];
    let bolsa_rotation_z =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];

    let invest_scale = [0.625,0, 0,0,0.5, 0.25,useRVs([0.7,1,2]),0, 0];
    let invest_x = [useRVs([5,0,20]), 0, 0, 0, 0, -1.5, useRVs([0,0,45]), 0, 0];
    let invest_y = [0, 0, 0, 0, -5, -15, -15, 0, 0];
    let invest_z = [10, 0, 0, 0, 0, 0, 0, 0, 0];
    let invest_rotation_x =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];
    let invest_rotation_y =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];
    let invest_rotation_z =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];

    let daily_scale = [24,48, 72, 96, 1, 1, 1, 1, 1];
    let daily_x = [0, 0, 7, 0, 3, 0, 0, 0, 0];
    let daily_y = [0, 0, -7, -35, 3, 0, 0, 0, 0];
    let daily_z = [1, 0, 0, 0, 0, 0, 0, 0, 0];
    let daily_rotation_x =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];
    let daily_rotation_y =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];
    let daily_rotation_z =  [0, 0, 0, 0, 0, 0, 0, 0, 0,];

    // Functions to handle animations    
    const mainMotion = () => Animate(useTransform, scrollY, main_scale, main_x, main_y, main_z, main_rotation_x,main_rotation_y,main_rotation_z, homeEventPoints);
    const programmerMotion = () => Animate(useTransform, scrollY, developer_scale, developer_x, developer_y, developer_z, developer_rotation_x,developer_rotation_y,developer_rotation_z, homeEventPoints);
    const atomMotion = () => Animate(useTransform, scrollY, atom_scale, atom_x, atom_y, atom_z, atom_rotation_x,atom_rotation_y,atom_rotation_z, homeEventPoints);
    const bolsaMotion = () => Animate(useTransform, scrollY, bolsa_scale, bolsa_x, bolsa_y, bolsa_z, bolsa_rotation_x,bolsa_rotation_y,bolsa_rotation_z, homeEventPoints);
    const investMotion = () => Animate(useTransform, scrollY, invest_scale, invest_x, invest_y,invest_z, invest_rotation_x,invest_rotation_y,invest_rotation_z, homeEventPoints);
    const dailyMotion = () => Animate(useTransform, scrollY, daily_scale, daily_x, daily_y, daily_z, daily_rotation_x,daily_rotation_y,daily_rotation_z, homeEventPoints);

    // Return the motions
    return {
        programmerMotion,
        mainMotion,
        atomMotion,
        bolsaMotion,
        investMotion,
        dailyMotion
    };
}
