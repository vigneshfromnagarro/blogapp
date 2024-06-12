import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react";
import TextAreaInput from "../UI/Input/Textarea";
import {data} from '../../data/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAllBlogData } from "../../context/BlogContext";

const categories = ["sports","cinema","space","business","music","education"]

const NewPost = () => {
    const [newPostData,setNewPostData] = useState({title:'',category:'',content:''})
    const {setBlogData,closeNewPostHandler} = useAllBlogData()

    const notify = () => toast.success("Post added successfully!",{
        autoClose:1000,
        onClose:()=>{
            closeNewPostHandler()
        }
    });

    const validate = () => {
        if(newPostData?.title?.length>=1 && newPostData?.category?.length>=1 && newPostData?.content?.length>=1){
            return true
        }
        return false
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        // checking validation
        if(validate()){
            
            const {title,category,content} = newPostData
            const filteredPayload = {title,category,content}
            setBlogData((prev)=>[...prev,filteredPayload])
            data.push(filteredPayload)
            setNewPostData({title:'',category:'',content:''})
            notify()
        }
    }

   

    const onChangeHandler = (e) => {

        const {id,name,value} = e.target
            setNewPostData((prev)=>({
                ...prev,
                [id || name]:value
            }))

    }

    return (
        <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Create a post
            </Typography><br/>

            <form onSubmit={onSubmitHandler}>

            <TextField id="title" label="Title" variant="outlined" onChange={onChangeHandler} value={newPostData?.title} fullWidth/><br/>
            {newPostData['title'].length === 0 && <Typography variant="subtitle2" style={{color:"red"}}>Title cannot be empty</Typography>}<br/>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="category"
            value={newPostData.category}
            label="Category"
            onChange={onChangeHandler}
            name="category"
            >
            {categories?.map((category,index)=>{
                return  <MenuItem key={index}  name="category" value={category}>{category}</MenuItem>
            })}
        </Select>
        </FormControl>
        {newPostData['category'].length === 0 && <Typography variant="subtitle2" style={{color:"red"}}>Category cannot be empty</Typography>}
            <br/><br/>
       <TextAreaInput onChange={onChangeHandler} label="Content" id="content"/><br/>
       {newPostData['content'].length === 0 && <Typography variant="subtitle2" style={{color:"red"}}>Content cannot be empty</Typography>}<br/>
            {/* footer */}
            <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <Button variant="contained" type="submit">Submit</Button>
            <Button variant="contained" onClick={closeNewPostHandler}>Close</Button>
            </Stack>
            
            </form>
        <ToastContainer/>
        </Box>
    )
}

export default NewPost