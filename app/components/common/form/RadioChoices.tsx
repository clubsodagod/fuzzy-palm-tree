import React from 'react'
import styles from '../styles.module.css'
import { CaseStudyDocumentType } from '@/library/db/models/case-study'
import { FormField } from '@/library/types/form/register'
import { RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { MotionDiv } from '../../framer/MotionDiv'
import { MotionH6 } from '../../framer/MotionH6'
import { FormDocumentTypeV2 } from '@/library/types/form/identifiers'


const RadioChoices: React.FC<{
    field: any;
    choices: any[];
    value:any;
    label:string;
    handleChange:any;
    i:number;
}> = ({
    field,
    choices,
    value,
    label,
    handleChange,
    i,
}) => {

    return (
        <MotionDiv
            key={`${field.key} ${field.name} ${i} ${field.label} `}
        >
            <MotionH6>{label}</MotionH6>
            <RadioGroup
                aria-labelledby="controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value ? value : null}

            >
                {
                    choices.map((choice, i: number) => {
                        return (
                            <FormControlLabel
                                key={`${field.key} ${field.name} ${i} ${field.label} ${choice} `}
                                id='category'
                                value={choice.property}
                                control={
                                    <Radio 
                                    onChange={(e) => { handleChange(field, e, null, choice.property) }}  
                                    />
                                }
                                label={choice.label}
                            />
                        )
                    })
                }
            </RadioGroup>

        </MotionDiv>

    )
}



export default RadioChoices;