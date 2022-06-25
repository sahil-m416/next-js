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
                  <div className="px-5 rounded-xl bg-white my-14">
            <div className="">
                <h1 className="text-4xl font-bold font-sans pt-5 font-mono">Summer Art Camp! 5 Days of Artists and Painting Monet,Van Gogh, Matisse , & More</h1>
                <p className="pb-3 pt-1 font-bold text-zinc-400">MultiDay Course</p>
            </div>
            <div className="flex flex-row pt-10 justify-between">
                <div className="w-2/4">
                    <p>In this 5 day class we will explore artists Monet, Matisse, Van Gogh, among others and then recreate paintings using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work.</p>
                    <div className="flex py-5">
                        <img className="h-10 w-10 rounded-full object-cover" src="/assets/profile.jpeg"/>
                        <p className="text-violet-700 font-bold m-auto mx-3
                          ">Kimberley R Moseler</p>
                    </div>
                    <div className="py-1">
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        467 total reviews for this teacher
                    </div>
                    <div className="py-1">
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        5 reviews for this class
                    </div>
                    <p className="font-semibold">Completed by 21 learners</p>
                    <div className="py-5">
                        <Button className="rounded-full bg-violet-700" variant="contained" endIcon={<ChevronRightIcon />}>
                            See Class Schedule
                        </Button>
                        <Button className="text-violet-700 mx-6" variant="text" startIcon={<FavoriteBorderIcon />}>
                            Save
                        </Button>
                        <Button className="text-violet-700 my-2.5" variant="text" startIcon={<ShortcutIcon />}>
                            Share
                        </Button>
                    </div>
                </div>
                <div className="w-2/4 h-2/4 flex justify-center ml-1 pb-12">
                    <img src="/assets/next.webp" className="" alt="unloaded" />
                </div>
            </div>
        </div>
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
