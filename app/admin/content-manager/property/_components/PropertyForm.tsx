"use client"
import React, { useEffect, useState } from 'react'
import styles from './components.module.css'
import { PropertyDocumentType } from '@/library/db/models/property';
import { ErrorObject, ErrorResponseMessage } from '@/library/types/common';
import { initPropertyDocument } from '@/utility/admin/property';
import { MotionDiv } from '@/app/components/framer/MotionDiv';
import { MotionP } from '@/app/components/framer/MotionP';
import { FormField } from '@/library/types/form/identifiers';
import { handleChanges } from '@/utility/admin/case-study/create';
import { TextField, Stack, Chip, Button, FormControl, FormControlLabel, Radio, RadioGroup, Avatar, Badge } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { MotionForm } from '@/app/components/framer/MotionForm';
import { propertyFormDocument } from '@/library/const/forms/property';
import { MotionH3 } from '@/app/components/framer/MotionH3';
import { red } from '@mui/material/colors';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { validateField } from '@/utility/functions/forms';
import DynamicAlert from '@/app/components/common/DynamicAlert';

const investmentTypeChoices: string[] = ["Rental", "Wholesale", "Fix and Flip"];
const booleanChoices = [{ label: "Yes", value: true }, { label: "No", value: false }];

const PropertyForm: React.FC<{
    handleSubmit: (arg0: PropertyDocumentType) => Promise<ErrorResponseMessage>;
}> = ({
    handleSubmit,
}) => {

        const [propertyDocument, setPropertyDocument] = useState<Partial<PropertyDocumentType>>();
        const [currentValues, setCurrentValues] = useState<{
            photos: string;
            videos: string,
        }>({
            photos: "",
            videos: "",
        });
        const [eFs, setErrorFields] = useState<Partial<ErrorObject<PropertyDocumentType>>>({});
        const [eRM, setErrorResponseMessage] = useState<ErrorResponseMessage>();



        function validateUrl(field: any, url: string) {

            const validationErrors = validateField(field, url);
            setErrorFields((prev: Partial<ErrorObject<PropertyDocumentType>>) => ({
                ...prev,
                [field.key]: validationErrors
            }))
        }

        function handleChange(
            field: any,
            event: any,
            addValue: any,
            choice: string | boolean | null,
        ) {

            const document = propertyDocument as PropertyDocumentType | undefined;

            if (["photos", "videos",].includes(field.key)) {
                console.log(addValue);

                handleChanges(
                    field, event, addValue, eFs, setErrorFields, { type: "property", document: document! }, setPropertyDocument, null
                )
            } else {
                console.log(choice);

                handleChanges(
                    field, event, null, eFs, setErrorFields, { type: "property", document: document! }, setPropertyDocument, choice
                )
            }
        }

        function handleRenderForm(field: FormField<PropertyDocumentType>) {



            const document = propertyDocument as PropertyDocumentType;

            switch (field.key) {
                case "address":
                    return (
                        <MotionDiv
                            key={`${field.key} ${field.name} ${field.label} `}
                        >
                            <TextField
                                error={eFs && eFs[field.key as keyof PropertyDocumentType]?.error!}
                                rows={4}
                                label={field.label}
                                name={field.name as string}  // `name` is narrowed down to string
                                className={styles.catFormField}
                                value={document && document[field.name as keyof PropertyDocumentType]}  // Ensure correct value type
                                id='category'
                                onChange={(e) => { handleChange(field as FormField<PropertyDocumentType>, e, null, null) }}
                            />
                        </MotionDiv>
                    )

                case "description":
                    return (

                        <MotionDiv
                            key={`${field.key} ${field.name} ${field.label} `}
                        >
                            <TextField
                                error={eFs && eFs[field.key as keyof PropertyDocumentType]?.error!}
                                fullWidth
                                multiline
                                rows={4}
                                label={field.label}
                                name={field.name as string}  // `name` is narrowed down to string
                                className={styles.catFormField}
                                value={document && document[field.name as keyof PropertyDocumentType]}
                                onChange={(e) => { handleChange(field as FormField<PropertyDocumentType>, e, null, null) }}
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
                                document[field.key] &&
                                document[field.key].length > 0 &&
                                <Stack direction="row" spacing={1}>
                                    {
                                        document[field.key].map((t: string, i: number) => {
                                            return (
                                                <MotionDiv
                                                    key={`${t}:${i} avatar wrapper`}
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
                                                                                field as FormField<PropertyDocumentType>,
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
                                                            key={`${t}:${i} avatar`} alt={t} src={t} sx={{ width: "5vw", height: "5vw" }}
                                                        />
                                                    </Badge>
                                                </MotionDiv>
                                            )
                                        })
                                    }
                                </Stack>

                            }


                            <MotionDiv
                                className={`${styles.tagInputCtn} w-full flex`}
                            >
                                <TextField
                                    className=''
                                    size='small'
                                    label={field.label}
                                    name={field.name}
                                    value={currentValues[field.key]}
                                    onChange={(e) => { setCurrentValues((prev) => ({ ...prev, [field.name]: e.target.value })); validateUrl(field, e.target.value) }}
                                />
                                <Button
                                    onClick={
                                        (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined) => {
                                            handleChange(
                                                field as FormField<PropertyDocumentType>,
                                                e,
                                                currentValues[field.key as keyof {
                                                    photos: string;
                                                    videos: string,
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
                case "investmentType":
                    return (
                        <MotionDiv
                            key={`${field.key} ${field.name} ${field.label} `}
                            className={`flex flex-row gap-2 items-center`}
                        >
                            <MotionP className={`font-bold`}>{field.label as string}</MotionP>
                            <RadioGroup
                                className={`flex flex-row gap-2`}
                                aria-labelledby="controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={propertyDocument?.investmentType ? propertyDocument.investmentType : null}

                            >
                                {
                                    investmentTypeChoices.map((choice, i: number) => {
                                        return (
                                            <FormControlLabel
                                                key={`${field.key} ${field.name} ${i} ${field.label} ${choice} `}
                                                id='category'
                                                value={choice}
                                                control={
                                                    <Radio
                                                        onChange={(e) => { handleChange(field as FormField<PropertyDocumentType>, e, null, choice) }}
                                                    />
                                                }
                                                label={choice}
                                            />
                                        )
                                    })
                                }
                            </RadioGroup>

                        </MotionDiv>
                    )
                case "acquired":
                case "live":
                    return (
                        <MotionDiv
                            key={`${field.key} ${field.name} ${field.label} `}
                        >

                            <FormControl className={`flex flex-row items-center gap-3 `}>
                                <MotionP className={`font-bold`}>{field.label as string}</MotionP>
                                <RadioGroup
                                    className={`flex flex-row gap-2`}
                                    aria-labelledby="controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={propertyDocument && propertyDocument[field.key] == true ? true : false}
                                >
                                    {
                                        booleanChoices.map((choice, i: number) => {
                                            return (
                                                <FormControlLabel
                                                    key={`${field.key} ${field.name} ${i} ${field.label} ${choice} `}
                                                    id='category'
                                                    value={choice.value}
                                                    control={
                                                        <Radio
                                                            onChange={(e) => { handleChange(field as FormField<PropertyDocumentType>, e, null, choice.value) }}
                                                        />
                                                    }
                                                    label={choice.label}
                                                />
                                            )
                                        })
                                    }
                                </RadioGroup>
                            </FormControl>
                        </MotionDiv>
                    )
                case "purchasePrice":
                case "rehabCost":
                case "currentValue":

                    if (field.key) {

                    }
                    return (
                        <MotionDiv
                            key={`${field.key} ${field.name} ${field.label} `}
                        >
                            <TextField
                                fullWidth
                                error={eFs && eFs[field.key as keyof PropertyDocumentType]?.error!}
                                rows={4}
                                label={field.label}
                                name={field.name as string}  // `name` is narrowed down to string
                                className={styles.catFormField}
                                value={document && document[field.name as keyof PropertyDocumentType]}  // Ensure correct value type
                                id='category'
                                onChange={(e) => { handleChange(field as FormField<PropertyDocumentType>, e, null, null) }}
                            />
                        </MotionDiv>
                    )
                case "monthlyFinancialFigures":
                    return (
                        <MotionDiv
                            key={`${field.key} ${field.name} ${field.label} `}
                        >
                            <TextField
                                fullWidth
                                error={eFs && eFs[field.key as keyof PropertyDocumentType]?.error!}
                                rows={4}
                                label={field.label}
                                name={field.name as string}  // `name` is narrowed down to string
                                className={styles.catFormField}
                                value={document.monthlyFinancialFigures && document.monthlyFinancialFigures[field.name as keyof PropertyDocumentType["monthlyFinancialFigures"]]}  // Ensure correct value type
                                id='category'
                                onChange={(e) => { handleChange(field as FormField<PropertyDocumentType>, e, null, null) }}
                            />
                        </MotionDiv>
                    )
                default:
                    break;
            }
        }

        // submit handler
        async function submitHandler() {

            try {

                // handle submit function
                const response = await handleSubmit(propertyDocument as PropertyDocumentType);
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
                        setPropertyDocument(undefined);
                        setCurrentValues({
                            photos: "",
                            videos: "",
                        });
                    }, 3500);
                }

                return
            } catch (error) {
                console.log("There was an error:", error);
            }
        };

        useEffect(() => {
            initPropertyDocument(setPropertyDocument);
        }, []);

        useEffect(() => {
            {
                propertyDocument && console.log(propertyDocument)
            }
            {
                propertyDocument == null && initPropertyDocument(setPropertyDocument);
            }
        }, [propertyDocument]);

        useEffect(() => {
            {
                eRM && console.log(eRM);
            }
        }, [eRM])

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
                <MotionForm
                    className={`w-1/2 flex flex-col gap-3`}
                >

                    {
                        propertyDocument &&
                        <>
                            {
                                propertyFormDocument.map((pF, i: number) => {
                                    // validate tF object
                                    if (pF) {

                                        return handleRenderForm(pF as FormField<PropertyDocumentType>)

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



export default PropertyForm;