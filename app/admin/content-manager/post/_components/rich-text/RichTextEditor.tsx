import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import styles from '../styles.module.css';
import PostPreview from '../preview/PostPreview';
import { ErrorObject, Post } from '@/library/types/common';
import { BlogDocumentType } from '@/library/db/models/blog';
import { debounce } from '@/utility/functions';
import { validateField } from '@/utility/functions/forms';
import { CategoryModel } from '@/library/db/models';
import { ICategory } from '@/library/db/models/category';
import { ObjectId } from 'mongoose';
import { ISubcategory } from '@/library/db/models/subcategory';
require('dotenv').config();

const RichTextEditor:React.FC<{
  editorMode:boolean;
}> = ({
  editorMode,
}) => {

  

  const editorRef = useRef<any>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const [categories, setCategories] = useState<ICategory[]|null>(null);
  const [subcategories, setSubcategories] = useState<ISubcategory[]|null>(null);
  const [article, setArticle] = useState<BlogDocumentType | Partial<BlogDocumentType>>({});
  const [error, setErrors] = useState<ErrorObject<BlogDocumentType>>({})
  const [editorContent, setEditorContent] = useState<string>('');
  const [value, setValue] = useState("Allow life to inspire you...");
  const [text, setText] = useState("");
  
  // handle editor changes
  const onEditorInputChange = (newValue:any, editor:any) => {
      setArticle((prevForm)=> ({
        ...prevForm,
        body:newValue,
      }));
      setValue(newValue);
      setText(editor.getContent({ format: "text" }));
  }

  // Debounced version of validation
  const debouncedValidation = debounce((name: keyof BlogDocumentType, value: any) => {
    const { isValid, errorMessage } = validateField(name, value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: { error: !isValid, errorMessage: errorMessage }
    }));
  }, 300);

  // Handle form field changes dynamically
  const handleChange = (name: keyof BlogDocumentType, value: any,) => {
    setArticle((prevArticle) => ({
      ...prevArticle,
      [name]: value,
    }));

    debouncedValidation(name, value);
  };

  // implement function to submit blog article for creation
  const handleSubmitBlog = () => {

    // validate fields
  };

  // init categories
  const initCategories = async () => {
    try {
    const response = await fetch('/api/blog/identifiers/category/get-all');
    const data = await response.json().then((body)=>{
      setCategories(body.categories);
      return body.categories;
    })
    console.log(data);
    
    } catch (error) {
    console.error(error);
    }
};

  // init subcategories
    const initSubcategories = (id:string) => {
      console.log(id);
      // set categories property of article
      setArticle((prevForm)=>({...prevForm,category:id}))


      // filter the selected category id
      const cat = categories?.filter((c) => 
          c._id == id
      )
      console.log(cat);
      
      // use filtered category id to get sub categories
      const sub = cat && cat[0].subcategories;
      console.log(sub);
      
      // setSubcategories(sub);
      
  }

  useEffect(()=>{
    if(categories===null){
      const handleInit = async() => {
        await initCategories();
      }
      handleInit();
      console.log(categories);      
    }
  }, [categories])
  return (

    <motion.div
    className={`${styles.componentWrapper}`}
    >
      {
        editorMode
        ? (
            <motion.div
              className={`${styles.richTextWrapper}`}
              >
              {/* Title Input */}
              <TextField
              ref={titleRef}
              variant='outlined'
              label={`Title`}
              name='title'
              onChange={(e)=>{handleChange("title",e.target.value)}}
              value={article.title}
              />

              {/* Editor */}
              <motion.div>
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
                  init={{
                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                  }}
                  onInit={(evt, editor) => {
                    editorRef.current = editor;
                    setText(editor.getContent({ format: "text" }))
                  }}
                  value={value}
                  onEditorChange={(newValue, editor)=>{ onEditorInputChange(newValue, editor)}}
                />
              </motion.div>
              
              {/* featured image & video */}
              <motion.div
              className={`${styles.featuredImageVideoCtn}`}
              >

                  <div>
                    <p className={`${styles.richHeader}`}>
                      Featured Image
                    </p>
                    <motion.div 
                    className={`${styles.mediaStringCtn}`}
                    >
                      <TextField 
                        value={article.featuredImg?.portrait || ''}  
                        onChange={(e) => {
                          setArticle((prevForm) => ({
                            ...prevForm, 
                            featuredImg: {
                              ...prevForm.featuredImg,  
                              portrait: e.target.value  
                            }
                          }));
                        }}
                        label='Portrait url'
                      />
                      <TextField 
                        value={article.featuredImg?.landscape || ''}  
                        onChange={(e) => {
                          setArticle((prevForm) => ({
                            ...prevForm, 
                            featuredImg: {
                              ...prevForm.featuredImg,  
                              landscape: e.target.value  
                            }
                          }));
                        }}
                      label='Landscape Url'
                      />
                    </motion.div>
                  </div>

                  <div>
                    <p className={`${styles.richHeader}`}>
                      Featured Video
                    </p>
                    <motion.div 
                      className={`${styles.mediaStringCtn}`}
                      >
                        <TextField 
                        value={article.featuredVideo?.portrait || ''}  
                        onChange={(e) => {
                          setArticle((prevForm) => ({
                            ...prevForm, 
                            featuredImg: {
                              ...prevForm.featuredVideo,  
                              portrait: e.target.value  
                            }
                          }));
                        }}
                        label='Portrait url'
                        />
                        <TextField 
                        value={article.featuredVideo?.landscape || ''}  
                        onChange={(e) => {
                          setArticle((prevForm) => ({
                            ...prevForm, 
                            featuredImg: {
                              ...prevForm.featuredVideo,  
                              landscape: e.target.value  
                            }
                          }));
                        }}
                        label='Landscape Url'
                        />
                    </motion.div>
                  </div>

              </motion.div>
              
              {/* identifiers */}
              <motion.div 
                className={`${styles.identifiersCtn}`}
              >

                  {/* categories container */}
                  <div>               
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
                            onChange={(e)=> {setArticle((prevForm)=>({...prevForm,category:e.target.value})); initSubcategories(e.target.value) }}
                          >
                            {categories?.map((c,i:number) => {
                                return (
                                  <FormControlLabel  key={c.id}   value={c._id} control={<Radio size='small' />} label={c.name} />
                                )
                            })}
                          </RadioGroup>
                        </FormControl>
                    </motion.div>                  
                  </div>
 
              </motion.div>

            </motion.div>          
        )
        : (
          <PostPreview photo={article.featuredImg?.portrait} title={article.title} body={article.content} />
        )
      }


    </motion.div>
  )
}

export default RichTextEditor