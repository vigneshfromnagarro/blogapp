import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import NewPost from "./NewPost";
import BlogCard from "../UI/Card";
import ViewBlog from "./ViewBlog";
import { useAllBlogData } from "../../context/BlogContext";

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
    
    const { openNewPost,
        blogData,
        openViewPage,
        viewData,
        openNewPostHandler,
        closeNewPostHandler,
        viewClickHandler,
        navigateHandler} = useAllBlogData()

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
                    <NewPost/>
                </Box>
            </Modal>
            
            {openViewPage ? <ViewBlog data={viewData}/> : <BlogCard data={blogData} onClickHandler={viewClickHandler}/>}
        </Box>
    )
}

export default Blog

