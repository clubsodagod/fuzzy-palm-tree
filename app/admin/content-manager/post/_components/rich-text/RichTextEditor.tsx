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

const RichTextEditor: React.FC<{
  editorMode: boolean;
  setSubmittable: (arg0: boolean) => void;
  update?: boolean;
}> = ({
  editorMode,
  update,
  setSubmittable,
}) => {

    const editorRef = useRef<any>(null);
    const [categories, setCategories] = useState<ICategory[] | null>(null);
    const [subcategories, setSubcategories] = useState<Partial<ISubcategory[]>>([]);
    const [checkedSubcategories, setCheckedSubcategories] = useState<Partial<string[]>>([]);
    const [article, setArticle] = useState<BlogDocumentType | Partial<BlogDocumentType>>({});
    const [value, setValue] = useState("Allow life to inspire you...");
    const [text, setText] = useState("");
    const [eRM, setErrorResponseMessage] = useState<Partial<ErrorObject<BlogDocumentType>>>({});
    const [eFs, setErrorFields] = useState<Partial<ErrorObject<BlogDocumentType>>>({});


    // handleChange function
    const handleChange = (
      field: FormField<BlogDocumentType>,
      event?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      newValue?: string,
      editor?: boolean,
    ) => {

      // check where the change is coming from
      if (editor) {
        handleBlogChange(
          setSubmittable,
          field,
          eFs, setErrorFields, setArticle, setValue, event, newValue,
        )
      } else {
        handleBlogChange(
          setSubmittable,
          field, eFs, setErrorFields, setArticle, setValue, event, undefined
        )
      }
    };

    // implement function to submit blog article for creation
    const handleSubmitBlog = () => {

      // validate fields
    };

    const handleSubcategoryToggle = (t: any) =>  {
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

    useEffect(() => {
      const handleInit = async () => {
        await initCategoriesBlogCreate(setCategories);
      };
      handleInit();
      initBlogDocument(setArticle);
      initBlogErrorFields(setErrorFields);
    }, []);

    useEffect(() => {
      {
        eFs && console.log(eFs);
      }
    }, [eFs])

    useEffect(() => {
      {
        value && console.log(value);
      }
    }, [value])

    useEffect(() => {
      {
        subcategories && console.log('');
      }
    }, [subcategories])

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
              <PostPreview photo={article.featuredImg?.portrait} title={article.title} body={article.content} />
            )
        }


      </motion.div>
    )
  }

export default RichTextEditor