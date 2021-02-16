import React from "react";
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import ImageUpload from "./ImageUpload";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  class UploadButton extends React.Component{
    render(){
        return(
            <div>
                <Link to="/upload">
                <Button
                    variant="contained"
                    color="default"
                    className={this.props.classes.button}
                > 
                Upload Image of Your Clothing
                </Button>
                </Link>
                <Link to="/choose">
                <Button
                variant="contained"
                color="default"
                className={this.props.classes.button}
                > 
                Use One Of Ours
                </Button>
                </Link>
                </div>
        );
    }
}
const Welcome = () => {
    const classes = useStyles();
    return(
        <UploadButton classes={classes}/>
    );
}

export default Welcome;