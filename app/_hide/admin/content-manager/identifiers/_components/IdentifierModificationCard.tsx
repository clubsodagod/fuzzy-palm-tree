'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../../styles.module.css';
import { CategoryDocumentType, ICategory } from '@/library/db/models/category';
import { Avatar, Chip, } from '@mui/material';
import { ISubcategory, SubcategoryDocumentType } from '@/library/db/models/subcategory';
import IdentifiersActions from './IdentifiersActions';
import { handleAddSubcategory, handleClick, handlePopulateFields, handleRemoveSubcategory, handleSubmit, isCategory, } from '@/utility/admin/identifiers';
import CardForm from './IdentifierCardForm';
import ClickedIdentifierInformation from './ClickedIdentiferInfo';
import CardTop from './CardTop';
import { ObjectId } from 'mongoose';
import { initErrorFields, StatusResponseObject } from '@/utility/admin/identifiers/create-card';
import { FormField, StatusObject } from '@/library/types/form/identifiers';
import { handleModifyCardChange } from '@/utility/admin/identifiers/modify-card';

export type ManageAddRemoveSubcategoryFunction = (method: "add" | "remove", subcategoryId: string, category: Partial<ICategory>) => void


const IdentifierModificationCard: React.FC<{
    identifier: ICategory | ISubcategory;
    subcategories: ISubcategory[] | undefined;
    index: number;
    refresh: () => Promise<{ categories: ICategory[], subcategories: ISubcategory[] }> | null;
    category: boolean;
}> = ({ identifier, index, subcategories, refresh, category }) => {



    // init  inclusive and noninclusive subcategories
    const inclusiveInit = () => {
        if (isCategory(identifier)) {

            // Type assertion to ICategory since we have already type checked
            const categoryIdentifier = identifier as ICategory;

            const data = subcategories?.filter((subcategory) =>
                categoryIdentifier.subcategories.some((subId) => subId.toString() === subcategory._id));

            return data
        }
    }

    const noninclusiveInit = () => {
        if (isCategory(identifier)) {

            // Type assertion to ICategory since we have already type checked
            const categoryIdentifier = identifier as ICategory;

            const data = subcategories?.filter((subcategory) =>
                !categoryIdentifier.subcategories.some((subId) => subId.toString() === subcategory._id));

            return data
        }
    }



    // initialize state variables
    const [clicked, setClicked] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [identifierDocument, setIdentifierDocument] = useState<Partial<CategoryDocumentType>>({});
    const [inclusive, setInclusive] = useState<ISubcategory[] | undefined>(inclusiveInit())
    const [noninclusive, setNoninclusive] = useState<ISubcategory[] | undefined>(noninclusiveInit())
    const [update, setUpdate] = useState<boolean>(false);
    const [eRM, setErrorResponseMessage] = useState<Partial<StatusResponseObject>>({});
    const [eFs, setErrorFields] = useState<Partial<{
        category: StatusObject<Partial<CategoryDocumentType>>,
        subcategory: StatusObject<Partial<SubcategoryDocumentType>>,
    }>>({});

    const overlapStyle = index !== 0 ? "overlap" : "";

    // useEffect to trigger the fetching of the document on page load
    useEffect(() => {
        handlePopulateFields(setIdentifierDocument, identifier,category);
        initErrorFields(setErrorFields);
    }, []);

    const manageAddRemoveSubcategory: ManageAddRemoveSubcategoryFunction = async (method, subcategoryId, categoryParameter) => {
        switch (method) {
            case "add":
                handleAddSubcategory(subcategoryId, categoryParameter);
                await refresh()?.then(() => {
                    handlePopulateFields(setIdentifierDocument, identifier,category);
                    setUpdate(!update);
                });
                break;
            case "remove":
                handleRemoveSubcategory(subcategoryId, categoryParameter);
                await refresh()?.then((data) => {
                    handlePopulateFields(setIdentifierDocument, identifier,category);
                    setUpdate(!update);
                });
                break;

            default:
                break;
        }
    };

    // handleChange function
    const handleChange = (
        field: FormField<CategoryDocumentType | SubcategoryDocumentType>,
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        handleModifyCardChange(
            category, field, event,
            setErrorFields, setIdentifierDocument,
        )
    };

    useEffect(() => {

        if (update) {
            console.log(inclusive, noninclusive, identifierDocument);
            setInclusive(inclusiveInit());
            setNoninclusive(noninclusiveInit());
            setUpdate(!update)
        }
    }, [inclusive, noninclusive,]);

    useEffect(() => {
        {
            identifier && console.log("");
            setInclusive(inclusiveInit());
            setNoninclusive(noninclusiveInit());
        }
    }, [identifier])

    useEffect(() => {
        {
            eFs && console.log(eFs);
        }
    }, [eFs]);

    return (
        <motion.div
            className={`${styles.identifierCardModWrapper} ${styles[overlapStyle]}`}
            id={`${identifier._id}`}
            onClick={() => { if (clicked) { return }; handleClick(identifier, setClicked, clicked); }}
        >

            <CardTop
                identifier={identifier}
                identifierDocument={identifierDocument}
                setClicked={setClicked}
                clicked={clicked}
            />


            {
                clicked &&
                <>
                    {
                        !open &&
                        <ClickedIdentifierInformation
                            identifierDocument={identifierDocument}
                            inclusive={inclusive}
                            noninclusive={noninclusive}
                        />
                    }

                    {
                        open &&
                        <CardForm
                            identifierDocument={identifierDocument}
                            inclusive={inclusive}
                            noninclusive={noninclusive}
                            manageAddRemoveSubcategory={manageAddRemoveSubcategory}
                            handleChange={handleChange}
                            category={category}
                            eFs={eFs}
                            eRM={eRM}
                        />
                    }

                    <IdentifiersActions
                        open={open}
                        setOpen={setOpen}
                        handleSubmit={() => { handleSubmit(category,identifier, identifierDocument, refresh,setErrorResponseMessage) }}
                        inclusive={inclusive}
                        noninclusive={noninclusive}
                        identifier={identifier as ICategory}
                        refresh={refresh}
                        setInclusive={setInclusive}
                        setNoninclusive={setNoninclusive}
                    />
                </>
            }

            {
                !clicked &&

                <motion.div
                    className={`${styles.subcategoriesCtn}`}
                >
                    {
                        inclusive?.map((sc: ISubcategory | undefined, i) => {
                            return (
                                <Chip
                                    key={`${i} : subcategory ${sc?.name}`}
                                    variant="outlined" color="primary"
                                    label={sc?.name}
                                    avatar={<Avatar src={sc?.photo?.portrait} />}
                                />
                            )
                        })
                    }
                </motion.div>
            }


        </motion.div>
    )
}

export default IdentifierModificationCard;