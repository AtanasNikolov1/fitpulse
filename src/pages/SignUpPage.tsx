import AuthFormWrapper from "../components/features/auth/ui/AuthFormWrapper";
import AuthTitle from "../components/features/auth/ui/AuthTitle";
import AuthWallpaper from "../components/features/auth/ui/AuthWallpaper";
import AuthDivider from "../components/features/auth/ui/AuthDivider";
import AuthRedirect from "../components/features/auth/ui/AuthRedirectLink";
import GoogleSignInButton from "../components/features/auth/ui/GoogleSignInButton ";
import SignUpForm from "./../components/features/auth/forms/SignUpForm";

const SignUpPage = () => {
  return (
    <main className="flex min-h-screen bg-light-gray">
      <AuthWallpaper />
      <AuthFormWrapper>
        <AuthTitle text="Start Your Journey with Fitpulse" />
        <SignUpForm />
        <AuthRedirect text="Already have an account?" url="/login" />
        <AuthDivider />
        <GoogleSignInButton />
      </AuthFormWrapper>
    </main>
  );
};

export default SignUpPage;
