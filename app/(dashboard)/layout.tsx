import { Header } from '@/components/header';

interface LayoutProps {
  children: React.ReactNode
};

export default function DashboardLayout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main className="px-3 lg:px-14">
                {children}
            </main>
        </>
    );
};
