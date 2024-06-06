import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react";
import TextAreaInput from "../UI/Input/Textarea";

const categories = ["sports","cinema","space","business","music","education"]

const NewPost = ({ handleClose }) => {
    const [newPostData,setNewPostData] = useState({title:'',category:'',content:'',errors:{title:null,category:null,content:null}})

    const onSubmitHandler = (e) => {
        e.preventDefault()
        // add newPostData to the existing blog post
        handleClose()
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

            <TextField id="title" label="Title" variant="outlined" onChange={onChangeHandler} value={newPostData?.title} fullWidth/><br/><br/>
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
                return  <MenuItem  name="category" value={category}>{category}</MenuItem>
            })}
        </Select>
        </FormControl>
            <br/><br/>
       <TextAreaInput onChange={onChangeHandler} label="Content" id="content"/>
            {/* footer */}
            <Stack direction="row" justifyContent="flex-end">
            <Button type="submit">Submit</Button>
            <Button onClick={handleClose}>Close</Button>
            </Stack>
            
            </form>

        </Box>
    )
}

export default NewPost