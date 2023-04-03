import Map from "./Map";
import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";
const Main = () => {


    const [ip, setIP] = useState("loading...");
    const [location, setLocation] = useState("loading...");
    const [timeZone, setTz] = useState("loading...");
    const [isp, setIsp] = useState("loading...");
    const [showerror, setError] = useState(false);

    const [latLon, setlatLon] = useState(null);

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setViewportWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const [searchIP, setSearchIP] = useState("");

   

    const getLocationInfo = (ipInput) => {
        var url = "https://ipapi.co/" + ipInput  + "/json/";
        setIP(ipInput);
      

        axios.get(url).then(res => {
        
            setLocation(res.data.city + ", " + res.data.region + " " + res.data.postal + " " + res.data.country_name);
            setIsp(res.data.org);
            setTz(res.data.utc_offset);
            setlatLon({
                lat: res.data.latitude,
                lng: res.data.longitude
            });
            setError(false);
        }
        ).catch(error => {
            setError(true);
        }
        );
    }

    const getLocation = async () => {
        const res1 = await axios.get("https://api.ipify.org/?format=json");
        console.log(res1.data);
        
        getLocationInfo(res1.data.ip);
        setSearchIP(viewportWidth>768?"":res1.data.ip);
        console.log(searchIP)
    };
    useEffect(() => {
        getLocation();
    }, []);

    

    const catchChange = (e) => {
        setSearchIP(e.target.value);
    }

    const handleClickSearch = (e) => {
        e.preventDefault();
        getLocationInfo(searchIP)
    }

    return (
        <main className="flex flex-col items-center text-[18px] text-gray-1100 md:h-screen">

            <motion.div 
            id="top-section" className="flex flex-col relative space-y-7 items-center py-10 w-full pb-36" >

                <h1 className="text-white font-medium text-[24px]">
                    IP Address Tracker
                </h1>

                <div className="rounded-2xl overflow-hidden h-fit flex text-[16px] w-[90%] md:w-fit">
                    <input onChange={catchChange} value={searchIP} className="py-4 w-full px-8 md:w-[500px] h-16 focus:border-0 focus:outline-none placeholder-gray-1000 placeholder:truncate" type="text" name="ip" placeholder="Search for any IP address or domain" />
                    <motion.button
                        onClick={handleClickSearch}
                        whileHover={{ backgroundColor: "hsl(0, 0%, 59%)", transition: { ease: "easeInOut" } }}
                        className="bg-black h-16 w-14 grid place-items-center"><img src="./images/icon-arrow.svg" /></motion.button>

                </div>
                {showerror && (<p className="text-red-200">something went wrong, please try again</p>)}
                <div className="flex text-center md:text-left md:flex-row flex-col bg-white absolute top-[60%] z-50 rounded-2xl py-5 w-[90%] md:w-3/4 shadow-lg">
                    <div className= "py-2 md:py-5 px-10 flex-1">
                        <p className="text-sm font-bold text-gray-1000 tracking-wider">IP ADDRESS</p>
                        <h2 className="font-medium">{ip}</h2>
                    </div>

                    <div className="hidden md:flex w-[1px] bg-gray-200 h-24 place-self-center "></div>

                    <div className="md:py-5 px-10 flex-1">
                        <p className="text-sm font-bold text-gray-1000 tracking-wider">LOCATION</p>
                        <h2 className="font-medium">{location}</h2>
                    </div>

                    <div className=" hidden md:flex w-[1px] bg-gray-200 h-24 place-self-center"></div>

                    <div className="py-2 md:py-5 px-10 flex-1">
                        <p className="text-sm font-bold text-gray-1000 tracking-wider">TIMEZONE</p>
                        <h2 className="font-medium">UTC {timeZone}</h2>
                    </div>

                    <div className="hidden md:flex w-[1px] bg-gray-200 h-24 place-self-center"></div>

                    <div className="pb-2 md:py-5 px-10 flex-1">
                        <p className="text-sm font-bold text-gray-1000 tracking-wider">ISP</p>
                        <h2 className="font-medium">{isp}</h2>
                    </div>
                </div>
            </motion.div>










            <motion.div
                 initial={{opacity:0, zIndex:1}} 
                 animate={{opacity:1, transition:{
                     ease:'easeInOut', duration:0.8
                 }}} 
            id="map-container relative" className="h-[700px] md:h-auto md:flex-1 w-full ">
                {latLon === null && (<div className="absolute flex flex-col justify-center items-center left-1/2 ml-[-3.2rem] top-[50vh] space-y-5">

                    <div className="flex space-x-10">
                        <motion.div
                            animate={{ y: -4 }}
                            transition={{ repeat: Infinity, repeatType: "mirror", ease: 'easeInOut' }} className="h-4 z-50 rounded-full bg-black w-4"></motion.div>
                        <motion.div animate={{ y: -4 }}
                            transition={{ repeat: Infinity, repeatType: "mirror", ease: 'easeInOut', delay: 0.1 }} className="h-4 z-50 rounded-full bg-black w-4"></motion.div>
                        <motion.div animate={{ y: -4 }}
                            transition={{ repeat: Infinity, repeatType: "mirror", ease: 'easeInOut', delay: 0.2 }} className="h-4 z-50 rounded-full bg-black w-4"></motion.div>
                    </div>


                    <h1>Loading</h1>
                </div>)}

                {latLon && <Map location={latLon} />}
            </motion.div>
            <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://github.com/bap-ssbm/">Kentaro</a>.
            </div>
        </main>
    );
}

export default Main;
