import Course from "../components/Course";
import SearchComp from "../components/Search/SearchComp";
import { Grid, ImageListItem } from "@mui/material";
import { Button } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import StarIcon from '@mui/icons-material/Star';
import course from "../database/dummyData";

export default function Home() {
  return (
    <>
    
    <SearchComp />
        <Grid container className="bg-gray-300 h-full">
                <Grid item sm={2}>
                    {/* <Sidebar /> */}
                </Grid>
                <Grid item sm={7}>
                  {
                    course.map((c) =>(
                      <Course courseDetails={c} key={c.id}/>
                    ))
                  }
                </Grid>
            </Grid>
    </>
  )
}
