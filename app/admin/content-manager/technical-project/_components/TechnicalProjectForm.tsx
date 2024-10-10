"use client"
import React, { useState } from 'react';
import styles from './components.module.css';
import { CaseStudyDocumentType } from '@/library/db/models/case-study';
import { ErrorObject } from '@/library/types/common';
import { StatusResponseObject } from '@/utility/admin/identifiers/create-card';
import { MotionForm } from '@/app/components/framer/MotionForm';
import { technicalApplicationFormDocument } from '@/library/const/forms/technicalProject';
import { Button, Chip, FabProps, Stack, TextField } from '@mui/material';
import { FormDocumentType, FormField } from '@/library/types/form/identifiers';
import { BlogDocumentType } from '@/library/db/models/blog';
import { TechnicalApplicationDocumentType } from '@/library/db/models/technicalApplication';
import { FormFieldsFor } from '@/library/types/form/identifiers';
import { MotionDiv } from '@/app/components/framer/MotionDiv';
import { MotionP } from '@/app/components/framer/MotionP';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { MotionH3 } from '@/app/components/framer/MotionH3';


const TechnicalProjectForm: React.FC<{}> = ({ }) => {

    const [technicalProjectDocument, setTechnicalProjectDocument] = useState<TechnicalApplicationDocumentType | undefined>();
    const [currentValues, setCurrentValues] = useState<{
        photos:string;
        videos:string,
        technologiesUsed:string;
    }>({
        photos:"",
        videos:"",
        technologiesUsed:"",
    })
    const [eFs, setErrorFields] = useState<Partial<ErrorObject<CaseStudyDocumentType>>>({});
    const [eRM, setErrorResponseMessage] = useState<Partial<StatusResponseObject>>({});

    function handleRenderForm(field: FormField<TechnicalApplicationDocumentType>) {

        switch (field.name) {
            case "githubLink":
            case "link":
            case "name":
                return (
                    <MotionDiv
                        key={`${field.key} ${field.name} ${field.label} `}
                    >
                        <TextField
                            error={eFs && eFs[field.key as keyof CaseStudyDocumentType]?.error!}
                            rows={4}
                            label={field.label}
                            name={field.name as string}  // `name` is narrowed down to string
                            className={styles.catFormField}
                            value={technicalProjectDocument && technicalProjectDocument[field.name as keyof TechnicalApplicationDocumentType]}  // Ensure correct value type
                            id='category'
                            onChange={(e) => { `handleChanges(field as FormField<TechnicalApplicationDocumentType>, e, null,null)` }}
                        />
                    </MotionDiv>
                )

            case "description":
                return (

                    <MotionDiv
                        key={`${field.key} ${field.name} ${field.label} `}
                    >
                        <TextField
                            error={eFs && eFs[field.key as keyof CaseStudyDocumentType]?.error!}
                            fullWidth
                            multiline
                            rows={4}
                            label={field.label}
                            name={field.name as string}  // `name` is narrowed down to string
                            className={styles.catFormField}
                            value={technicalProjectDocument && technicalProjectDocument[field.name as keyof TechnicalApplicationDocumentType]} 
                            onChange={(e) => { `handleChanges(field as FormField<TechnicalApplicationDocumentType>, e, null, null)` }}
                        />
                    </MotionDiv>
                )
            case "photos":
            case "videos":
            case "technologiesUsed":
                return (
                    <MotionDiv
                        key={`${field.key} ${field.name} ${field.label}`}
                        className={`${styles.tagsCtn}`}
                    >
                        <MotionP className={`${styles.richHeader}`}>
                            {field.label}
                        </MotionP>

                        {
                            technicalProjectDocument &&
                            technicalProjectDocument[field.name] &&
                            technicalProjectDocument[field.name].length > 0 &&
                            <Stack direction="row" spacing={1}>
                                {
                                    technicalProjectDocument[field.name].map((t: string, i: number) => {
                                        return (
                                            <Chip
                                                key={`${t}:${i}`}
                                                label={t}
                                                onDelete={`(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined)=>{
                                            handleDelete(
                                                t,
                                                e,
                                                field as FormField<BlogDocumentType>
                                            );
                                        }`}
                                            />
                                        )
                                    })
                                }
                            </Stack>

                        }


                        <MotionDiv
                            className={`${styles.tagInputCtn}`}
                        >
                            <TextField
                                size='small'
                                label={field.label}
                                name={field.name}
                                value={currentValues[field.name]}
                                onChange={(e) => { setCurrentValues((prev)=>({...prev, [field.name]:e.target.value})); }}
                            />
                            <Button
                                onClick={
                                    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined) => {
                                        `handleChanges(
                                            field as FormField<CaseStudyDocumentType>,
                                            e,
                                            currentValues[field.name as unknown as keyof FormField<>],
                                            null
                                        );
                                        setCurrentValues((prev)=>({...prev,[field.name]:""}));`
                                    }}>
                                <AddRoundedIcon />
                            </Button>
                        </MotionDiv>

                    </MotionDiv>
                )
            case "photos":


            default:
                break;
        }
    }

    return (
        <MotionForm>

            {/* form object */}
            {
                technicalApplicationFormDocument.map((tF, i: number) => {
                    // validate tF object
                    if (tF) {
                        console.log(tF);
                        
                        return handleRenderForm(tF as FormField<TechnicalApplicationDocumentType>)

                    } else {
                        return <MotionDiv key={`error: ${i}`}>
                            <MotionH3>
                                Seems the form is lost. Try again please.
                            </MotionH3>
                        </MotionDiv>
                    }
                })
            }
        </MotionForm>
    )
}



export default TechnicalProjectForm;