'use client';

import { copyCard } from '@/actions/copy-card';
import { deleteCard } from '@/actions/delete-card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useAction } from '@/hooks/use-action';
import { useCardModal } from '@/hooks/use-mobile-modal';
import { CardWithList } from '@/types';
import { Copy, Trash } from 'lucide-react';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

interface ActionsProps {
  data: CardWithList;
}

export const Actions = ({ data }: ActionsProps) => {
  const params = useParams();
  const cardModal = useCardModal();

  const { execute: executeCopyCard, isLoading: isLoadingCopy } = useAction(
    copyCard,
    {
      onSuccess: data => {
        toast.success(`Card "${data.title}" copied`);
        cardModal.onClose();
      },
      onError: error => {
        toast.error(error);
      },
    }
  );
  const { execute: executeDeleteCard, isLoading: isLoadingDelete } = useAction(
    deleteCard,
    {
      onSuccess: data => {
        toast.success(`Card "${data.title}" deleted`);
        cardModal.onClose();
      },
      onError: error => {
        toast.error(error);
      },
    }
  );

  const onCopy = () => {
    const boardId = params.boardId as string;
    executeCopyCard({ id: data.id, boardId: boardId });
  };

  const onDelete = () => {
    const boardId = params.boardId as string;
    executeDeleteCard({ id: data.id, boardId: boardId });
  };
  return (
    <div className="mt-2 space-y-2">
      <p className="text-xs font-semibold">Actions</p>
      <Button
        variant={'gray'}
        className="w-full justify-start"
        size={'inline'}
        onClick={onCopy}
        disabled={isLoadingCopy}
      >
        <Copy className="mr-2 h-4 w-4" />
        Copy
      </Button>
      <Button
        variant={'gray'}
        className="w-full justify-start"
        size={'inline'}
        onClick={onDelete}
        disabled={isLoadingDelete}
      >
        <Trash className="mr-2 h-4 w-4" />
        Delete
      </Button>
    </div>
  );
};

Actions.Skeleton = function ActionsSkeleton() {
  return (
    <div className="mt-2 space-y-2">
      <Skeleton className="h-4 w-20 bg-neutral-200" />
      <Skeleton className="h-8 w-full bg-neutral-200" />
      <Skeleton className="h-8 w-full bg-neutral-200" />
    </div>
  );
};
