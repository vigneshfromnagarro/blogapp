import { Box } from "@mui/material"
import BlogCard from "../UI/Card"
import ViewBlogHeader from "./ViewBlogHeader"

const ViewBlog = (props) => {
    return(
        <Box>
            <ViewBlogHeader blogData={props.blogData} setViewData={props.setViewData} index={props.index} data={props.data} handleClose={props.handleClose} setBlogData={props.setBlogData}/>
            <BlogCard data={props.data} />
        </Box>
    )
}

export default ViewBlog