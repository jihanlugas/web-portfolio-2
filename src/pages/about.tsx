import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Montserrat } from 'next/font/google';
import { TbWorldCode } from 'react-icons/tb';
import { LuBrainCircuit } from 'react-icons/lu';
import { BsBullseye } from 'react-icons/bs';
import { RiEnglishInput } from 'react-icons/ri';
import { RxCode } from 'react-icons/rx';
import { FaChartBar } from 'react-icons/fa';
import { TbMathFunction } from 'react-icons/tb';
import { BsImages } from 'react-icons/bs';
import PageWithLayoutType from "@/types/layout";
import Main from "@/components/layout/main";
import { NextPage } from 'next/types';

type Props = {
  children: React.ReactNode
}

const montserrat = Montserrat({
  subsets: ['latin']
})

const menu = {
  en: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Education",
      path: "/education",
    },
    {
      name: "Experience",
      path: "/experience",
    },
    {
      name: "Project",
      path: "/project",
    },
    {
      name: "Skill",
      path: "/skill",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ],
  id: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Education",
      path: "/education",
    },
    {
      name: "Experience",
      path: "/experience",
    },
    {
      name: "Project",
      path: "/project",
    },
    {
      name: "Skill",
      path: "/skill",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ],
  jp: [
    {
      name: "ホーム",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Education",
      path: "/education",
    },
    {
      name: "Experience",
      path: "/experience",
    },
    {
      name: "Project",
      path: "/project",
    },
    {
      name: "Skill",
      path: "/skill",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ],
};

const About: NextPage<Props> = ({ children }) => {

  const router = useRouter();

  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className='w-full max-w-6xl'>
            <div className="p-4">
              <h3>About</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
              <div className="">
                <Image
                  alt='Photo'
                  src={'https://picsum.photos/400'}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }} // optional
                />
              </div>
              <div className="md:col-span-2">
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sequi magni iure minus dolorum fuga temporibus quos cumque quisquam. Labore autem necessitatibus iure. Non incidunt itaque suscipit est cum enim? </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sequi magni iure minus dolorum fuga temporibus quos cumque quisquam. Labore autem necessitatibus iure. Non incidunt itaque suscipit est cum enim? </div>
              </div>
            </div>
            <div className="p-4">
              <h3>Interest</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
              <div className="flex items-center bg-slate-800 text-gray-50 rounded">
                <div className="h-16 w-16 flex justify-center items-center">
                  <TbWorldCode size={'2em'} />
                </div>
                <div>Software Development</div>
              </div>
              <div className="flex items-center bg-slate-800 text-gray-50 rounded">
                <div className="h-16 w-16 flex justify-center items-center">
                  <LuBrainCircuit size={'2em'} />
                </div>
                <div>Machine Learning</div>
              </div>
              <div className="flex items-center bg-slate-800 text-gray-50 rounded">
                <div className="h-16 w-16 flex justify-center items-center">
                  <BsBullseye size={'2em'} />
                </div>
                <div>Computer Vision</div>
              </div>
              <div className="flex items-center bg-slate-800 text-gray-50 rounded">
                <div className="h-16 w-16 flex justify-center items-center">
                  <RiEnglishInput size={'2em'} />
                </div>
                <div>Natural Language Processing</div>
              </div>
              <div className="flex items-center bg-slate-800 text-gray-50 rounded">
                <div className="h-16 w-16 flex justify-center items-center">
                  <RxCode size={'2em'} />
                </div>
                <div>Software Engineering</div>
              </div>
              <div className="flex items-center bg-slate-800 text-gray-50 rounded">
                <div className="h-16 w-16 flex justify-center items-center">
                  <FaChartBar size={'2em'} />
                </div>
                <div>Visualization</div>
              </div>
              <div className="flex items-center bg-slate-800 text-gray-50 rounded">
                <div className="h-16 w-16 flex justify-center items-center">
                  <TbMathFunction size={'2em'} />
                </div>
                <div>Algorithms</div>
              </div>
              <div className="flex items-center bg-slate-800 text-gray-50 rounded">
                <div className="h-16 w-16 flex justify-center items-center">
                  <BsImages size={'2em'} />
                </div>
                <div>Image Processing</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

(About as PageWithLayoutType).layout = Main;

export default About;