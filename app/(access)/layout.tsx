interface LayoutProps {
  children: React.ReactNode
};

export default function AccessLayout({ children }: LayoutProps) {
    return (
        <main className="h-screen flex justify-center items-center px-5 lg:px-0">
            {children}
        </main>
    );
};
