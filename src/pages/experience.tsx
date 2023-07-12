import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import { dateDiff, displayDate } from '@/utils/formater';
import { NextPage } from 'next/types';

type Props = {
  children: React.ReactNode
}


const Experience: NextPage<Props> = ({ children }) => {

  const lmdStart = new Date('2022-04-04')
  const lmdEnd = new Date()

  const wnwStart = new Date('2019-01-07')
  const wnwEnd = new Date('2022-03-15')

  console.log('wnwStart ', wnwStart)

  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className='w-full max-w-6xl'>
            <div className="p-4">
              <h3>Experience</h3>
            </div>
            <div className="grid grid-cols-1 gap-4 p-4">
              <div className='shadow border rounded p-4'>
                <div className=''>
                  <div className='text-xl text-green-600 mb-2'>{'Back End Developer'}</div>
                  <div className=''>{'Lintas Media Danawa | Full-time'}</div>
                </div>
                <div className='text-gray-600 mb-4 text-sm'>
                  <div>{displayDate(lmdStart, 'MMM YYYY') + ' - ' + ' Present ' + ' · ' + dateDiff(lmdStart, lmdEnd)}</div>
                  <div>{'Depok, West Java, Indonesia | Remote'}</div>
                </div>
                <div><strong className='mr-2'>Skills:</strong>{'PostgreSQL · Go (Programming Language)'}</div>
              </div>
              <div className='shadow border rounded p-4'>
                <div className=''>
                  <div className='text-xl text-green-600 mb-2'>{'Back End Developer'}</div>
                  <div className=''>{'PT. Wnw Teknodigie | Full-time'}</div>
                </div>
                <div className='text-gray-600 mb-4 text-sm'>
                  <div>{displayDate(wnwStart, 'MMM YYYY') + ' - ' + displayDate(wnwEnd, 'MMM YYYY') + ' · ' + dateDiff(wnwStart, wnwEnd)}</div>
                  <div>{'Jakarta, Indonesia'}</div>
                </div>
                <div className='mb-4'>
                  <div className=''>Building up Point Of Sales (POS) system</div>
                  <div className=''>Building up Property Management System (PMS)</div>
                  <div className=''>Integrated between PMS and Traveloka</div>
                  <div className=''>Integrated between PMS and Siteminder</div>
                </div>
                <div><strong className='mr-2'>Skills:</strong>{'PostgreSQL · PHP · Next.js · React.js · JavaScript · MySQL · React Native · Go (Programming Language)'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

(Experience as PageWithLayoutType).layout = Main;

export default Experience;