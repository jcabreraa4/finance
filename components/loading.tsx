import { Loader2 } from 'lucide-react';

export function LoadingCircle() {
    return (
        <main className="flex items-center justify-center w-full h-full">
            <Loader2 className="h-14 w-14 animate-spin text-muted-foreground" />
        </main>
    );
};
