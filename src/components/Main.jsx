import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter, FaGithub, FaDiscord, FaLinkedin} from 'react-icons/fa'
import {AiFillRocket} from 'react-icons/ai'
import {RiRocket2Fill} from 'react-icons/ri'

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='./src/assets/wp5585346-space-amoled-wallpapers.jpg'></img>
            <div className="absolute inset-0 flex justify-center items-center min-h-screen">
                <div className="bg-black/70 rounded-lg p-6">
            {/* <div class="m-auto absolute h-screen w-full flex flex-col items-center justify-center bg-black"> */}
  <div class="w-150 p-8 rounded-lg shadow-lg text-white font-mono">
  <div class="flex text-4xl font-mono font-bold text-white justify-center">
    <AiFillRocket size={50} /></div> 
    <h1 class="text-4xl pt-5 font-mono font-bold text-green-400">
    <span class="blink">&gt;</span>divesh_bakshani</h1> 
    <div class="my-4 text-green-400 text-2xl font-mono">   i am a software engineer with an interest for rockets and space</div>
    <div class="flex flex-col space-y-2">
      <a href="#" class="hover:text-green-400 hover:underline text-2xl font-mono">&gt;projects</a>
      <a href="#" class="hover:text-green-400 hover:underline text-2xl font-mono">&gt;courses</a>
      <a href="./src/assets/Divesh_Bakshani.pdf" class="hover:text-green-400 hover:underline text-2xl font-mono">&gt;resume</a>
      <div className="flex justify-center">
      <div className='flex justify-between pt-6 max-w-[200px] w-full items-center'>
                    <a href="https://twitter.com/rockateman"><FaTwitter className='cursor-pointer text-white hover:text-green-400' size={30} /></a>
                    <a href="https://github.com/diveshbakshani"><FaGithub className='cursor-pointer text-white hover:text-green-400' size={30} /></a>
                    <a href="https://linkedin.com/in/diveshbakshani"><FaLinkedin className='cursor-pointer text-white hover:text-green-400' size={30} /></a>
                </div> </div>
    </div>
  </div>
</div>
</div>
            
            {/* <div className="w-full h-screen top-0 absolute left-0 bg-black/70">
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='text-white sm:text-5xl text-4xl font-bold'> Divesh Bakshani</h1>
                <h2 className='text-white flex sm:text-3xl text-2xl pt-4 font-mono'> I'm a 
    <TypeAnimation
      sequence={[
        'Developer', // Types 'One'
        1000, // Waits 1s
        'Programmer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Engineer', // Deletes 'Two' and types 'Three'
        1000, // Waits 1s
        'Student', // Deletes 'Four' and types 'Five'
        2000, // Waits 1s
        'Rocket Science Enthusiast', // Deletes 'Five' and types 'Six'
        1000, // Waits 2s

      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[100px] w-full'>
                    <FaTwitter className='cursor-pointer text-white' size={20} />
                    <FaGithub className='cursor-pointer text-white' size={20} />
                    <FaLinkedin className='cursor-pointer text-white' size={20} />
                </div>
            </div>
            <div class="w-96 p-8 rounded-lg shadow-lg text-white">
                <h1 class="text-2xl font-bold">Your Nameeh</h1>
                <p class="my-4">Two line summary of yourself.</p>
                <div class="flex flex-col space-y-2">
                <a href="#" class="hover:text-gray-400">Link 1</a>
                <a href="#" class="hover:text-gray-400">Link 2</a>
                <a href="#" class="hover:text-gray-400">Link 3</a>
                </div>
            </div>
            </div> */}

        </div>
    )
}

export default Main