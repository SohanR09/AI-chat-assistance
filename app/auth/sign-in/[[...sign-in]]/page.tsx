import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-full min-h-[calc(100vh-2rem)] justify-center items-center auth-page">
      <SignIn
        path="/auth/sign-in"
        routing="path"
        signUpUrl="/auth/sign-up"
        forceRedirectUrl={"/c"}
      />
    </div>
  );
}
