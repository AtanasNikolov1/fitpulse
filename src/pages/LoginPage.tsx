import AuthFormWrapper from "../components/features/auth/ui/AuthFormWrapper";
import AuthRedirectLink from "../components/features/auth/ui/AuthRedirectLink";
import AuthTitle from "../components/features/auth/ui/AuthTitle";
import AuthWallpaper from "../components/features/auth/ui/AuthWallpaper";
import AuthDivider from "../components/features/auth/ui/AuthDivider";
import LoginForm from "../components/features/auth/forms/LoginForm";
import GoogleSignInButton from "../components/features/auth/ui/GoogleSignInButton ";

const LoginPage = () => {
  return (
    <main className="flex min-h-screen bg-light-gray">
      <AuthWallpaper />
      <AuthFormWrapper>
        <AuthTitle text="Welcome Back to FitPulse" />
        <LoginForm />
        <AuthRedirectLink text="No account yet?" url="/signup" />
        <AuthDivider />
        <GoogleSignInButton />
      </AuthFormWrapper>
    </main>
  );
};

export default LoginPage;
