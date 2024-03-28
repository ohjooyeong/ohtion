'use client';

import Image from 'next/image';
import { useUser } from '@clerk/clerk-react';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: 'Untitled' }).then(
      (documentId) =>
        router.push(`/documents/${documentId}`),
    );

    toast.promise(promise, {
      loading: '새로운 노트를 생성중...',
      success: '새로운 노트가 생성되었습니다.',
      error: '새로운 노트를 생성하는데 실패했습니다.',
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src={'/empty.png'}
        height={300}
        width={300}
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src={'/empty-dark.png'}
        height={300}
        width={300}
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        {user?.firstName}&apos;s Ohtion에 오신 것을
        환영합니다.
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        노트 생성하기
      </Button>
    </div>
  );
};

export default DocumentsPage;
