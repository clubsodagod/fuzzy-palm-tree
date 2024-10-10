"use client"
import React, { useEffect, useState } from 'react'
import styles from './components.module.css'
import { MotionForm } from '@/app/components/framer/MotionForm';
import { blogFormDocument } from '@/library/const/forms/blog';
import { caseStudyFormDocument } from '@/library/const/forms/case-study';
import { CaseStudyDocumentType } from '@/library/db/models/case-study';
import { ErrorObject } from '@/library/types/common';
import TextField from '@mui/material/TextField';
import { FormField, FormFieldsFor } from '@/library/types/form/identifiers';
import { MotionDiv } from '@/app/components/framer/MotionDiv';
import { handleCaseStudyChanges, initCaseStudyDocument } from '@/utility/admin/case-study/create';
import { Button, Checkbox, Chip, FormControl, FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';
import { MotionP } from '@/app/components/framer/MotionP';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { StatusResponseObject } from '@/utility/admin/identifiers/create-card';
import { validateField } from '@/utility/functions/forms';
import { Description } from '@mui/icons-material';

export type MediaFields = ErrorObject<CaseStudyDocumentType['featuredImg']> | ErrorObject<CaseStudyDocumentType['featuredVideo']>;

const CaseStudyForm: React.FC<{
}> = ({
}) => {

        const [caseStudyDocument, setCaseStudyDocument] = useState<CaseStudyDocumentType | undefined>();
        const [eFs, setErrorFields] = useState<Partial<ErrorObject<CaseStudyDocumentType>>>({});
        const [eRM, setErrorResponseMessage] = useState<Partial<StatusResponseObject>>({});
        const [objective, setObjective] = useState<string>("");
        const [solution, setSolution] = useState<string>("");
        const [challenge, setChallenge] = useState<string>("");

        const mediaValue = (fieldKey: string, field: FormField<CaseStudyDocumentType>) => {
            fieldKey.includes("featuredImg")
                ? caseStudyDocument?.featuredImg && caseStudyDocument.featuredImg[field.name.includes("landscape") ? 'landscape' : 'portrait'] // Access the correct photo sub-property
                : caseStudyDocument?.featuredVideo && caseStudyDocument.featuredVideo[field.name.includes("landscape") ? 'landscape' : 'portrait']
        }

        const caseStudyTypeChoices = [{ label: "Technical Application", property: "TechnicalApplication" }, { label: "Property", property: "Property" },];

        function handleChanges(
            field: FormField<CaseStudyDocumentType>,
            event: any,
            addValue: string | null,
            choice:string|null,
        ) {

            if (["objectives", "challenges", "solutions"].includes(field.key)) {
                handleCaseStudyChanges(
                    field, event, addValue, eFs, setErrorFields, caseStudyDocument!, setCaseStudyDocument,null
                )
            } else {
                handleCaseStudyChanges(
                    field, event, null, eFs, setErrorFields, caseStudyDocument!, setCaseStudyDocument,choice
                )
            }

        }

        useEffect(() => {
            initCaseStudyDocument(setCaseStudyDocument);
        }, []);

        useEffect(() => {
            {
                caseStudyDocument && console.log(caseStudyDocument);
            }
        }, [caseStudyDocument]);

        return (
            <MotionForm>
                {
                    caseStudyFormDocument.map((cF, i: number) => {
                        if (caseStudyDocument != undefined) {
                            if (cF && cF.type === "text" && cF.key in caseStudyDocument!) {

                                if (["featuredImg", "featuredVideo",].some(k => cF.key.includes(k))) {
                                    // Explicitly type the key as 'photo' or 'video'
                                    const key = cF.key as 'featuredImg' | 'featuredVideo';

                                    // Narrow down the correct error field, making sure to cast correctly
                                    const errorField = eFs && (eFs[key] as MediaFields);

                                    return (
                                        <MotionDiv
                                            key={`${cF.key} ${cF.name} ${i} ${cF.label} `}
                                        >
                                            <TextField
                                                error={errorField && cF.name.includes("landscape") ? errorField.landscape?.error! : errorField?.portrait?.error!}
                                                fullWidth
                                                label={cF.label}
                                                name={cF.name as string}  // `name` is narrowed down to string
                                                className={styles.catFormField}
                                                value={mediaValue(cF.key, cF as FormField<CaseStudyDocumentType>)}
                                                onChange={(e) => { handleChanges(cF as FormField<CaseStudyDocumentType>, e, null,null) }}
                                            />
                                        </MotionDiv>

                                    )

                                } else {
                                    // Handle all other text fields
                                    return (
                                        <MotionDiv
                                            key={`${cF.key} ${cF.name} ${i} ${cF.label} `}
                                        >
                                            <TextField
                                                error={eFs && eFs[cF.key as keyof CaseStudyDocumentType]?.error!}
                                                rows={4}
                                                label={cF.label}
                                                name={cF.name as string}  // `name` is narrowed down to string
                                                className={styles.catFormField}
                                                value={caseStudyDocument && caseStudyDocument[cF.name as keyof CaseStudyDocumentType]}  // Ensure correct value type
                                                id='category'
                                                onChange={(e) => { handleChanges(cF as FormField<CaseStudyDocumentType>, e, null,null) }}
                                            />
                                        </MotionDiv>

                                    );
                                }
                            } else if (cF && cF.type === "textarea") {

                                if (
                                    cF.name == 'outcomesDescription' || cF.name == "outcomesTechnicalImpact"
                                ) {
                                    return (
                                        <MotionDiv
                                            key={`${cF.key} ${cF.name} ${i} ${cF.label} `}
                                        >
                                            <TextField
                                                error={eFs && eFs[cF.key as keyof CaseStudyDocumentType]?.error!}
                                                fullWidth
                                                multiline
                                                rows={4}
                                                label={cF.label}
                                                name={cF.name as string}  // `name` is narrowed down to string
                                                className={styles.catFormField}
                                                value={caseStudyDocument && caseStudyDocument.outcomes[cF.name == 'outcomesDescription' ? 'description' : 'technicalImpact']}  // Ensure correct value type
                                                onChange={(e) => { handleChanges(cF as FormField<CaseStudyDocumentType>, e, null,null) }}
                                            />
                                        </MotionDiv>

                                    );
                                }
                            } else if (cF && cF.type === "tags" && cF.key in caseStudyDocument!) {

                                // objectives field
                                if (cF.key == 'objectives') {
                                    return (
                                        <MotionDiv
                                            key={`${cF.key} ${cF.name} ${i} ${cF.label}`}
                                            className={`${styles.tagsCtn}`}
                                        >
                                            <MotionP className={`${styles.richHeader}`}>
                                                Objectives
                                            </MotionP>

                                            {
                                                caseStudyDocument?.objectives && caseStudyDocument?.objectives.length > 0 &&
                                                <Stack direction="row" spacing={1}>
                                                    {
                                                        caseStudyDocument?.objectives.map((t: string, i: number) => {
                                                            return (
                                                                <Chip
                                                                    key={`${t}:${i}`}
                                                                    label={t}
                                                                    onDelete={`(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined)=>{
                                                                handleDelete(
                                                                    t,
                                                                    e,
                                                                    cF as FormField<BlogDocumentType>
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
                                                    label={cF.label}
                                                    name={cF.name}
                                                    value={objective}
                                                    onChange={(e) => { setObjective(e.target.value); }}
                                                />
                                                <Button
                                                    onClick={
                                                        (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined) => {
                                                            handleChanges(
                                                                cF as FormField<CaseStudyDocumentType>,
                                                                e,
                                                                objective,
                                                                null
                                                            );
                                                            setObjective('');
                                                        }}>
                                                    <AddRoundedIcon />
                                                </Button>
                                            </MotionDiv>

                                        </MotionDiv>
                                    )

                                }

                                // challenges field
                                else if (cF.key == 'challenges') {
                                    return (
                                        <MotionDiv
                                            key={`${cF.key} ${cF.name} ${i} ${cF.label}`}
                                            className={`${styles.tagsCtn}`}
                                        >
                                            <MotionP className={`${styles.richHeader}`}>
                                                Challenges
                                            </MotionP>

                                            {
                                                caseStudyDocument?.challenges && caseStudyDocument?.challenges.length > 0 &&
                                                <Stack direction="row" spacing={1}>
                                                    {
                                                        caseStudyDocument?.challenges.map((t: string, i: number) => {
                                                            return (
                                                                <Chip
                                                                    key={`${t}:${i}`}
                                                                    label={t}
                                                                    onDelete={`(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined)=>{
                                                                handleDelete(
                                                                    t,
                                                                    e,
                                                                    cF as FormField<BlogDocumentType>
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
                                                    label={cF.label}
                                                    name={cF.name}
                                                    value={challenge}
                                                    onChange={(e) => { setChallenge(e.target.value); }}
                                                />
                                                <Button
                                                    onClick={
                                                        (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined) => {
                                                            handleChanges(
                                                                cF as FormField<CaseStudyDocumentType>,
                                                                e,
                                                                challenge,
                                                                null
                                                            );
                                                            setChallenge('');
                                                        }}>
                                                    <AddRoundedIcon />
                                                </Button>
                                            </MotionDiv>

                                        </MotionDiv>
                                    )

                                }

                                // solutions field
                                else if (cF.key == 'solutions') {
                                    return (
                                        <MotionDiv
                                            key={`${cF.key} ${cF.name} ${i} ${cF.label}`}
                                            className={`${styles.tagsCtn}`}
                                        >
                                            <MotionP className={`${styles.richHeader}`}>
                                                Solutions
                                            </MotionP>

                                            {
                                                caseStudyDocument?.solutions && caseStudyDocument?.solutions.length > 0 &&
                                                <Stack direction="row" spacing={1}>
                                                    {
                                                        caseStudyDocument?.solutions.map((t: string, i: number) => {
                                                            return (
                                                                <Chip
                                                                    key={`${t}:${i}`}
                                                                    label={t}
                                                                    onDelete={`(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined)=>{
                                                                handleDelete(
                                                                    t,
                                                                    e,
                                                                    cF as FormField<BlogDocumentType>
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
                                                    label={cF.label}
                                                    name={cF.name}
                                                    value={solution}
                                                    onChange={(e) => { setSolution(e.target.value); }}
                                                />
                                                <Button
                                                    onClick={
                                                        (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined) => {
                                                            handleChanges(
                                                                cF as FormField<CaseStudyDocumentType>,
                                                                e,
                                                                solution,
                                                                null
                                                            );
                                                            setSolution('');
                                                        }}
                                                >
                                                    <AddRoundedIcon />
                                                </Button>
                                            </MotionDiv>

                                        </MotionDiv>
                                    )
                                }
                            } else if (cF && cF.type === "radio" && cF.key in caseStudyDocument!) {
                                return (
                                    <MotionDiv
                                        key={`${cF.key} ${cF.name} ${i} ${cF.label} `}
                                    >
                                        <FormControl></FormControl>
                                        <RadioGroup
                                            aria-labelledby="controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={caseStudyDocument.type ? caseStudyDocument.type : null}

                                        >
                                            {
                                                caseStudyTypeChoices.map((choice, i: number) => {
                                                    return (
                                                        <FormControlLabel
                                                            key={`${cF.key} ${cF.name} ${i} ${cF.label} ${choice} `}
                                                            id='category'
                                                            value={choice.property}
                                                            control={
                                                                <Radio 
                                                                onChange={(e) => { handleChanges(cF as FormField<CaseStudyDocumentType>, e, null, choice.property) }}  
                                                                />
                                                            }
                                                            label={choice.label}
                                                        />
                                                    )
                                                })
                                            }
                                        </RadioGroup>

                                    </MotionDiv>

                                );
                            } else if (cF.type == 'number') {
                                console.log(cF.key);

                                if (cF.name == 'outcomesValueGenerated') {

                                    return (
                                        <MotionDiv
                                            key={`${cF.key} ${cF.name} ${i} ${cF.label} `}
                                        >
                                            <TextField
                                                error={eFs && eFs[cF.key as keyof CaseStudyDocumentType]?.error!}
                                                fullWidth
                                                label={cF.label}
                                                name={cF.name as string}  // `name` is narrowed down to string
                                                className={styles.catFormField}
                                                // value={caseStudyDocument.outcomes["valueGenerated"]}
                                                onChange={(e) => { handleChanges(cF as FormField<CaseStudyDocumentType>, e, null,null) }}
                                            />
                                        </MotionDiv>
                                    )
                                }
                            }
                        }

                    })
                }
            </MotionForm>
        )
    }



export default CaseStudyForm;