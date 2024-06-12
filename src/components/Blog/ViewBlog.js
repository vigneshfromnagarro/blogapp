import { Box } from "@mui/material"
import BlogCard from "../UI/Card"
import ViewBlogHeader from "./ViewBlogHeader"

const ViewBlog = (props) => {
    return(
        <Box>
            <ViewBlogHeader/>
            <BlogCard data={props.data}/>
        </Box>
    )
}

export default ViewBlog