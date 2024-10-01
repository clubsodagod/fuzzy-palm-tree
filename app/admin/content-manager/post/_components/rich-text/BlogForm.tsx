import React, { ChangeEvent, useRef, useState } from 'react'
import styles from '../styles.module.css'
import { BlogDocumentType } from '@/library/db/models/blog';
import { ErrorObject } from '@/library/types/common';
import { FormField } from '@/library/types/form/identifiers';
import { TextField, FormControl, RadioGroup, FormControlLabel, Radio, Checkbox, Button, Chip, Stack } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import { motion } from 'framer-motion';
import { blogFormDocument } from '@/library/const/forms/blog';
import { ICategory } from '@/library/db/models/category';
import { ISubcategory } from '@/library/db/models/subcategory';
import AddRoundedIcon from '@mui/icons-material/AddRounded';


const BlogFormDocument: React.FC<{
    article: Partial<BlogDocumentType>,
    eFs: ErrorObject<Partial<BlogDocumentType>>,
    handleChange: (
        field: FormField<BlogDocumentType>,
        event?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        newValue?: string,
        editor?: boolean,
        subcategoryId?: string,
        clickedCategoryId?: string,
        tag?: string,
        removeTag?:boolean,
    ) => void,
    value: string,
    setArticle: (arg0: any) => void;
    categories: ICategory[] | null;
    subcategories: Partial<ISubcategory[]>;
    initSubcategories: (id: string) => void;
    handleSubcategoryToggle: (id: string) => void;
}> = ({
    article,
    eFs,
    handleChange,
    value,
    setArticle,
    categories,
    initSubcategories,
    subcategories,
    handleSubcategoryToggle,
}) => {

        const editorRef = useRef<any>(null);
        const [tag, setTag] = useState<string>("");

        const handleDelete = (
            tag:string, 
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined,
            field:FormField<BlogDocumentType>,
        ) => {
            handleChange(
                field, e, undefined, undefined, undefined,undefined,tag
            );
        }

        return (
            <motion.div
                key={'blogForm'}
                className={`${styles.richTextWrapper}`}
            >
                {
                    blogFormDocument?.map((bF, i: number) => {

                        if (bF && bF.type === "text" && bF.key in article!) { // Type narrowing to ensure cf is not undefined

                            if (["featuredImg", "featuredVideo",].some(k => bF.key.includes(k))) {
                                const key = bF.key as 'featuredImg' | 'featuredVideo';  // Explicitly type the key as 'photo' or 'video'

                                // Narrow down the correct error field, making sure to cast correctly
                                const errorField = eFs && (eFs[key] as ErrorObject<BlogDocumentType['featuredImg']> | ErrorObject<BlogDocumentType['featuredVideo']>);

                                return (
                                    <TextField
                                        error={errorField && bF.name.includes("landscape") ? errorField.landscape?.error! : errorField?.portrait?.error!}
                                        fullWidth
                                        label={bF.label}
                                        name={bF.name as string}  // `name` is narrowed down to string
                                        className={styles.catFormField}
                                        value={bF.key.includes("featuredImg")
                                            ? article.featuredImg && article.featuredImg[bF.name.includes("landscape") ? 'landscape' : 'portrait'] // Access the correct photo sub-property
                                            : article.featuredVideo && article.featuredVideo[bF.name.includes("landscape") ? 'landscape' : 'portrait']} // Access the correct video sub-property
                                        key={`${bF.key} ${bF.name} ${i} ${bF.label} `}
                                        id='category'
                                        onChange={(e) => { handleChange(bF as FormField<BlogDocumentType>, e) }}
                                    />
                                );
                            } else {
                                // Handle all other text fields
                                return (
                                    <TextField
                                        error={eFs && eFs[bF.key as keyof BlogDocumentType]?.error!}
                                        rows={4}
                                        label={bF.label}
                                        name={bF.name as string}  // `name` is narrowed down to string
                                        className={styles.catFormField}
                                        value={article && article[bF.name as keyof BlogDocumentType]}  // Ensure correct value type
                                        key={`${bF.key} ${bF.name} ${i} ${bF.label} `}
                                        id='category'
                                        onChange={(e) => { handleChange(bF as FormField<BlogDocumentType>, e) }}
                                    />
                                );
                            }

                        } else if (bF && bF.type === "textarea" && bF.key in article!) {
                            return (
                                <TextField
                                    error={eFs && eFs[bF.key as keyof BlogDocumentType]?.error!}
                                    fullWidth
                                    multiline
                                    rows={4}
                                    label={bF.label}
                                    name={bF.name as string}  // `name` is narrowed down to string
                                    className={styles.catFormField}
                                    value={article && article[bF.name as keyof BlogDocumentType]}  // Ensure correct value type
                                    key={`${bF.key} ${bF.name} ${i} ${bF.label}`}
                                    id='category'
                                    onChange={(e) => { handleChange(bF as FormField<BlogDocumentType>, e) }}
                                />
                            );
                        } else if (bF && bF.type === "editor" && bF.key in article!) {

                            {/* Editor */ }
                            return (
                                <motion.div
                                    key={`${bF.key} ${bF.name} ${i} ${bF.label}`}

                                >
                                    <Editor
                                        apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
                                        init={{
                                            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                                        }}
                                        onInit={(evt, editor) => {
                                            editorRef.current = editor;
                                        }}
                                        value={value}
                                        onEditorChange={
                                            (newValue) => {
                                                handleChange(bF as FormField<BlogDocumentType>, undefined, newValue, true)
                                            }
                                        }
                                    />
                                </motion.div>
                            )
                        } else if (bF && bF.type === "radio" && bF.key in article! && bF.name === "category") {
                            {/* identifiers */ }
                            return (
                                <div
                                    key={`${bF.key} ${bF.name} ${i} ${bF.label}`}
                                >
                                    <p className={`${styles.richHeader}`}>
                                        Categories
                                    </p>
                                    <motion.div
                                        className={`${styles.identifierCtn}`}
                                    >

                                        <FormControl>
                                            <RadioGroup
                                                aria-labelledby="controlled-radio-buttons-group"
                                                name="controlled-radio-buttons-group"
                                                value={article.category ? article.category : null}

                                            >
                                                {categories?.map((c, i: number) => {
                                                    return (
                                                        <FormControlLabel key={`${c._id}`} value={c._id} control={<Radio onChange={(e) => { handleChange(bF as FormField<BlogDocumentType>, e, undefined, undefined, undefined, c?._id as unknown as string) }} size='small' />} label={c.name} />
                                                    )
                                                })}
                                            </RadioGroup>
                                        </FormControl>
                                    </motion.div>
                                </div>

                            )
                        } else if (bF && bF.type === "checkbox" && bF.key in article! && bF.name === "subcategories") {

                            {/* identifiers */ }
                            return (
                                <div
                                    key={`${bF.key} ${i} ${bF.type}`}
                                >
                                    <p className={`${styles.richHeader}`}>
                                        Subcategories
                                    </p>
                                    <motion.div
                                        className={`${styles.identifierCtn}`}
                                    >

                                        <FormControl>
                                            <RadioGroup
                                                aria-labelledby="controlled-radio-buttons-group"
                                                name="controlled-radio-buttons-group"
                                            >
                                                {subcategories?.map((s, i: number) => {

                                                    const keyName = s?._id!;
                                                    return (
                                                        <FormControlLabel
                                                            key={`${keyName as string}`}
                                                            control={
                                                                <Checkbox
                                                                    size='small'
                                                                    checked={article?.subcategories?.includes(s?._id as unknown as string)}
                                                                    onChange={(e) => {
                                                                        // Handle change and pass the necessary arguments
                                                                        handleChange(
                                                                            bF as FormField<BlogDocumentType>, // FormField object
                                                                            e, // Event
                                                                            undefined, // Not using newValue in this case
                                                                            undefined, // No explicit setValue function
                                                                            s?._id as string // Pass the subcategory ID
                                                                        );
                                                                    }}
                                                                />
                                                            }
                                                            label={s?.name}
                                                        />
                                                    )
                                                })}
                                            </RadioGroup>
                                        </FormControl>
                                    </motion.div>
                                </div>

                            )
                        } else if (bF && bF.key === "tags" && bF.key in article!) {

                            return (
                                <motion.div
                                    key={`${bF.key} ${bF.name} ${i} ${bF.label}`}
                                    className={`${styles.tagsCtn}`}
                                >
                                    <p className={`${styles.richHeader}`}>
                                        Tags
                                    </p>

                                    {
                                        article.tags && article?.tags.length > 0 &&
                                        <Stack direction="row" spacing={1}>
                                            {
                                                article?.tags.map((t: string, i: number) => {
                                                    return (
                                                        <Chip
                                                            key={`${t}:${i}`}
                                                            label={t}
                                                            onDelete={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined)=>{
                                                                handleDelete(
                                                                    t,
                                                                    e,
                                                                    bF as FormField<BlogDocumentType>
                                                                );
                                                            }}
                                                        />
                                                    )
                                                })
                                            }
                                        </Stack>

                                    }


                                    <motion.div
                                        className={`${styles.tagInputCtn}`}
                                    >
                                        <TextField
                                            size='small'
                                            label={bF.label}
                                            name={bF.name}
                                            value={tag}
                                            onChange={(e) => { setTag(e.target.value);console.log(tag);}}
                                        />
                                        <Button
                                            onClick={
                                                (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined) => {
                                                    handleChange(
                                                        bF as FormField<BlogDocumentType>,
                                                        e,
                                                        undefined,
                                                        undefined,
                                                        undefined,
                                                        undefined,
                                                        tag,
                                                        false
                                                    );
                                                    setTag('');
                                                }}>
                                            <AddRoundedIcon />
                                        </Button>
                                    </motion.div>

                                </motion.div>
                            )
                        }
                    })
                }

            </motion.div>
        )
    }



export default BlogFormDocument;