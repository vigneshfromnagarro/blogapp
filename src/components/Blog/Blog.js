import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import NewPost from "./NewPost";
import {data} from '../../data/data'
import BlogCard from "../UI/Card";
import ViewBlog from "./ViewBlog";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4
};

const Blog = () => {
    const [openNewPost, setOpenNewPost] = useState(false)
    const [blogData,setBlogData] = useState(data)
    const [openViewPage,setOpenViewPage] = useState(false)
    const [viewData,setViewData] = useState([])
    const [viewIndex , setViewIndex] = useState()

    const openNewPostHandler = () => {
        setOpenNewPost(true)
    }

    const closeNewPostHandler = () => {
        setOpenNewPost(false)
    }

    const viewClickHandler = (params) => {
        setOpenViewPage(true)
        setViewData([params])
        console.log(params)
        const selectedIndex = data.map((d,index)=>{
                if(d.title === params.title && d.category === params.category && d.content === params.content){
                    return index
                }
        })
        setViewIndex(selectedIndex)
    }

    const navigateHandler = () => {
        setViewData([])
        setOpenViewPage(false)
    }

    return (
        <Box>
            <Stack direction="row" mt={2} justifyContent="space-around">
                <Typography variant="h5" onClick={navigateHandler} style={{cursor:"pointer"}}>Blog App</Typography>
                <Button variant="contained" onClick={openNewPostHandler}>New Post</Button>
            </Stack>
            <Modal
                open={openNewPost}
                onClose={closeNewPostHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <NewPost handleClose={closeNewPostHandler} setBlogData={setBlogData}/>
                </Box>
            </Modal>
            
            {openViewPage ? <ViewBlog index={viewIndex} data={viewData} handleClose={closeNewPostHandler} setBlogData={setBlogData}/> : <BlogCard data={blogData} onClickHandler={viewClickHandler}/>}
        </Box>
    )
}

export default Blog

