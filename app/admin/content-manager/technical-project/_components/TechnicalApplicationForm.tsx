"use client"
import React, { useEffect, useState } from 'react';
import styles from './components.module.css';
import { CaseStudyDocumentType } from '@/library/db/models/case-study';
import { ErrorObject, ErrorResponseMessage } from '@/library/types/common';
import { StatusResponseObject } from '@/utility/admin/identifiers/create-card';
import { MotionForm } from '@/app/components/framer/MotionForm';
import { technicalApplicationFormDocument } from '@/library/const/forms/technicalProject';
import { Avatar, Badge, Button, Chip, FabProps, Stack, TextField } from '@mui/material';
import { FormDocumentType, FormField } from '@/library/types/form/identifiers';
import { BlogDocumentType } from '@/library/db/models/blog';
import { TechnicalApplicationDocumentType } from '@/library/db/models/technicalApplication';
import { FormFieldsFor } from '@/library/types/form/identifiers';
import { MotionDiv } from '@/app/components/framer/MotionDiv';
import { MotionP } from '@/app/components/framer/MotionP';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { MotionH3 } from '@/app/components/framer/MotionH3';
import { handleChanges } from '@/utility/admin/case-study/create';
import { log } from 'console';
import { initTechnicalApplicationDocument } from '@/utility/admin/technical-application/create';
import { validateField } from '@/utility/functions/forms';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { red } from '@mui/material/colors';
import DynamicAlert from '@/app/components/common/DynamicAlert';


