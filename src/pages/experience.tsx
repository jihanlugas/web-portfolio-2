import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import { NextPage } from 'next/types';

type Props = {
  children: React.ReactNode
}


const Experience: NextPage<Props> = ({ children }) => {
  return (
    <>
      <div>Experience Coming Soon</div>
    </>
  )
}

(Experience as PageWithLayoutType).layout = Main;

export default Experience;