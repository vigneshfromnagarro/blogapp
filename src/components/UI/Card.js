import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Tooltip from '@mui/material/Tooltip';

const BlogCard = (props) => {

    return(
        <Box style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
           {props.data.map((item,index)=>{
            return(
                <Card key={index} sx={{ width: 750,marginTop:"10px" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography gutterBottom variant="button" component="div">
                      {item.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     {item.content.slice(0,200)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
               { props?.onClickHandler && <CardActions>
                <Tooltip title="View">
                  <Button size="small" color="primary" onClick={()=>props.onClickHandler(item)}>
                    <VisibilityOutlinedIcon/>
                  </Button>
                  </Tooltip>
                </CardActions>}
              </Card>
            )
           })} 
        </Box>
    )
}

export default BlogCard