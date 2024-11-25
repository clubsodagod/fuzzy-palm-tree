// useMotionLogic.ts
import { useTransform, MotionValue } from 'framer-motion';
import { useResponsiveValues as rv } from '@/app/_utility/scroll/scroll-animation-helpers';
import { Animate } from '@/app/_utility/scroll/scroll-animation-helpers';

export const programmerDigitalSolutionsMotion = (scrollY: MotionValue, homeEventPoints: number[]) => {


    const ideaLamp_scale = [
        0,0.01,12,0.6,7,
        0,7,0,7,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const ideaLamp_x = [
        0,0,0,0,-20,
        0,-24,0,-18,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const ideaLamp_y = [
        0,0,-25,0,-20,
        0,-25,0,-30,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const ideaLamp_z = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const ideaLamp_rotation_x = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const ideaLamp_rotation_y = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const ideaLamp_rotation_z = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];

    const matrix_scale = [
        rv([12,6,6]),0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const matrix_x = [
        rv([2,1,1]),0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const matrix_y = [
        rv([-15,-1.5,-1.5]),0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const matrix_z = [
        45,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const matrix_rotation_x = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const matrix_rotation_y = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const matrix_rotation_z = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];

    const chip_scale = [
        0.01,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,24,0.2,17,0.2,
        13,0.2,19,2,0,
    ];
    const chip_x = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,rv([0,0,24]),72,rv([0,0,21]),72,
        rv([0,0,19]),72,rv([0,0,20]),72,0,
    ];
    const chip_y = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const chip_z = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const chip_rotation_x = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const chip_rotation_y = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,1,2,3,4,
        5,6,7,8,0,
    ];
    const chip_rotation_z = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];


    const ghostInShell_scale = [
        0.01,0,0,0,0,
        0,0,0,0,0.01,
        30,15,30,10,25,
        12.5,25,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const ghostInShell_x = [
        0,0,0,0,0,
        0,0,0,0,75,
        0,5,rv([0,0,25]),-75,rv([0,0,25]),
        75,rv([0,0,25]),0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const ghostInShell_y = [
        0,0,0,0,0,
        0,0,0,0,0,
        rv([0,0,-10]),0,-15,0,-10,
        0,-10,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const ghostInShell_z = [
        0,0,0,0,0,
        0,0,0,0,0,
        -15,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const ghostInShell_rotation_x = [
        0,0,0,0,0,
        0,0,0,0,0,
        3.7,0,4,0,11,
        0,-13,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const ghostInShell_rotation_y = [
        0,0,0,0,0,
        0,0,0,0,0,
        0.61,1,1,0,-0.25,
        0,8.5,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const ghostInShell_rotation_z = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];



    const motor_scale = [
        0,0,0.45,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const motor_x = [
        0,0,-15,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const motor_y = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const motor_z = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const motor_rotation_x = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const motor_rotation_y = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const motor_rotation_z = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];

    const webMobile_scale = [
        0.01,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,1,1,
        0.5,1,0.5,1,0.6,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const webMobile_x = [
        0,0,-15,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,25,-100,
        0,-150,0,-150,-25,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const webMobile_y = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,-10,0,-10,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const webMobile_z = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const webMobile_rotation_x = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const webMobile_rotation_y = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const webMobile_rotation_z = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];


    const iPhone_scale = [
        0.02,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,15,0,
        15,0,15,0,15,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const iPhone_x = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,45,0,
        0,-90,-22.5,0,-45,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const iPhone_y = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        35,0,-15,0,65,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const iPhone_z = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const iPhone_rotation_x = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const iPhone_rotation_y = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const iPhone_rotation_z = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];

    const iPad_scale = [
        0.01,0,0.45,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0.5,0,
        0.45,0,0.45,0,0.45,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const iPad_x = [
        0,0,-15,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,-65,0,
        -85,0,-42.5,0,42.5,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const iPad_y = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,-20,0,
        10,0,15,0,15,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const iPad_z = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const iPad_rotation_x = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const iPad_rotation_y = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const iPad_rotation_z = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];


    const macbook_scale = [
        0.01,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,250,0,
        200,0,200,0,200,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const macbook_x = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        -50,0,25,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const macbook_y = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,-20,0,
        -35,0,20,0,-30,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const macbook_z = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const macbook_rotation_x = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const macbook_rotation_y = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];
    const macbook_rotation_z = [
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
    ];






    // Functions to handle animations    
    const ideaLampMotion = () => Animate(useTransform, scrollY, ideaLamp_scale, ideaLamp_x, ideaLamp_y, ideaLamp_z, ideaLamp_rotation_x,ideaLamp_rotation_y,ideaLamp_rotation_z, homeEventPoints);
     
    const matrixMotion = () => Animate(useTransform, scrollY, matrix_scale, matrix_x, matrix_y, matrix_z, matrix_rotation_x,matrix_rotation_y,matrix_rotation_z, homeEventPoints);
    
    const chipMotion = () => Animate(useTransform, scrollY, chip_scale, chip_x, chip_y, chip_z, chip_rotation_x,chip_rotation_y,chip_rotation_z, homeEventPoints);
    
    const ghostInShellMotion = () => Animate(useTransform, scrollY, ghostInShell_scale, ghostInShell_x, ghostInShell_y, ghostInShell_z, ghostInShell_rotation_x,ghostInShell_rotation_y,ghostInShell_rotation_z, homeEventPoints);
    
    const motorMotion = () => Animate(useTransform, scrollY, motor_scale, motor_x, motor_y, motor_z, motor_rotation_x,motor_rotation_y,motor_rotation_z, homeEventPoints);
    
    const webMobileMotion = () => Animate(useTransform, scrollY, webMobile_scale, webMobile_x, webMobile_y, webMobile_z, webMobile_rotation_x,webMobile_rotation_y,webMobile_rotation_z, homeEventPoints);
    
    const iPhoneMotion = () => Animate(useTransform, scrollY, iPhone_scale, iPhone_x, iPhone_y, iPhone_z, iPhone_rotation_x,iPhone_rotation_y,iPhone_rotation_z, homeEventPoints);
    
    const iPadMotion = () => Animate(useTransform, scrollY, iPad_scale, iPad_x, iPad_y, iPad_z, iPad_rotation_x,iPad_rotation_y,iPad_rotation_z, homeEventPoints);
    
    const macbookMotion = () => Animate(useTransform, scrollY, macbook_scale, macbook_x, macbook_y, macbook_z, macbook_rotation_x,macbook_rotation_y,macbook_rotation_z, homeEventPoints);
    
    
    // Return the motions
    return {
        ideaLampMotion,
     
        matrixMotion,
     
        chipMotion,
     
        ghostInShellMotion,
     
        motorMotion,
     
        webMobileMotion,
     
        iPhoneMotion,
     
        iPadMotion,
     
        macbookMotion,
     
    };
}
