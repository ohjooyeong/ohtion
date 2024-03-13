'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
} from '@/components/ui/dialog';
import { useSettings } from '@/hooks/use-settings';
import { Label } from '@/components/ui/label';
import { ModeToggle } from '@/components/mode-toggle';

export const SettingsModal = () => {
  const settings = useSettings();

  return (
    <Dialog
      open={settings.isOpen}
      onOpenChange={settings.onClose}
    >
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">내 설정</h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>모드</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Ohtion이 기기에서 어떻게 보이는지 사용자
              정의하세요.
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};
