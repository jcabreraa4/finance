import { LoadingCircle } from '@/components/loading';
import { SignIn, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'

export default function SignInPage() {
    return (
        <section>
            <ClerkLoaded>
                <SignIn />
            </ClerkLoaded>
            <ClerkLoading>
                <LoadingCircle />
            </ClerkLoading>
        </section>
    );
};
