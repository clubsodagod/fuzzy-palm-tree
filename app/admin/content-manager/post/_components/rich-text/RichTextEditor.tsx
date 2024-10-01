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
import { useMDSession } from '@/app/context/sub-context/SessionContext';
import mongoose from 'mongoose';

const RichTextEditor: React.FC<{
  editorMode: boolean;
  setSubmittable: (arg0: boolean) => void;
  update?: boolean;
  handleSave:(blogDocument:Partial<BlogDocumentType>)=>void;
  handleSubmitBlog:(blogDocument:Partial<BlogDocumentType>)=>Promise<void>;
}> = ({
  editorMode,
  update,
  setSubmittable,
  handleSave,
  handleSubmitBlog,
}) => {

    const {
      session, status,
    } = useMDSession();
    const [categories, setCategories] = useState<ICategory[] | null>(null);
    const [subcategories, setSubcategories] = useState<Partial<ISubcategory[]>>([]);
    const [article, setArticle] = useState<BlogDocumentType | Partial<BlogDocumentType>>({});
    const [value, setValue] = useState("Allow life to inspire you...");
    const [eRM, setErrorResponseMessage] = useState<Partial<ErrorObject<BlogDocumentType>>>({});
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
      clickedCategoryId?:string,
      tag?:string,
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
          initSubcategories, clickedCategoryId,tag, 
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

    useEffect(()=> {
      
      if (!userSet) {
        if (status === "loading") {
            console.log(session?.user);
          return
        } else if (status === "authenticated") {
          if (session?.user) {
            console.log(session);
            
            const setAuthor = () => {
              setArticle((prevForm:Partial<BlogDocumentType>)=>({
                ...prevForm,
                user:session.user?._id as unknown as string,
              }))
            }
            setAuthor()
            setUserSet(!userSet)           
          } else {
            return
          }
        }        
      } else {
        return
      }
      console.log(article);
      
    },[session?.user, status, userSet, article]);

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

    useEffect(()=> {
      if (update) {
        console.log(article);
        
        handleSubmitBlog(article)
      }
    },[update, article, handleSubmitBlog])

    return (

      <motion.div
        className={`${styles.componentWrapper}`}
      >
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
              <PostPreview blogDocument={article} subcategories={subcategories} categories={categories}/>
            )
        }


      </motion.div>
    )
  }

export default RichTextEditor