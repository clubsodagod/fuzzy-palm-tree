import React from 'react'
import styles from '../styles.module.css'
import type { HTMLMotionProps } from 'framer-motion'
import { MotionDivProps } from '../ScrollableItemCtn';
import { MotionDiv } from '../../framer/MotionDiv';
import { Button } from '@mui/material';



export interface ButtonProps extends MotionDivProps {
    variant: 'contained' | 'outlined' | 'text';
    color: 'error' | 'info' | 'inherit' | 'success' | 'warning' | 'primary' | 'secondary';
    label: any;
    href?:string;
    type?: 'submit',
    size?: 'small' | 'medium' | 'large'
}

const ButtonPro: React.FC<ButtonProps> = ({
    label,
    variant,
    color,
    type,
    size,
    href,
    ...props
}) => {

    return (
        <MotionDiv
        {...props}
        >
            <Button
            href={href && href}
            variant={variant}
            color={color}
            type={type ? type : 'button'}
            size={size ? size : 'small'}
            >
                {label}
            </Button>
        </MotionDiv>
    )
}



export default ButtonPro;