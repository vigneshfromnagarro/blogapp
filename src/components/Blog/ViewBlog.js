import { Box } from "@mui/material"
import BlogCard from "../UI/Card"

const ViewBlog = (props) => {
    return(
        <Box>
            <BlogCard data={props.data} />
        </Box>
    )
}

export default ViewBlog