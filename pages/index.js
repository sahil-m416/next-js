import Course from "../components/Course";
import SearchComp from "../components/Search/SearchComp";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid, ImageListItem } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import StarIcon from '@mui/icons-material/Star';


export default function Home() {
  return (
    <>
    <SearchComp />
        <Grid container className="bg-gray-300 h-full">
                <Grid item sm={2}>
                    {/* <Sidebar /> */}
                </Grid>

                <Grid item sm={8}>
                    <Course /> 
                    
                    <Course /> 
                    <Course /> 
                    <Course /> 
                    <Course /> 
                    <Course /> 
                    <Course /> 
                    <Course /> 
                    <Course /> 
                   
                </Grid>

                <Grid item sm={3}>
                    {/* <Rightbar /> */}
                </Grid>
            </Grid>
    </>
  )
}
