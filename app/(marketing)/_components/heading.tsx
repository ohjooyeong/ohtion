'use client';

import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/clerk-react';
import { useConvexAuth } from 'convex/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        당신의 아이디어, 문서 및 계획을 작성하는 것을
        환영합니다.{' '}
        <span className="underline">Ohtion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Ohtion으로 하나의 워크스페이스에서 빠르고 더
        정확하게 <br /> 다양한 작업을 진행하세요
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size={'lg'} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href={'/documents'}>
            Ohtion 시작하기{' '}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Ohtion 무료로 사용하기
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
