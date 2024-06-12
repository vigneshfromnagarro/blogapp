import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react";
import TextAreaInput from "../UI/Input/Textarea";
import { data } from "../../data/data";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAllBlogData } from "../../context/BlogContext";

const categories = ["sports","cinema","space","business","music","education"]

const EditPost = ({ handleClose }) => {
    const {viewData,setBlogData,viewIndex,setViewData} = useAllBlogData()
    const [editPostData,setEditPostData] = useState({title:viewData[0].title,category:viewData[0].category,content:viewData[0].content})

    const notify = () => toast.success("Post edited successfully!",{
        autoClose:1000,
        onClose:()=>{
            handleClose()
        }
    });

    const validate = () => {
        if(editPostData?.title?.length>=1 && editPostData?.category?.length>=1 && editPostData?.content?.length>=1){
            return true
        }
        return false
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
         // checking validation
         if(validate()){
        // edit PostData to the existing blog post
        const {title,category,content} = editPostData
        const edited = []
        data.map((d,i)=>{
            if(i === viewIndex){
                edited.push({title,category,content,like:d.like})
            }else {
                edited.push(d)
            }
        })
        data[viewIndex] = {title:editPostData.title,category:editPostData.category,content:editPostData.content,like:data[viewIndex]['like']}
        setBlogData(edited)
        setViewData([editPostData])
        setEditPostData({title:editPostData.title,category:editPostData.category,content:editPostData.content,errors:{title:null,category:null,content:null}})
        notify()
      }
    }

    const onChangeHandler = (e) => {

        const {id,name,value} = e.target

        setEditPostData((prev)=>({
            ...prev,
            [id || name]:value
        }))
    }

    return (
        <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Edit a post
            </Typography><br/>

            <form onSubmit={onSubmitHandler}>

            <TextField id="title" label="Title" variant="outlined" onChange={onChangeHandler} value={editPostData?.title} fullWidth/><br/>
            {editPostData['title'].length === 0 && <Typography variant="subtitle2" style={{color:"red"}}>Title cannot be empty</Typography>}<br/>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="category"
            value={editPostData.category}
            label="Category"
            onChange={onChangeHandler}
            name="category"
            >
            {categories?.map((category,viewIndex)=>{
                return  <MenuItem key={viewIndex}  name="category" value={category}>{category}</MenuItem>
            })}
        </Select>
        </FormControl>
            <br/>
            {editPostData['category'].length === 0 && <Typography variant="subtitle2" style={{color:"red"}}>Category cannot be empty</Typography>}
            <br/><br/>
       <TextAreaInput value={editPostData.content} onChange={onChangeHandler} label="Content" id="content"/><br/>
       {editPostData['content'].length === 0 && <Typography variant="subtitle2" style={{color:"red"}}>Content cannot be empty</Typography>}<br/>
            {/* footer */}
            <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <Button variant="contained" type="submit">Update</Button>
            <Button variant="contained" onClick={handleClose}>Close</Button>
            </Stack>
            
            </form>
        </Box>
    )
}

export default EditPost