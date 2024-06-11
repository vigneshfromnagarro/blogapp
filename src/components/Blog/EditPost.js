import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react";
import TextAreaInput from "../UI/Input/Textarea";
import {data} from '../../data/data'

const categories = ["sports","cinema","space","business","music","education"]

const EditPost = ({ handleClose,setBlogData,prevdata,index,setViewData }) => {
    const [editPostData,setEditPostData] = useState({title:prevdata[0].title,category:prevdata[0].category,content:prevdata[0].content,errors:{title:null,category:null,content:null}})

    const onSubmitHandler = (e) => {
        e.preventDefault()
        // edit PostData to the existing blog post
        const {title,category,content} = editPostData
        const filteredPayload = {title,category,content}
        const edited = []
        data.map((d,i)=>{
            if(i === index[0]){
                edited.push(filteredPayload)
            }else {
                edited.push(d)
            }
        })
        setBlogData(edited)
        setViewData([editPostData])
        setEditPostData({title:editPostData.title,category:editPostData.category,content:editPostData.content,errors:{title:null,category:null,content:null}})
        handleClose()
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

            <TextField id="title" label="Title" variant="outlined" onChange={onChangeHandler} value={editPostData?.title} fullWidth/><br/><br/>
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
            {categories?.map((category,index)=>{
                return  <MenuItem key={index}  name="category" value={category}>{category}</MenuItem>
            })}
        </Select>
        </FormControl>
            <br/><br/>
       <TextAreaInput value={editPostData.content} onChange={onChangeHandler} label="Content" id="content"/><br/><br/>
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