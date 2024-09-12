import React from 'react';
import { motion } from 'framer-motion';
import { TextField } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';

const RichTextEditor = () => {
  return (

    <motion.div>
      
        <motion.div>
        {/* Title Input */}
        <TextField
        variant='outlined'
        />

        <motion.div>
          <Editor
            apiKey={process.env.TINY_MCE_API_KEY}
            init={{
              plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
              toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
            }}
            initialValue="Allow life to inspire you..."
          />
        </motion.div>
      </motion.div>

    </motion.div>
  )
}

export default RichTextEditor