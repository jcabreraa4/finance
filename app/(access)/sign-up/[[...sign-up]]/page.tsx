import { LoadingCircle } from '@/components/loading';
import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'

export default function SignUpPage() {
    return (
        <section>
            <ClerkLoaded>
                <SignUp />
            </ClerkLoaded>
            <ClerkLoading>
                <LoadingCircle />
            </ClerkLoading>
        </section>
    );
};
