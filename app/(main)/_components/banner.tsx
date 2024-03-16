'use client';

import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useMutation } from 'convex/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { ConfirmModal } from '@/components/modals/confirm-modal';

interface BannerProps {
  documentId: Id<'documents'>;
}

export const Banner = ({ documentId }: BannerProps) => {
  const router = useRouter();

  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  const onRemove = () => {
    const proimse = remove({ id: documentId });

    toast.promise(proimse, {
      loading: '노트를 삭제하는 중...',
      success: '노트가 삭제됐습니다.',
      error: '노트를 삭제하는데 실패했습니다.',
    });

    router.push('/documents');
  };

  const onRestore = () => {
    const proimse = restore({ id: documentId });

    toast.promise(proimse, {
      loading: '노트를 복원하는 중...',
      success: '노트가 복원됐습니다.',
      error: '노트를 복원하는데 실패했습니다.',
    });
  };

  return (
    <div
      className="w-full bg-rose-500 text-center text-sm p-2 text-white flex
        items-center gap-x-2 justify-center"
    >
      <p>현재 페이지는 휴지통에 있습니다.</p>
      <Button
        size={'sm'}
        onClick={onRestore}
        variant={'outline'}
        className="border-whitew bg-transparent hover:bg-primary/5 text-white
          hover:text-white p-1 px-2 h-auto font-normal"
      >
        페이지 복원
      </Button>
      <ConfirmModal onConfirm={onRemove}>
        <Button
          size={'sm'}
          variant={'outline'}
          className="border-whitew bg-transparent hover:bg-primary/5 text-white
            hover:text-white p-1 px-2 h-auto font-normal"
        >
          페이지 삭제
        </Button>
      </ConfirmModal>
    </div>
  );
};
