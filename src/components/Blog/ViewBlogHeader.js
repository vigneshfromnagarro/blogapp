
import { Box,Button, Modal, Tooltip } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {data} from '../../data/data';
import { useState } from "react";
import EditPost from "./EditPost";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const ViewBlogHeader = (props) => {
    const [openEdit , setOpenEdit] = useState(false)

    const notify = () => toast.success("Post deleted successfully!",{
        autoClose:1000,
        onClose:()=>{
            props.handleClose()
        }
    });
    
    const deleteHandler = () => {
        const filteredData = props.blogData.filter((d,index)=>{
            if(d.title !== props.data[0].title){
                return d
            }})
        data.splice(props.index,1)
        props.setBlogData(filteredData)
        notify()
    }

    const likeHandler = () => {
        const likedData = []
        props.blogData.map((d,index)=>{
            if(d.title === props.data[0].title){
                d['title'] = props.data[0].title
                d['category'] = props.data[0].category
                d['content'] = props.data[0].content
                d['like'] = true
                likedData.push(d)
            }else {
                likedData.push(d)
            }
        })
        props.setBlogData(likedData)
        props.handleClose()
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
                    <EditPost index={props.index} prevdata={props.data} setViewData={props.setViewData} setBlogData={props.setBlogData} blogData={props.blogData}  handleClose={closeEditModalHandler}/>
                </Box>
            </Modal>
            <ToastContainer/>
        </Box>
    )
}

export default ViewBlogHeader