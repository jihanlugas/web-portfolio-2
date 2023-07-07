import Link from "next/link";
import { useRouter } from "next/router";
import { Montserrat } from 'next/font/google';

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

const About = () => {

  const router = useRouter();

  return (
    <>
      <div>
        <div className="flex justify-center shadow">
          <div className='h-20 w-full max-w-4xl flex items-center justify-between px-4'>
            <div className={`text-3xl font-bold ${montserrat.className}`}>
              <Link href={'/'}>
                Jihan Lugas
              </Link>
            </div>
            <div className="hidden md:flex">
              {menu['en'].map((data, key) => {
                const isSelected = router.pathname === data.path;
                return (
                  <Link key={key} href={data.path}>
                    <div className={isSelected ? 'text-green-600 mr-4' : 'mr-4 duration-500 hover:text-green-600'} key={key}>{data.name}</div>
                  </Link>
                )
              })}
            </div>
            <div className="flex md:hidden">
              {menu['en'].map((data, key) => {
                const isSelected = router.pathname === data.path;
                return (
                  <Link key={key} href={data.path}>
                    <div className={isSelected ? 'text-green-600 mr-4' : 'mr-4 duration-500 hover:text-green-600'} key={key}>{data.name}</div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className='w-full max-w-4xl'>
            <div>asd</div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About;