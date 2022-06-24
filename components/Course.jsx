import { Button } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import StarIcon from '@mui/icons-material/Star';


export default function Course({ courseDetails }) {
    return (
        <div className="px-5 rounded-xl bg-white my-14">
            <div className="">
                <h1 className="text-2xl font-bold font-sans pt-5 font-mono">{courseDetails.courseTitle}</h1>
                <p className="pb-3 pt-1 font-bold text-slate-700">{courseDetails.singleDay ? "Single Day Course" : "MultiDay Course"}</p>
            </div>
            <div className="flex flex-row pt-10 justify-between">
                <div className="w-2/4">
                    <p>{courseDetails.description}</p>
                    <div className="flex py-5">
                        <img className="h-10 w-10 rounded-full object-cover" src={courseDetails.authorImg} />
                        <p className="text-violet-700 font-bold m-auto mx-3
                          ">{courseDetails.authorName}</p>
                    </div>
                    <div className="py-1">
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        {courseDetails.teacherReviews} total reviews for this teacher
                    </div>
                    <div className="py-1">
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        {courseDetails.classReviews} reviews for this class
                    </div>
                    <p className="font-semibold">Completed by {courseDetails.completedBy} learners</p>
                    <div className="py-5">
                        <Button className="rounded-full bg-violet-700" variant="contained" endIcon={<ChevronRightIcon />}>
                            See Class Schedule
                        </Button>
                        <Button className="text-violet-700 ml-12" variant="text" startIcon={<FavoriteBorderIcon />}>
                            Save
                        </Button>
                        <Button className="text-violet-700 ml-12" variant="text" startIcon={<ShortcutIcon />}>
                            Share
                        </Button>
                    </div>
                </div>
                <div className="w-2/4 flex justify-center ml-1 pb-12">
                    <img src={courseDetails.courseImg} className="" alt="unloaded" />
                </div>
            </div>
        </div>



    )
}