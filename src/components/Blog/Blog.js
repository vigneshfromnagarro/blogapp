import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import NewPost from "./NewPost";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4
    // maxHeight:400,
    // style: {
    //     overflowY: 'auto'
    // }
};

const Blog = () => {
    const [openNewPost, setOpenNewPost] = useState(false)

    const openNewPostHandler = () => {
        setOpenNewPost(true)
    }

    const closeNewPostHandler = () => {
        setOpenNewPost(false)
    }

    return (
        <Box>
            <Stack direction="row" mt={2} justifyContent="space-around">
                <Typography variant="h6">Blog App</Typography>
                <Button variant="contained" onClick={openNewPostHandler}>New Post</Button>
            </Stack>
            <Modal
                open={openNewPost}
                onClose={closeNewPostHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <NewPost handleClose={closeNewPostHandler} />
                </Box>
            </Modal>
        </Box>
    )
}

export default Blog

