import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-full min-h-[calc(100vh-2rem)] justify-center items-center mt-4">
      <SignUp
      // path="/auth/sign-up" routing="path" signInUrl="/auth/sign-in"
      />
    </div>
  );
}
