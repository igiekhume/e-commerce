import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import loginPic from "../assets/woman.jpeg"
import ImageToBase64 from '../components/helper/imageToBase64'
import { FaEye } from 'react-icons/fa';
import { FaRegEyeSlash } from "react-icons/fa6";

function Signup() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const[data, setData] = useState({
        profilePic: ''
    }) 


    const handleUploadImage = async(e) => {
        const file = e.target.files[0];
        const ImagePic = await ImageToBase64(file);

        setData((preve) => {
            return{
                ...preve,
                profilePic: ImagePic,
            };
        });

    };

  return (
    <section id='signup'>
        <div className='container mx-auto p-4 rounded-lg'>
            <div className='bg-white p-5 w-fullmax-w-sm mx-auto'>
                <div className='w-20 mx-auto relative overflow-hidden rounded-full'>
                <div>
                    <img src={data.profilePic || loginPic} alt='' className='rounded-full ma-auto py-2 hover:scale-75' />
                </div>
                <form>
                    <label>
                        <div className='text-xs bg-opacity-75 
                        text-center absolute bottom-0 w-full text-white my-4 cursor-pointer'>Upload Image
                        </div>
                        <input 
                        type='file'
                        onChange={handleUploadImage}
                        className='hidden'/>
                    </label>
                </form>
            </div>

            
            
            <form className='pt-6 flex flex-col gap-4'>
                <div>
                    <label>Name</label>
                    <div className='bg-slate-100 p-2'>
                        <input
                        type='text'
                        placeholder=''
                        className='w-full h-full outline-none' />
                    </div>
                </div>
                <div className='grid'>
                    <label>Email:</label>
                    <div>
                        <input
                        type='email'
                        placeholder='Enter your email'
                        className='w-full h-full outline-none'/>
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div className='bg-slate-100 p-2'>
                        <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Enter your password'
                        className='w-full h-full outline-none'
                        />
                        <div className='text-xl cursor-pointer'
                        onClick={() => setShowPassword((prev) => !prev)}>
                            <span>
                                {showPassword ? <FaRegEyeSlash/> : <FaEye/>
                                }
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <div className='bg-slate-100 p-2'>
                        <input
                        type='confirmpassword'
                        placeholder='Password...'
                        className='w-full h-full outline-none'
                        />
                        <div className='text-xl cursor-pointer'
                        onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        <span>
                                {showConfirmPassword ? <FaRegEyeSlash/> : <FaEye/>
                                }
                            </span>
                        </div>
                    </div>
                </div>
                
                <button className='bg-red-500 text-white px-6 py-2 w-full maw-w-[150px] rounded-full
                hover:scale-110 transition-all cursor-pointer block mx-auto mt-4'>Sign Up</button>
            </form>
            <p className='my-5'>Already have an account? <Link className='text-red-600 hover:text-red-700 hover:underline'>Login</Link></p>
        </div>
        </div>
    </section>
  )
}

export default Signup