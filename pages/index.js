import Course from "../components/Course";
import { Button } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
export default function Home() {
  return (
    <div className="px-5">
            <div className="">
                <h1 className="text-5xl font-semibold font-sans	">Summer Art Camp! 5 Days of Artists and Painting Monet, <br /> Van Gogh, Matisse , & More</h1>
                <p className="py-3">Multi-Day Course ?</p>
            </div>
            <div className="flex flex-row pt-14 justify-between">
                <div>
                    <p>In this 5 day class we will explore artists Monet, Matisse, Van <br />Gogh, among others and then recreate paintings using
                        crayon <br />and watercolor. Students will have fun learning about the artists <br />& creating their own art inspired by their work.</p>
                    <div className="flex py-5">
                        <img className="h-10 w-10 rounded-full object-cover" src="/profile.jpeg" />
                        <p className="text-violet-700 font-bold m-auto mx-3
">Kimberley R Moseler</p>
                    </div>
                    <div className="py-1">
                        {/* 5 star */}
                        467 total reviews for this teacher
                    </div>
                    <div className="py-1">
                        {/* 5 star */}
                        5 reviews for this class
                    </div>
                    <p>Completed by 21 learners</p>
                    <div className="py-5">
                        <Button variant="contained" endIcon={<ChevronRightIcon />}>
                          Send
                        </Button>
                        <button>Save</button>
                        <button>Share</button>
                    </div>
                </div>
                <div>
                    <img src="/download.jpeg" alt="unloaded" />
                </div>
              </div>
      </div>
  )
}
