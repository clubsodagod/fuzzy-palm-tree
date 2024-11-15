'use client'
import React from 'react'
import { Button } from '@mui/material';
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv';
import { MotionDivProps } from '@/app/_library/types/common';



export interface ButtonProps extends MotionDivProps {
    variant: 'contained' | 'outlined' | 'text';
    color: 'error' | 'info' | 'inherit' | 'success' | 'warning' | 'primary' | 'secondary';
    label: string|React.ReactNode;
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
        className='btn-pro-wrapper'
        >
            <Button
            className={`z-50 relative`}
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