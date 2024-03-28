'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src={'/error.png'}
        height={'300'}
        width={'300'}
        alt="Error"
        className="dark:hidden"
      />
      <Image
        src={'/error-dark.png'}
        height={'300'}
        width={'300'}
        alt="Error"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">
        잘못된 페이지입니다!
      </h2>
      <Button asChild>
        <Link href={'/documents'}>되돌아가기</Link>
      </Button>
    </div>
  );
};

export default Error;
