
import { Box,Button, Modal, Tooltip } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {data} from '../../data/data';
import { useState } from "react";
import EditPost from "./EditPost";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

const ViewBlogHeader = () => {
    const [openEdit , setOpenEdit] = useState(false)
    const {blogData,viewData,index,setBlogData,setOpenViewPage} = useAllBlogData()

    const notify = () => toast.success("Post deleted successfully!",{
        autoClose:1000,
        onClose:()=>{
            setOpenViewPage(false)
        }
    });
    
    const deleteHandler = () => {
        const filteredData = blogData.filter((d,index)=>{
            if(d.title !== viewData[0].title){
                return d
            }})
        data.splice(index,1)
        setBlogData(filteredData)
        notify()
    }

    const likeHandler = () => {
        const likedData = []
        blogData.map((d,index)=>{
            if(d.title === viewData[0].title){
                d['title'] = viewData[0].title
                d['category'] = viewData[0].category
                d['content'] = viewData[0].content
                d['like'] = true
                likedData.push(d)
            }else {
                likedData.push(d)
            }
        })
        setBlogData(likedData)
        setOpenViewPage(false)
    }

    const editHandler = () => {
        setOpenEdit(true)
    }

    const closeEditModalHandler = () => {
        setOpenEdit(false)
    }

    return(
        <Box direction="row" justifyContent='end' mr={30} mt={3} style={{display:"flex"}}>
            <Tooltip title="Like">
                  <Button size="small" color="primary" onClick={likeHandler}>
                    <ThumbUpAltOutlinedIcon/>
                  </Button>
                  </Tooltip>
            <Tooltip title="Edit">
                  <Button size="small" color="primary" onClick={editHandler}>
                    <EditOutlinedIcon/>
                  </Button>
                  </Tooltip>
                  <Tooltip title="Delete">
                  <Button size="small" color="primary" onClick={deleteHandler}>
                    <DeleteOutlineOutlinedIcon/>
                  </Button>
                  </Tooltip>

                  <Modal
                open={openEdit}
                onClose={closeEditModalHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <EditPost handleClose={closeEditModalHandler}/>
                </Box>
            </Modal>
            <ToastContainer/>
        </Box>
    )
}

export default ViewBlogHeader