'use client'

import { PartnershipInterest, RealEstatePartnershipForm } from '@/library/types/contact';
import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import styles from '../../../../investments.module.css'
import { CustomTextField } from './custom-styled-mui-components';



const PartnershipForm = () => {

    const [interest, setInterest] = useState<PartnershipInterest | "">("")
    const [buyerIndex, setBuyerIndex] = useState<number>(0);
    const [sellerIndex, setSellerIndex] = useState<number>(0);
    const [jvIndex, setJVIndex] = useState<number>(0);
    const [form, setForm] = useState<Partial<RealEstatePartnershipForm>>({});

    const PartnershipChoice = () => {
        return (
            <div
            className={`${styles.partnershipBtnCtn}`}
            >

                <Button 
                variant='outlined' 
                id='Buyer' 
                onClick={(e:React.MouseEvent)=>{setInterest(e.currentTarget.id as PartnershipInterest); console.log(interest);
                }}>
                    Buyer
                </Button>

                <Button 
                variant='outlined' 
                id='Seller' 
                onClick={(e:React.MouseEvent)=>{setInterest(e.currentTarget.id as PartnershipInterest)}}
                >
                    Seller
                </Button>

                <Button 
                variant='outlined' 
                id='JointVenture' 
                onClick={(e:React.MouseEvent)=>{setInterest(e.currentTarget.id as PartnershipInterest)}}
                >
                    Joint Venture
                </Button>
                
            </div>
        )
    }

    const CommonPartnershipForm = () => {

        return (
            <div>
                <Stack direction="column" spacing={2}>
                    <Stack direction='row' spacing={3}  justifyContent='center'>
                        <CustomTextField
                        className={`${styles.textField}`}
                        label="First Name"
                        value={form.firstName}
                        color='warning'
                        />
                        <CustomTextField
                        className={`${styles.textField}`}
                        label="Last Name"
                        value={form.lastName}
                        color='warning'
                        />                    
                    </Stack>
                    <Stack direction='row' spacing={3}  justifyContent='center'>
                        <CustomTextField
                        className={`${styles.textField}`}
                        label="Phone"
                        value={form.phoneNumber}
                        color='warning'
                        />
                        <CustomTextField
                        className={`${styles.textField}`}
                        label="Email"
                        value={form.email}
                        color='warning'
                        />                    
                    </Stack>
                    <Stack direction='row' spacing={3}  justifyContent='center'>    
                        <CustomTextField
                        className={`${styles.textField}`}
                        label="Company Name"
                        value={form?.companyName}
                        color='warning'
                        />
                        <CustomTextField
                        className={`${styles.textField}`} 
                        label="Role"
                        value={form?.rolePosition}
                        color='warning'
                        />                    
                    </Stack>

                </Stack>                
            </div>

        )
    };

    const BuyerForm = () => {



        return (
            <></>
        )
    }

    const formView = () => {

        switch (interest) {
            case 'Buyer':
                
                break;
        
            case 'Seller':
            
            break;

            case 'JointVenture':
                
                break;
        
            default:
                return (
                    <>
                        <form className={styles.formWrapper}>
                            <CommonPartnershipForm />
                        </form>                  
                    </>

                )
                
        }
    }

    return (
        <div className={`${styles.partnershipWrapper}`}>

            {formView()}
            <PartnershipChoice />  
        </div>
    )
}

export default PartnershipForm