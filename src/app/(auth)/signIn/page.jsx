"use client";
import Container from "@/components/Container";
import SocialLogin from "@/components/SocialLogin";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const {
    googleSignIn,
    setAuthLoading,
    setUser,
    authLoading,
    signInWithEmailPass,
  } = useAuth();

  const onSubmit = async (data) => {
    const { email, password } = data;
    const res = await signInWithEmailPass(email, password);
    const currentUser = res.user;
    setUser(currentUser);
    setAuthLoading(false);
    router.push(next);
  };

  // sign in with google
  const handleGoogleSignIn = async () => {
    try {
      const res = await googleSignIn();
      const currentUser = res.user;
      setUser(currentUser);
      router.push(next);
      console.log(currentUser);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setAuthLoading(false);
    }
  };
  return (
    <section className="min-h-[calc(100vh-292px)] flex items-center justify-center">
      {authLoading ? (
        <span className="loading loading-bars loading-xl text-primary"></span>
      ) : (
        <Container>
          <div className="card w-full max-w-sm shrink-0 border border-gray-100 shadow-sm">
            <div className="card-body">
              <h2 className="text-center heading-font text-3xl font-semibold mb-4">
                Sign In
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset space-y-2">
                  {/* Email  */}
                  <div>
                    <label className="label">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("email", {
                        required: "Your email is required",
                      })}
                      type="email"
                      className="input-style border"
                      placeholder="Email"
                    />
                    {errors.email && (
                      <p className="text-red-600 mt-1 tracking-wide">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>

                  {/* Password  */}
                  <div>
                    <label className="label">
                      Password<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      className="input-style"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$#!%*?&]{6,}$/,
                          message:
                            "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long",
                        },
                      })}
                    />
                    {errors.password && (
                      <p className="text-red-600 mt-1 tracking-wide">
                        {errors.password?.message}
                      </p>
                    )}

                    <div>
                      <Link
                        href={"/forget-password"}
                        className="hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-primary my-2 w-full disabled:bg-primary disabled:opacity-70 disabled:cursor-not-allowed">
                      Sign In
                    </button>
                    <p className="text-sm text-gray-500 mt-1 tracking-wide">
                      Don&apos;t have any account?{" "}
                      <Link className="hover:underline" href={"/signUp"}>
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </fieldset>
              </form>
              <div className="divider font-medium">OR</div>
              <SocialLogin onClick={handleGoogleSignIn} />
            </div>
          </div>
        </Container>
      )}
    </section>
  );
}
