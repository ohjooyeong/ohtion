'use client';

import { useRouter } from 'next/navigation';
import { Id } from '@/convex/_generated/dataModel';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useUser } from '@clerk/clerk-react';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Trash } from 'lucide-react';
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';

interface MenuProps {
  documentId: Id<'documents'>;
}

export const Menu = ({ documentId }: MenuProps) => {
  const router = useRouter();
  const { user } = useUser();

  const archive = useMutation(api.documents.archive);

  const onArchive = () => {
    const promise = archive({ id: documentId });

    toast.promise(promise, {
      loading: '휴지통으로 이동중...',
      success: '휴지통으로 노트가 이동됐습니다.',
      error: '휴지통으로 이동하는 데 실패했습니다.',
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={'sm'} variant={'ghost'}>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60"
        align="end"
        alignOffset={8}
        forceMount
      >
        <DropdownMenuItem onClick={onArchive}>
          <Trash className="h-4 w-4 mr-2" />
          삭제하기
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="text-xs text-muted-foreground p-2">
          {user?.fullName}에 의해 최근 수정됨
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

Menu.Skeleton = function MenuSkeleton() {
  return <Skeleton className="h-10 w-10" />;
};
