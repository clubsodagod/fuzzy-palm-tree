'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import styles from '../../../_components/styles.module.css'
import { MotionForm } from '@/app/_hide/_components/framer/MotionForm';
import { MotionDiv } from '@/app/_hide/_components/framer/MotionDiv';
import { contactFormDocument } from '@/library/const/forms/contact';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { MotionP } from '@/app/_hide/_components/framer/MotionP';
import { handleChanges } from '@/utility/admin/case-study/create';
import { ErrorObject, ErrorResponseMessage } from '@/library/types/common';
import { FormField } from '@/library/types/form/identifiers';
import ButtonPro from '@/app/_hide/_components/common/buttons/ButtonPro';
import DynamicAlert from '@/app/_hide/_components/common/DynamicAlert';
import { ContactDocumentType } from '@/app/_database/models/contact';


const LetsWorkForm: React.FC<{}> = ({ }) => {

    const [contactForm, setContactForm] = useState<ContactDocumentType | undefined>({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        reason: 'business',
        message: "",
    });
    const [eFs, setErrorFields] = useState<Partial<ErrorObject<ContactDocumentType>>>({});
    const [eRM, setErrorResponseMessage] = useState<ErrorResponseMessage | undefined>(undefined);

    function changeHandler(
        field: any,
        event: any,
        addValue: any,
        choice: string | null,) {

        if (["text", "textarea",].includes(field.key)) {
            handleChanges(
                field, event, addValue, eFs, setErrorFields, { type: "contact", document: contactForm! }, setContactForm, null
            )
        } else {
            handleChanges(
                field, event, null, eFs, setErrorFields, { type: "contact", document: contactForm! }, setContactForm, choice
            )
        }

    }

    async function submitHandler(e: FormEvent) {
        e.preventDefault()
        try {

            const response = await fetch(`/api/contact/contact-forms/contact`, {
                method: "POST",
                body: JSON.stringify({ form: contactForm })
            }).then((res) => res.json())

            if (response.contactForm) {
                setErrorResponseMessage({
                    error: false,
                    message: response.message,
                });
                setContactForm({
                    firstName: "",
                    lastName: "",
                    company: "",
                    email: "",
                    phone: "",
                    reason: 'business',
                    message: "",
                });
                setErrorFields({});
                setTimeout(() => {
                    setErrorResponseMessage(undefined);
                }, 2500)
            } else {
                setErrorResponseMessage({
                    error: true,
                    message: response.message,
                });
                setTimeout(() => {
                    setErrorResponseMessage(undefined);
                }, 2500)
            }
        } catch (error) {
            setErrorResponseMessage({
                error: true,
                message: "There was an error submitting your request. Please feel free to try again!",
            });
            setTimeout(() => {
                setErrorResponseMessage(undefined);
            }, 1500)
        }
    }

    useEffect(() => {
        {
            eRM && console.log(eRM);
        }
    }, [eRM])

    return (
        <>
            <MotionDiv
                className={`min-h-[5vh] w-full mb-3`}
            >
                {
                    eRM &&
                    <DynamicAlert
                        status={eRM.error == false ? 200 : 500}
                        message={eRM.message}
                    />
                }
            </MotionDiv>

            <MotionDiv
                className={`${styles.contactFormWrapper}`}
            >
                <MotionP
                    className={`${styles.formHeader} mb-3`}
                >
                    Let&apos;s Mastermind Innovation!
                </MotionP>
                <MotionForm
                    onSubmit={(e) => { submitHandler(e) }}
                    className={`${styles.contactForm}`}
                >
                    <MotionDiv
                        className='flex gap-3'
                    >
                        {
                            contactFormDocument?.map((f, i) => {
                                if (('text').includes(f?.type!)) {
                                    if ((['firstName', 'lastName']).includes(f?.key as string)) {
                                        return (
                                            <MotionDiv className='flex gap-3 w-full'
                                                key={`${f?.label}: ${i}`}
                                            >
                                                <TextField
                                                fullWidth
                                                    error={eFs && eFs[f?.key as keyof ContactDocumentType]?.error!}
                                                    value={contactForm && contactForm[f?.key as keyof ContactDocumentType]}
                                                    label={f?.label}
                                                    variant='filled'
                                                    size='small'
                                                    color='secondary'
                                                    onChange={(e) => { changeHandler(f as FormField<ContactDocumentType>, e, null, null) }}
                                                />
                                            </MotionDiv>
                                        )
                                    }
                                }
                            })
                        }
                    </MotionDiv>
                    <MotionDiv
                        className='flex gap-3'
                    >
                        {
                            contactFormDocument?.map((f, i) => {
                                if (('text').includes(f?.type!)) {
                                    if ((['company']).includes(f?.key as string)) {
                                        return (
                                            <MotionDiv className='flex gap-3 md:w-1/2 pr-1'
                                                key={`${f?.label}: ${i}`}
                                            >
                                                <TextField
                                                fullWidth
                                                    error={eFs && eFs[f?.key as keyof ContactDocumentType]?.error!}
                                                    value={contactForm && contactForm[f?.key as keyof ContactDocumentType]}
                                                    label={f?.label}
                                                    variant='filled'
                                                    size='small'
                                                    color='secondary'
                                                    onChange={(e) => { changeHandler(f as FormField<ContactDocumentType>, e, null, null) }}
                                                />
                                            </MotionDiv>
                                        )
                                    }
                                }
                            })
                        }
                    </MotionDiv>
                    <MotionDiv
                        className='flex gap-3 justify-center'
                    >
                        {
                            contactFormDocument?.map((f, i) => {
                                if (('text').includes(f?.type!)) {
                                    if ((['textarea']).includes(f?.key as string)) {
                                        return null
                                    }
                                    if ((['email', 'phone']).includes(f?.key as string)) {
                                        return (
                                            <MotionDiv className='flex gap-3 w-full'
                                                key={`${f?.label}: ${i}`}
                                            >
                                                <TextField
                                                fullWidth
                                                    error={eFs && eFs[f?.key as keyof ContactDocumentType]?.error!}
                                                    value={contactForm && contactForm[f?.key as keyof ContactDocumentType]}
                                                    label={f?.label}
                                                    variant='filled'
                                                    size='small'
                                                    color='secondary'
                                                    onChange={(e) => { changeHandler(f as FormField<ContactDocumentType>, e, null, null) }}
                                                />
                                            </MotionDiv>
                                        )
                                    }
                                }
                            })
                        }
                    </MotionDiv>
                    {
                        contactFormDocument?.map((f, i) => {

                            if (('message').includes(f?.key as string)) {
                                return (
                                    <TextField
                                        error={eFs && eFs[f?.key as keyof ContactDocumentType]?.error!}
                                        value={contactForm && contactForm[f?.key as keyof ContactDocumentType]}
                                        multiline
                                        fullWidth
                                        rows={3}
                                        key={`${f?.label}: ${i}`}
                                        label={f?.label}
                                        variant='filled'
                                        size='small'
                                        color='secondary'
                                        onChange={(e) => { changeHandler(f as FormField<ContactDocumentType>, e, null, null) }}
                                    />
                                )
                            } else if (('radio').includes(f?.type!)) {
                                return (
                                    <MotionDiv
                                        key={`${f?.label}: ${i}`}
                                        className={`${styles.radioWrapper}`}
                                    >

                                        <FormControl>
                                            <FormLabel>
                                                {f?.label}
                                            </FormLabel>
                                            <RadioGroup
                                                className={`${styles.radioCtn}`}
                                                value={contactForm && contactForm[f?.key as keyof ContactDocumentType]}
                                            >
                                                {
                                                    ['employment', 'business', 'collaboration', 'other'].map((o: string, i: number) => {
                                                        return (
                                                            <FormControlLabel
                                                                key={`${o}:${i}`}
                                                                label={o}
                                                                value={o}
                                                                control={
                                                                    <Radio
                                                                        onChange={(e) => { changeHandler(f as FormField<ContactDocumentType>, e, null, o) }}
                                                                    />
                                                                }
                                                            />
                                                        )
                                                    })
                                                }
                                            </RadioGroup>
                                        </FormControl>

                                    </MotionDiv>
                                )
                            }

                            return null
                        })
                    }

                    <MotionDiv
                        className='mt-3'
                    >
                        <ButtonPro
                            className='w-full flex justify-center'
                            type='submit'
                            label={'Submit'}
                            variant='contained'
                            color='secondary'
                        />
                    </MotionDiv>
                </MotionForm>
            </MotionDiv>
        </>


    )
}



export default LetsWorkForm;