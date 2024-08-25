


/**
 * Interpolates between two values based on scroll progress.
 * @param {number} startValue - The starting value.
 * @param {number} endValue - The ending value.
 * @param {number} progress - The scroll progress between 0 and 1.
 * @returns {number} - The interpolated value.
 */


export const interpolate = (startValue: number, endValue: number, progress: number): number => {
    return startValue + (endValue - startValue) * progress;
};
