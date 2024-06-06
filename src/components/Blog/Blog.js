import { Box, Button, Stack, Typography } from "@mui/material";
import {useState} from "react";

const Blog = () => {
    const [openNewPost,setOpenNewPost] = useState(false)

    const newPostHandler = () => {

    }

    return (
        <Box>
            <Stack direction="row" mt={2} justifyContent="space-around">
                <Typography variant="h6">Blog App</Typography>
                <Button variant="contained" onClick={newPostHandler}>New Post</Button>
            </Stack>

        </Box>
    )
}

export default Blog

