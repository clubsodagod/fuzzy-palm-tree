// useMotionLogic.ts
import { useTransform, MotionValue } from 'framer-motion';
import { useResponsiveValues as rv } from '@/utility/functions';
import { Animate } from '@/utility/functions';

export const useAboutMotionLogic = (scrollY: MotionValue, homeEventPoints: number[]) => {


    let moon_scale = [0.01,7,38,0,0,];
    let moon_x = [95,0,0,0,0,];
    let moon_y = [0,0,0,0,0,];
    let moon_z = [0,0,0,0,0,];
    let moon_rotation_x = [0,0,0,0,0,];
    let moon_rotation_y = [0,0,0,0,0,];
    let moon_rotation_z = [0,0,0,0,0,];



    // Define your animation arrays here
    const powerTower_scale = [0,0.1,0.4,0,0,];
    const powerTower_x = [0,0,0,0,0,];
    const powerTower_y = [62,32,40,25,25,];
    const powerTower_z = [0,0,5,5,5,];
    let powerTower_rotation_x = [0,0,3,0,0,];
    let powerTower_rotation_y = [0,0,0.25,0,0,];
    let powerTower_rotation_z = [0,0,0.15,0,0,];

    // Define your animation arrays here
    const main_scale = [1,1,1,1,0,];
    const main_x = [0,-75,rv([0,0,35]),70,rv([0,0,140]),];
    const main_y = [0,0,-45,0,0,];
    const main_z = [0,0,0,0,0,];
    let main_rotation_x = [0,0,0,0,0,];
    let main_rotation_y = [0,0,0,0,0,];
    let main_rotation_z = [0,0,0,0,0,];

    // Define your animation arrays here
    const mainCoreValue_scale = [0,0,0,0,33,];
    const mainCoreValue_x = [0,0,0,0,0,];
    const mainCoreValue_y = [0,0,0,0,-45,];
    const mainCoreValue_z = [0,0,0,0,0,];
    let mainCoreValue_rotation_x = [0,0,0,0,0,];
    let mainCoreValue_rotation_y = [0,0,0,0,0,];
    let mainCoreValue_rotation_z = [0,0,0,0,0,];

    // Define your animation arrays here
    const coreValue_scale = [0,0,0,0.01,1,];
    const coreValue_x = [0,0,0,0,0,];
    const coreValue_y = [0,0,0,0,0,];
    const coreValue_z = [0,0,0,0,0,];
    let coreValue_rotation_x = [0,0,0,0,0,];
    let coreValue_rotation_y = [0,0,0,0,0,];
    let coreValue_rotation_z = [0,0,0,0,0,];

    // Define your animation arrays here
    const column_scale = [0,0,0,1,1,];
    const column_x = [0,0,60,60,rv([0,0,30]),];
    const column_y = [0,0,0,0,-40,];
    const column_z = [0,0,0,0,0,];
    let column_rotation_x = [0,0,0,0,0,];
    let column_rotation_y = [0,0,0,0,0,];
    let column_rotation_z = [0,0,0,0,0,];


    // Functions to handle animations    
    const moonMotion = () => Animate(useTransform, scrollY, moon_scale, moon_x, moon_y, moon_z, moon_rotation_x,moon_rotation_y,moon_rotation_z, homeEventPoints);
    const mainMotion = () => Animate(useTransform, scrollY, main_scale, main_x, main_y, main_z, main_rotation_x,main_rotation_y,main_rotation_z, homeEventPoints);
    const powerTowerMotion = () => Animate(useTransform, scrollY, powerTower_scale, powerTower_x, powerTower_y, powerTower_z, powerTower_rotation_x,powerTower_rotation_y,powerTower_rotation_z, homeEventPoints);
    const mainCoreValueMotion = () => Animate(useTransform, scrollY, mainCoreValue_scale, mainCoreValue_x, mainCoreValue_y, mainCoreValue_z, mainCoreValue_rotation_x,mainCoreValue_rotation_y,mainCoreValue_rotation_z, homeEventPoints);
    const coreValueMotion = () => Animate(useTransform, scrollY, coreValue_scale, coreValue_x, coreValue_y, coreValue_z, coreValue_rotation_x,coreValue_rotation_y,coreValue_rotation_z, homeEventPoints);
    const columnMotion = () => Animate(useTransform, scrollY, column_scale, column_x, column_y, column_z, column_rotation_x,column_rotation_y,column_rotation_z, homeEventPoints);
    
    // Return the motions
    return {
        mainMotion,
        powerTowerMotion,
        moonMotion,
        mainCoreValueMotion,
        coreValueMotion,
        columnMotion,
    };
}
