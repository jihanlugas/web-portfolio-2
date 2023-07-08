import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import { NextPage } from 'next/types';

type Props = {
  children: React.ReactNode
}


const Project: NextPage<Props> = ({ children }) => {
  return (
    <>
      <div>Project</div>
    </>
  )
}

(Project as PageWithLayoutType).layout = Main;

export default Project;