const TechnicalApplicationForm: React.FC<{
    handleSubmit: (arg0: TechnicalApplicationDocumentType) => Promise<ErrorResponseMessage>;
}> = ({
    handleSubmit,
}) => {

        const [technicalProjectDocument, setTechnicalProjectDocument] = useState<Partial<TechnicalApplicationDocumentType>>();
        const [currentValues, setCurrentValues] = useState<{
            photos: string;
            videos: string,
            technologiesUsed: string;
        }>({
            photos: "",
            videos: "",
            technologiesUsed: "",
        });
        const [eFs, setErrorFields] = useState<Partial<ErrorObject<TechnicalApplicationDocumentType>>>({});
        const [eRM, setErrorResponseMessage] = useState<ErrorResponseMessage>();

        function validateUrl(field: any, url: string) {

            const validationErrors = validateField(field, url);
            setErrorFields((prev: Partial<ErrorObject<TechnicalApplicationDocumentType>>) => ({
                ...prev,
                [field.key]: validationErrors
            }))
        }

        function handleChange(
            field: any,
            event: any,
            addValue: any,
            choice: string | null,
        ) {

            const document = technicalProjectDocument as TechnicalApplicationDocumentType | undefined;

            if (["photos", "videos", "technologiesUsed"].includes(field.key)) {
                console.log(addValue);

                handleChanges(
                    field, event, addValue, eFs, setErrorFields, { type: "technicalApplication", document: document! }, setTechnicalProjectDocument, null
                )
            } else {
                handleChanges(
                    field, event, null, eFs, setErrorFields, { type: "technicalApplication", document: document! }, setTechnicalProjectDocument, choice
                )
            }
        }

        function handleRenderForm(field: FormField<TechnicalApplicationDocumentType>) {



            const document = technicalProjectDocument as TechnicalApplicationDocumentType;

            switch (field.name) {
                case "githubLink":
                case "link":
                case "name":
                    return (
                        <MotionDiv
                            key={`${field.key} ${field.name} ${field.label} `}
                        >
                            <TextField
                                error={eFs && eFs[field.key as keyof TechnicalApplicationDocumentType]?.error!}
                                rows={4}
                                label={field.label}
                                name={field.name as string}  // `name` is narrowed down to string
                                className={styles.catFormField}
                                value={document && document[field.name as keyof TechnicalApplicationDocumentType]}  // Ensure correct value type
                                id='category'
                                onChange={(e) => { handleChange(field as FormField<TechnicalApplicationDocumentType>, e, null, null) }}
                            />
                        </MotionDiv>
                    )

                case "description":
                    return (

                        <MotionDiv
                            key={`${field.key} ${field.name} ${field.label} `}
                        >
                            <TextField
                                error={eFs && eFs[field.key as keyof TechnicalApplicationDocumentType]?.error!}
                                fullWidth
                                multiline
                                rows={4}
                                label={field.label}
                                name={field.name as string}  // `name` is narrowed down to string
                                className={styles.catFormField}
                                value={document && document[field.name as keyof TechnicalApplicationDocumentType]}
                                onChange={(e) => { handleChange(field as FormField<TechnicalApplicationDocumentType>, e, null, null) }}
                            />
                        </MotionDiv>
                    )
                case "photos":
                case "videos":
                    return (
                        <MotionDiv
                            key={`${field.key} ${field.name} ${field.label}`}
                            className={`${styles.tagsCtn}`}
                        >
                            <MotionP className={`${styles.richHeader}`}>
                                {field.label}
                            </MotionP>

                            {
                                document &&
                                document[field.name] &&
                                document[field.name].length > 0 &&
                                <Stack direction="row" spacing={1}>
                                    {
                                        document[field.name].map((t: string, i: number) => {
                                            return (
                                                <>
                                                    <MotionDiv
                                                        whileHover={{ scale: 1.15 }}
                                                    >
                                                        <Badge
                                                            overlap="circular"
                                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                                            badgeContent={
                                                                <MotionDiv
                                                                    whileHover={{ scale: 1.5 }}
                                                                >
                                                                    <ClearRoundedIcon
                                                                        sx={{
                                                                            color: red[500],
                                                                            fontSize: "2rem",
                                                                            border: "2.5px solid red",
                                                                            borderRadius: "50%"
                                                                        }}
                                                                        onClick={
                                                                            (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined) => {
                                                                                handleChange(
                                                                                    field as FormField<TechnicalApplicationDocumentType>,
                                                                                    e,
                                                                                    t,
                                                                                    null
                                                                                );

                                                                                setCurrentValues((prev) => ({ ...prev, [field.name]: "" }));
                                                                            }} />
                                                                </MotionDiv>

                                                            }
                                                        >
                                                            <Avatar
                                                                key={`${t}:${i} avatar`} onDelete={
                                                                    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined) => {
                                                                        handleChange(
                                                                            field as FormField<TechnicalApplicationDocumentType>,
                                                                            e,
                                                                            t,
                                                                            null
                                                                        );

                                                                        setCurrentValues((prev) => ({ ...prev, [field.name]: "" }));
                                                                    }} alt={t} src={t} sx={{ width: "5vw", height: "5vw" }}
                                                            />
                                                        </Badge>
                                                    </MotionDiv>

                                                </>

                                            )
                                        })
                                    }
                                </Stack>

                            }


                            <MotionDiv
                                className={`${styles.tagInputCtn}`}
                            >
                                <TextField
                                    error={eFs && eFs[field.key as keyof TechnicalApplicationDocumentType]?.error!}
                                    size='small'
                                    label={field.label}
                                    name={field.name}
                                    value={currentValues[field.name]}
                                    onChange={(e) => { setCurrentValues((prev) => ({ ...prev, [field.name]: e.target.value })); validateUrl(field, e.target.value) }}
                                />
                                <Button
                                    onClick={
                                        (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined) => {
                                            handleChange(
                                                field as FormField<TechnicalApplicationDocumentType>,
                                                e,
                                                currentValues[field.key as keyof {
                                                    photos: string;
                                                    videos: string,
                                                    technologiesUsed: string;
                                                }],
                                                null
                                            );

                                            setCurrentValues((prev) => ({ ...prev, [field.name]: "" }));
                                        }}>
                                    <AddRoundedIcon />
                                </Button>
                            </MotionDiv>

                        </MotionDiv>
                    )
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
                                document &&
                                document[field.name] &&
                                document[field.name].length > 0 &&
                                <Stack direction="row" spacing={1}>
                                    {
                                        document[field.name].map((t: string, i: number) => {
                                            return (
                                                <Chip
                                                    key={`${t}:${i}`}
                                                    label={t}
                                                    onDelete={
                                                        (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined) => {
                                                            handleChange(
                                                                field as FormField<TechnicalApplicationDocumentType>,
                                                                e,
                                                                t,
                                                                null
                                                            );

                                                            setCurrentValues((prev) => ({ ...prev, [field.name]: "" }));
                                                        }}
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
                                    onChange={(e) => { setCurrentValues((prev) => ({ ...prev, [field.name]: e.target.value })); }}
                                />
                                <Button
                                    onClick={
                                        (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined) => {
                                            handleChange(
                                                field as FormField<TechnicalApplicationDocumentType>,
                                                e,
                                                currentValues[field.key as keyof {
                                                    photos: string;
                                                    videos: string,
                                                    technologiesUsed: string;
                                                }],
                                                null
                                            );

                                            setCurrentValues((prev) => ({ ...prev, [field.name]: "" }));
                                        }}>
                                    <AddRoundedIcon />
                                </Button>
                            </MotionDiv>

                        </MotionDiv>
                    )
                    break

                default:
                    break;
            }
        }

        // submit handler
        async function submitHandler() {

            try {

                // handle submit function
                const response = await handleSubmit(technicalProjectDocument as TechnicalApplicationDocumentType);
                console.log(response);

                // access "error" status, and status "message"
                const {
                    message,
                    error,
                } = response;

                // validate response object
                if (!response.error) {
                    setErrorResponseMessage({ message, error })
                    console.log(error, message);

                    setTimeout(() => {
                        setErrorResponseMessage(undefined);
                        setTechnicalProjectDocument(undefined);
                        setCurrentValues({
                            photos: "",
                            videos: "",
                            technologiesUsed: "",
                        });
                    }, 3500);
                }

                return
            } catch (error) {
                console.log("There was an error:", error);
            }
        }

        useEffect(() => {
            initTechnicalApplicationDocument(setTechnicalProjectDocument);
        }, []);

        useEffect(() => {
            { technicalProjectDocument && console.log(technicalProjectDocument) }

            {
                technicalProjectDocument == undefined && initTechnicalApplicationDocument(setTechnicalProjectDocument);
            }
        }, [technicalProjectDocument]);

        useEffect(() => {
            {
                eRM && console.log(eRM);
            }
        }, [eRM])
        
        useEffect
        return (
            <MotionDiv>
                <MotionDiv>
                    <Button variant="outlined"
                        onClick={submitHandler}
                    >
                        Submit
                    </Button>
                </MotionDiv>
                <MotionDiv
                    className={`${styles.alertCtn}`}
                >
                    {
                        eRM?.error ?
                            <DynamicAlert
                                status={500} message={eRM.message}
                            />
                            :
                            eRM?.error == false ?
                                <DynamicAlert
                                    status={200} message={eRM?.message!}
                                />
                                :
                                null
                    }
                </MotionDiv>
                <MotionForm>

                    {/* form object */}

                    {
                        technicalProjectDocument &&
                        <>
                            {
                                technicalApplicationFormDocument.map((tF, i: number) => {
                                    // validate tF object
                                    if (tF) {

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
                        </>
                    }

                </MotionForm>
            </MotionDiv>
        )
    }



export default TechnicalApplicationForm;