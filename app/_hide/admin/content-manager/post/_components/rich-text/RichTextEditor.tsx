import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles.module.css';
import PostPreview from '../preview/PostPreview';
import { ErrorObject, Post } from '@/library/types/common';
import { BlogDocumentType } from '@/library/db/models/blog';
import { ISubcategory } from '@/library/db/models/subcategory';
require('dotenv').config();
import { handleBlogChange, handleSubcategoryToggleBlogCreate, initBlogDocument, initBlogErrorFields, initCategoriesBlogCreate, initSubcategoriesBlogCreate } from '@/utility/admin/blog/create';
import { FormField } from '@/library/types/form/identifiers';
import { ICategory } from '@/library/db/models/category';
import BlogFormDocument from './BlogForm';
import { useMDSession } from '@/app/_hide/_context/sub-context/SessionContext';
import mongoose from 'mongoose';
import { Stack, Alert } from '@mui/material';

const RichTextEditor: React.FC<{
  editorMode: boolean;
  setSubmittable: (arg0: boolean) => void;
  update?: boolean;
  handleSave: (blogDocument: Partial<BlogDocumentType>) => void;
  handleSubmitBlog: (blogDocument: Partial<BlogDocumentType>) => Promise<void>;
  status: { error: boolean, message: string } | undefined;
}> = ({
  editorMode,
  update,
  setSubmittable,
  handleSave,
  handleSubmitBlog,
  status: responseStatus,
}) => {

    const {
      session, status,
    } = useMDSession();
    const [categories, setCategories] = useState<ICategory[] | null>(null);
    const [subcategories, setSubcategories] = useState<Partial<ISubcategory[]>>([]);
    const [article, setArticle] = useState<BlogDocumentType | Partial<BlogDocumentType>>({});
    const [value, setValue] = useState("Allow life to inspire you...");
    const [eRM, setErrorResponseMessage] = useState<{ error: boolean, message: string } | undefined>(undefined);
    const [eFs, setErrorFields] = useState<Partial<ErrorObject<BlogDocumentType>>>({});
    const [userSet, setUserSet] = useState<boolean>(false)




    // handle subcategories on click of category
    const handleSubcategoryToggle = (t: any) => {
      handleSubcategoryToggleBlogCreate(
        t, article, setArticle
      )
    };

    // init subcategories
    const initSubcategories = (id: string) => {
      initSubcategoriesBlogCreate(
        id, setArticle, setSubcategories, categories,
      )
    }

    // handleChange function
    const handleChange = (
      field: FormField<BlogDocumentType>,
      event?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      newValue?: string,
      editor?: boolean,
      clickedSubcategoryId?: string,
      clickedCategoryId?: string,
      tag?: string,
    ) => {

      // check where the change is coming from
      if (editor) {
        handleBlogChange(
          handleSave,
          article,
          setSubmittable,
          field,
          eFs, setErrorFields, setArticle, setValue, event, newValue,
        )
      } else {
        handleBlogChange(
          handleSave,
          article, setSubmittable, field,
          eFs, setErrorFields, setArticle, setValue,
          event, undefined, handleSubcategoryToggle, clickedSubcategoryId,
          initSubcategories, clickedCategoryId, tag,
        )
      }
      console.log(article);

    };

    useEffect(() => {
      const handleInit = async () => {
        await initCategoriesBlogCreate(setCategories);
      };
      handleInit();
      initBlogDocument(setArticle);
      initBlogErrorFields(setErrorFields);

    }, []);

    useEffect(() => {

      if (!userSet) {
        if (status === "authenticated") {
          if (session) {
            console.log(session);

            const setAuthor = () => {
              setArticle((prevForm: Partial<BlogDocumentType>) => ({
                ...prevForm,
                user: session.user?._id as unknown as string,
              }))
            }
            setAuthor()
            setUserSet(!userSet)
          } else {
            return
          }
        }
      } 
      console.log(article);

    }, [userSet,]);

    useEffect(() => {
      {
        eFs && console.log(eFs);
        ;
      }
    }, [eFs])

    useEffect(() => {
      {
        value && console.log("");
      }
    }, [value])

    useEffect(() => {
      {
        subcategories && console.log('');
      }
    }, [subcategories]);

    useEffect(() => {
      if (update) {
        console.log(article);

        handleSubmitBlog(article);
        setUserSet(!userSet)
      }
    }, [update, article, handleSubmitBlog, userSet]);

    useEffect(() => {
      {
        responseStatus !== undefined &&
          setErrorResponseMessage(responseStatus);
          if(!eRM?.error) {
            // clear form for successful post
            setTimeout(()=>{
              const handleInit = async () => {
                await initCategoriesBlogCreate(setCategories);
              };
              handleInit();
              setArticle({});
              setSubcategories([]);
              setValue("Allow life to inspire you...");
              initBlogDocument(setArticle);
              initBlogErrorFields(setErrorFields);
              setTimeout(()=>{
                setErrorResponseMessage(undefined);
              },1000)
            },3500)
          } else {
            return
          }
      }
    }, [responseStatus, eRM?.error])

    useEffect(() => {
      {
        eRM && console.log(eRM);
      }
    }, [eRM])

    useEffect(()=> {
      {
        article.user && console.log(article.user, article);
      }
    },[article.user])

    return (

      <motion.div
        className={`${styles.componentWrapper}`}
      >
        {
          eRM?.error == false ?

          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity={eRM.error ? `error` : `success` }>{eRM.message}</Alert>
          </Stack>
          : eRM?.error == true ?
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity={eRM?.error ? `error` : `success` }>{eRM?.message}</Alert>
          </Stack>
          :
          null
        }
        {
          editorMode
            ? (
              <BlogFormDocument
                article={article}
                eFs={eFs}
                setArticle={setArticle}
                handleChange={handleChange}
                value={value}
                categories={categories}
                subcategories={subcategories}
                handleSubcategoryToggle={handleSubcategoryToggle}
                initSubcategories={initSubcategories}
              />
            )
            : (
              <PostPreview blogDocument={article} subcategories={subcategories} categories={categories} />
            )
        }


      </motion.div>
    )
  }

export default RichTextEditor