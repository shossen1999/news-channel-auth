import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h3 className="text-3xl font-medium">Login With</h3>
                <button className="btn btn-outline w-full ">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full ">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>

            </div>
            <div className="p-4 mb-6">
                <h3 className="text-3xl font-medium">Find Us On</h3>
                <a href="" className="text-[18px] items-center border-2 p-4 rounded-t-lg gap-2 flex ">
                    <FaFacebook></FaFacebook>
                    FaceBook
                </a>
                <a href="" className="text-[18px] items-center border-x p-4 gap-2 flex ">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a href="" className="text-[18px] items-center border-2 p-4 gap-2 rounded-b-lg flex ">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>

            </div>

            <div className="p-4 space-y-3 mb-6">
                <h3 className="text-3xl font-medium">Q Zone</h3>
                <img src={ QZone1} alt="" />
                <img src={ QZone2} alt="" />
                <img src={ QZone3} alt="" />
                

            </div>
        </div>
    );
};

export default RightSideNav;
