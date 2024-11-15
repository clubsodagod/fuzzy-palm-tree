// useMotionLogic.ts
import { useTransform, MotionValue } from 'framer-motion';
import { useResponsiveValues as rV } from '@/utility/functions';
import { Animate } from '@/utility/functions';

export const programmerPageMotionLogic = (scrollY: MotionValue, homeEventPoints: number[]) => {



    let lightBulb_scale = [
        7, 9, 10, 5, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 9,
        10, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let lightBulb_x = [
        rV([5, 5, -20]), rV([-25, -25, 20]), rV([0, -5, -20]), 40, 120,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 75, 25,
        0, -95, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];

    let lightBulb_y = [
        rV([-6, 3, 7]), rV([11, -16, 3]), 0, rV([15, 0, 0]), rV([3, 0, 0]),
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, -9, -7,
        -3, -15, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let lightBulb_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let lightBulb_rotation_x = [
        rV([5, 0, 0]), rV([6, 0, 6]), rV([2, 0, 0]), rV([3, 0, 0]), rV([4, 0, 0]),
        rV([3, 0, 0]), rV([2, 0, 0]), rV([1, 0, 0]), 0, rV([1, 0, 0]),
        rV([2, 0, 0]), rV([3, 0, 0]), rV([4, 0, 0]), rV([3, 0, 0]), rV([4, 0, 0]),
        rV([3, 0, 0]), rV([2, 0, 0]), rV([1, 0, 0]), 0, rV([1, 0, 0]),
        rV([5, 0, 0]), rV([6, 0, 6]), rV([2, 0, 0]), rV([3, 0, 0]), rV([4, 0, 0]),
        rV([3, 0, 0]), rV([2, 0, 0]), rV([1, 0, 0]), 0, rV([1, 0, 0]),
        rV([2, 0, 0]), rV([3, 0, 0]), rV([4, 0, 0]), rV([3, 0, 0]), rV([4, 0, 0]),
        rV([3, 0, 0]), rV([2, 0, 0]), rV([1, 0, 0]), 0, rV([1, 0, 0]),
        0,
    ];
    let lightBulb_rotation_y = [
        1, rV([4, 4, 0]), 2, 3, 4,
        3, rV([2, 0, 0]), rV([1, 0, 0]), 0, rV([1, 0, 0]),
        rV([2, 0, 0]), 3, rV([4, 0, 0]), rV([3, 0, 0]), rV([4, 0, 0]),
        3, rV([2, 0, 0]), rV([1, 0, 0]), 0, rV([1, 0, 0]),
        1, rV([4, 4, 0]), 2, 3, 4,
        3, rV([2, 0, 0]), rV([1, 0, 0]), 0, rV([1, 0, 0]),
        rV([2, 0, 0]), 3, rV([4, 0, 0]), rV([3, 0, 0]), rV([4, 0, 0]),
        3, rV([2, 0, 0]), rV([1, 0, 0]), 0, rV([1, 0, 0]),
        0,
    ];
    let lightBulb_rotation_z = [
        rV([2, 2, 0]), rV([8, 8, 0.5]), rV([2, 0, 0]), rV([3, 0, 0]), rV([4, 0, 0]),
        rV([3, 0, 0]), rV([2, 0, 0]), rV([1, 0, 0]), 0, rV([1, 0, 0]),
        rV([2, 0, 0]), rV([3, 0, 0]), rV([4, 0, 0]), rV([3, 0, 0]), rV([4, 0, 0]),
        rV([3, 0, 0]), rV([2, 0, 0]), rV([1, 0, 0]), 0, rV([1, 0, 0]),
        rV([2, 2, 0]), rV([8, 8, 0.5]), rV([2, 0, 0]), rV([3, 0, 0]), rV([4, 0, 0]),
        rV([3, 0, 0]), rV([2, 0, 0]), rV([1, 0, 0]), 0, rV([1, 0, 0]),
        rV([2, 0, 0]), rV([3, 0, 0]), rV([4, 0, 0]), rV([3, 0, 0]), rV([4, 0, 0]),
        rV([3, 0, 0]), rV([2, 0, 0]), rV([1, 0, 0]), 0, rV([1, 0, 0]),
        0,
    ];




    let robot_scale = [
        0, 0, 0, 7, 21,
        14, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let robot_x = [
        0, 0, rV([5, 0, 100]), rV([5, 5, 40]), rV([10, -5, -20])
        , -35, -145, 0, 0, 0
        , 0, 0, 0, 0, 0
        , 0, 0, 0, 0, 0,
        rV([5, 0, 20]), rV([5, 5, 40]), rV([10, -5, -20]), 0, 0
        , 0, 0, 0, 0, 0
        , 0, 0, 0, 0, 0
        , 0, 0, 0, 0, 0,
        0,
    ];

    let robot_y = [
        0, 0, rV([-6, -3, 10]), rV([-6, -3, -10]), -14,
        -18, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        rV([-6, -3, 10]), rV([16, -14, -14]), rV([-18, -18, -18]), 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let robot_z = [
        0, 0, 2, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 2, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let robot_rotation_x = [
        0, 0, rV([0.25, 0, 0]), 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, rV([0.25, 0, 0]), 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let robot_rotation_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let robot_rotation_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];




    let posMachine_scale = [
        0, 0, 0, 0, 0,
        0.1, 24, 7, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let posMachine_x = [
        0, 0, 0, 0, 0,
        -60, 0, 40, 90, 90,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let posMachine_y = [
        0, 0, rV([-50, 0, 0]), rV([17.5, 17.5, 12]), rV([0, 10, 10]),
        0, rV([24, 14, 12]), 14, -54, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, rV([-50, 0, 0]), rV([17.5, 17.5, 12]), rV([0, 10, 10]),
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let posMachine_z = [
        0, 0, 0, 0, 0,
        0, 2, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let posMachine_rotation_x = [
        0, 0, 0, 0, 0,
        0, 6.5, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let posMachine_rotation_y = [
        0, 0, 0, 1, 0,
        0, 1, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 1, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let posMachine_rotation_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];

    let iPhone_scale = [
        0, 0, 0, 0, 0,
        3, 9, 10, 12, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let iPhone_x = [
        0, 0, 0, 0, 200,
        100, 0, -90, 0, 125,
        175, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let iPhone_y = [
        0, 0, 0, 0, 0,
        0, 0, -50, 25, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let iPhone_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let iPhone_rotation_x = [
        0, 0, 0, 0, 0,
        6.5, 6.5, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let iPhone_rotation_y = [
        1, 0, 0, 1, 2,
        2, 1, 0, 2, 1,
        3, 9, 0, 0, 0,
        0, 0, 0, 0, 0,
        1, 0, 0, 1, 2,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let iPhone_rotation_z = [
        4, 0, 0, 0, 6.5,
        12, 12, 0, 12, 12,
        2, 20, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];






    let puzzle_scale = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0.6,
        18, 6, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];

    let puzzle_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, -75,
        0, 75, 150, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];

    let puzzle_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 25,
        0, -10, -30, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];

    let puzzle_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];

    let puzzle_rotation_x = [
        0, 0, 0, 0, 0,
        0, 3, 0, 0, 0,
        3, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 3, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];

    let puzzle_rotation_y = [
        0, 0, 0, 0, 0,
        1, 0, 0, 0, 0,
        1, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];

    let puzzle_rotation_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];





    let emoji_scale = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 48, 12, 48,
        0, 0, 12, 48, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let emoji_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, -75, -5, 50, 0,
        25, 550, 0, 0, -50,
        -75, 0, 0, 0, 45,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let emoji_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        20, -5, -20, 0, -5,
        0, 17, 0, -5, -15,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let emoji_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let emoji_rotation_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, -24, 0, -5, 9,
        -18, -4, 0, 7, 0,
        -7, -14, -1, 0, -3,
        0, -3, -27, -36, -45,
        -54, -63, -18, -36, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let emoji_rotation_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let emoji_rotation_z = [
        0, 3, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, -0.5, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];



    let swiss_scale = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        20, 1000, 20, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let swiss_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        -50, 0, 50, 0, 0,
        0, 75, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let swiss_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        20, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let swiss_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let swiss_rotation_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 1,
        0, 0, 0, 0, 0,
        -4, 1, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 1,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let swiss_rotation_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        2, 0, 0, 0, 0,
        5, 1, 0, 3, 1,
        0, 0, 0, 0, 0,
        0, 0, 0, -2, 1,
        2, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let swiss_rotation_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 1,
        2, 0, 0, 0, 0,
        2, 1, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 1,
        2, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];



    let macbook_scale = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 120, 196, 120, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let macbook_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, -75, 0, 75, 150,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let macbook_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 50, -15, -45, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let macbook_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let macbook_rotation_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, -0.05, -0.25, -3, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let macbook_rotation_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let macbook_rotation_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 3, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];



    let coinGrowth_scale = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 1, 2,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let coinGrowth_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, -150, 15,
        -50, -150, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let coinGrowth_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, -25,
        0, 0, 0, -25, -25,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let coinGrowth_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let coinGrowth_rotation_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let coinGrowth_rotation_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let coinGrowth_rotation_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];



    let dataHighway_scale = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0.1, 135, 25, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let dataHighway_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, -40, -80, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let dataHighway_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let dataHighway_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let dataHighway_rotation_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let dataHighway_rotation_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let dataHighway_rotation_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, rV([20, 0, 0]),
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, rV([20, 0, 0]),
        0, 0, 0, 0, 0,
        0,
    ];



    let emojiTwo_scale = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 38, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let emojiTwo_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 25,
        25, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 45, 15,
        -75, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let emojiTwo_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, -25, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, rV([12, 12, 0]), rV([-12, -24, 0]), rV([85, -12, -12]), 85,
        95, -25, 0, 0, 0,
        0,
    ];
    let emojiTwo_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let emojiTwo_rotation_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, -9,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let emojiTwo_rotation_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let emojiTwo_rotation_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];



    let dollarSign_scale = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 45,
        6, 6, 45, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let dollarSign_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, -140, -70,
        -35, 0, 5, 45, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let dollarSign_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let dollarSign_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let dollarSign_rotation_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let dollarSign_rotation_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let dollarSign_rotation_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];



    let combinationLock_scale = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0.1, 12,
        0, 0, 0, 0, 0,
        0,
    ];
    let combinationLock_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 150, 75, -24,
        -75, 0, 0, 0, 0,
        0,
    ];
    let combinationLock_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, -10,
        -5, -25, 0, 0, 0,
        0,
    ];
    let combinationLock_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let combinationLock_rotation_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, -1.25,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 5.5, 0, 0, 0,
        rV([0, 0, -1.25]),
    ];
    let combinationLock_rotation_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, rV([9, 0, 0]), 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0.5, 0.75, rV([0.5, 0, 0]), 0,
        0.75,
    ];
    let combinationLock_rotation_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];


    let atom_scale = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0.1,
        2, 24, 2, 0, 0,
        0,
    ];
    let atom_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, -250, -150,
        0, 150, 0, -150, 0,
        0,
    ];
    let atom_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 35, 0,
        75, 0, -75, 0, 0,
        0,
    ];
    let atom_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let atom_rotation_x = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let atom_rotation_y = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];
    let atom_rotation_z = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0,
    ];


    // Functions to handle animations    
    const lightBulbMotion = () => Animate(useTransform, scrollY, lightBulb_scale, lightBulb_x, lightBulb_y, lightBulb_z, lightBulb_rotation_x, lightBulb_rotation_y, lightBulb_rotation_z, homeEventPoints);

    const robotMotion = () => Animate(useTransform, scrollY, robot_scale, robot_x, robot_y, robot_z, robot_rotation_x, robot_rotation_y, robot_rotation_z, homeEventPoints);

    const posMachineMotion = () => Animate(useTransform, scrollY, posMachine_scale, posMachine_x, posMachine_y, posMachine_z, posMachine_rotation_x, posMachine_rotation_y, posMachine_rotation_z, homeEventPoints);

    const iPhoneMotion = () => Animate(useTransform, scrollY, iPhone_scale, iPhone_x, iPhone_y, iPhone_z, iPhone_rotation_x, iPhone_rotation_y, iPhone_rotation_z, homeEventPoints);

    const puzzleMotion = () => Animate(useTransform, scrollY, puzzle_scale, puzzle_x, puzzle_y, puzzle_z, puzzle_rotation_x, puzzle_rotation_y, puzzle_rotation_z, homeEventPoints);

    const emojiMotion = () => Animate(useTransform, scrollY, emoji_scale, emoji_x, emoji_y, emoji_z, emoji_rotation_x, emoji_rotation_y, emoji_rotation_z, homeEventPoints);

    const swissMotion = () => Animate(useTransform, scrollY, swiss_scale, swiss_x, swiss_y, swiss_z, swiss_rotation_x, swiss_rotation_y, swiss_rotation_z, homeEventPoints);

    const macbookMotion = () => Animate(useTransform, scrollY, macbook_scale, macbook_x, macbook_y, macbook_z, macbook_rotation_x, macbook_rotation_y, macbook_rotation_z, homeEventPoints);

    const coinGrowthMotion = () => Animate(useTransform, scrollY, coinGrowth_scale, coinGrowth_x, coinGrowth_y, coinGrowth_z, coinGrowth_rotation_x, coinGrowth_rotation_y, coinGrowth_rotation_z, homeEventPoints);

    const dataHighwayMotion = () => Animate(useTransform, scrollY, dataHighway_scale, dataHighway_x, dataHighway_y, dataHighway_z, dataHighway_rotation_x, dataHighway_rotation_y, dataHighway_rotation_z, homeEventPoints);

    const emojiTwoMotion = () => Animate(useTransform, scrollY, emojiTwo_scale, emojiTwo_x, emojiTwo_y, emojiTwo_z, emojiTwo_rotation_x, emojiTwo_rotation_y, emojiTwo_rotation_z, homeEventPoints);

    const dollarSignMotion = () => Animate(useTransform, scrollY, dollarSign_scale, dollarSign_x, dollarSign_y, dollarSign_z, dollarSign_rotation_x, dollarSign_rotation_y, dollarSign_rotation_z, homeEventPoints);

    const combinationLockMotion = () => Animate(useTransform, scrollY, combinationLock_scale, combinationLock_x, combinationLock_y, combinationLock_z, combinationLock_rotation_x, combinationLock_rotation_y, combinationLock_rotation_z, homeEventPoints);

    const atomMotion = () => Animate(useTransform, scrollY, atom_scale, atom_x, atom_y, atom_z, atom_rotation_x, atom_rotation_y, atom_rotation_z, homeEventPoints);

    // Return the motions
    return {
        lightBulbMotion,
        robotMotion,
        posMachineMotion,
        iPhoneMotion,
        puzzleMotion,
        emojiMotion,
        swissMotion,
        macbookMotion,
        coinGrowthMotion,
        dataHighwayMotion,
        emojiTwoMotion,
        dollarSignMotion,
        combinationLockMotion,
        atomMotion,
    };
}