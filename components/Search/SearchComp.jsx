import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ImageListItem } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

export default function SearchComp() {




    return (
        <Box className="h-12 w-full bg-violet-700 flex items-center sticky top-0">
            <Box className="flex-3 mr-96">
                <Box to="/home">
                    <Typography variant="span" className="text-2xl ml-5 text-zinc-50 cursor-pointer	">Kaholas</Typography>
                </Box>
            </Box>
            <Box className="flex-5">
                <Box className="w-full h8 bg-white rounded-2xl items-center flex object-cover">
                    <Search className="text-xl ml-2.5" />
                    <Typography
                        size="small"
                        variant="input"
                        component="input"
                        placeholder="Search for friend, post or video"
                        className="border-none w-9/12"
                    />
                </Box>
            </Box>
            <Box className="flex-4 flex items-center justify-around	text-white float-right">
                <Box className="ml-24">
                    <Typography className="mr-2.5 cursor-pointer relative">Homepage</Typography>
                    {/* <Typography className="topbarLink">Timeline</Typography> */}
                </Box>
                <Box className="flex">
                    <Box className="mr-3.5 cursor-pointer relative">
                        <Person />
                        <Typography className="w-3.5 h-3.5 bg-red-500 rounded-3xl text-white absolute flex items-center justify-center text-xs -top-1">1</Typography>
                    </Box>
                    <Box className="mr-3.5 cursor-pointer relative">
                        <Chat />
                        <Typography className="w-3.5 h-3.5 bg-red-500 rounded-3xl text-white absolute flex items-center justify-center text-xs -top-1">2</Typography>
                    </Box>
                    <Box className="mr-3.5 cursor-pointer relative">
                        <Notifications />
                        <Typography className="w-3.5 h-3.5 bg-red-500 rounded-3xl text-white absolute flex items-center justify-center text-xs -top-1">1</Typography>
                    </Box>
                </Box>
                <LogoutIcon
                    sx={{
                        cursor: "pointer"
                    }}
                />
                {/* <ImageListItem component="img" src="/profile.jpeg" alt="" className="topbarImg" /> */}
            </Box>
        </Box>
    );
}