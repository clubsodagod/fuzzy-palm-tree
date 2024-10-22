// useMotionLogic.ts
import { useTransform, MotionValue } from 'framer-motion';
import { useResponsiveValues as useRVs } from '@/utility/functions';
import { Animate } from '@/utility/functions';

export const useMotionLogic = (scrollY: MotionValue, homeEventPoints: number[]) => {


    let main_scale = [1,1,1,1,1,1,1,];
    let main_x = [0,0,0,0,0,0,0,];
    let main_y = [0,0,0,0,0,0,0,];
    let main_z = [0,0,0,0,0,0,0,];
    let main_rotation_x = [0,0,0,0,0,0,0,];
    let main_rotation_y = [0,0,0,0,0,0,0,];
    let main_rotation_z = [0,0,0,0,0,0,0,];

    // Define your animation arrays here
    const developer_scale = [72,120,170,140,0,0,0,];
    const developer_x = [0,-120,0,120,0,0,0,];
    const developer_y = [useRVs([-5,-5,10]),0,useRVs([-15,-15,-10]),72,0,0,0,];
    const developer_z = [0,-150,0,0,0,0,0,];
    let developer_rotation_x = [0,0,0.75,0,0,0,0,];
    let developer_rotation_y = [0,0,0,0,0,0,0,];
    let developer_rotation_z = [0,0,0,0,0,0,0,];

    let atom_scale = [0,0,0,0,0,0,0,];
    let atom_x = [0,0,0,0,0,0,0,];
    let atom_y = [0,0,0,0,0,0,0,];
    let atom_z = [0,0,0,0,0,0,0,];
    let atom_rotation_x = [0,0,0,0,0,0,0,];
    let atom_rotation_y = [0,0,0,0,0,0,0,];
    let atom_rotation_z = [0,0,0,0,0,0,0,];

    let bolsa_scale = [0,0,0,3,5,1,0,];
    let bolsa_x = [0,0,0,useRVs([-35,-45,-150]),useRVs([7,12,-35]),useRVs([95,95,95]),0,];
    let bolsa_y = [0,0,0,0,useRVs([10,10,-15]),0,0,];
    let bolsa_z = [0,0,0,0,0,0,0,];
    let bolsa_rotation_x  = [0,0,0,0,0,0,0,];
    let bolsa_rotation_y = [0,0,0,0,0,0,0,];
    let bolsa_rotation_z = [0,0,0,0,0,0,0,];

    let invest_scale = [0,0,0,0.3,0.625,0.1,0,];
    let invest_x = [0,0,useRVs([50,50,150]),useRVs([25,25,75]),useRVs([0,0,20]),useRVs([-75,-75,-75]),0,];
    let invest_y = [0,0,0,0,-25,0,0,];
    let invest_z = [0,0,0,0,30,0,0,];
    let invest_rotation_x = [0,0,0,0,1,0,0,];
    let invest_rotation_y = [0,0,0,0,1,0,0,];
    let invest_rotation_z = [0,0,0,0,1,0,0,];

    let daily_scale = [0,0,0,0,0,0,0,];
    let daily_x = [0,0,0,0,0,0,0,];
    let daily_y = [0,0,0,0,0,0,0,];
    let daily_z = [0,0,0,0,0,0,0,];
    let daily_rotation_x = [0,0,0,0,0,0,0,];
    let daily_rotation_y = [0,0,0,0,0,0,0,];
    let daily_rotation_z = [0,0,0,0,0,0,0,];

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
