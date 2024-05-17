import { Separator } from '@/components/ui/separator';
import { Info } from './_components/info';
import { BoardList } from './_components/board-list';
import { Suspense } from 'react';

const OrganizationIdPage = async () => {
  return (
    <div className="mb-20 w-full ">
      <Info />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        {/* Для себя Suspense - запасной компонент, который будет отображаться во время ожидания */
        /* Для себя Suspense- Компонент, который может быть "приостановлен", пока он ожидает загрузки данных */}
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage;
