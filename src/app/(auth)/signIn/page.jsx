"use client";
import Container from "@/components/Container";
import SocialLogin from "@/components/SocialLogin";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const { googleSignIn, setAuthLoading, setUser, authLoading } = useAuth();

  const router = useRouter();
  // sign in with google
  const handleGoogleSignIn = async () => {
    try {
      const res = await googleSignIn();
      const currentUser = res.user;
      setUser(currentUser);
      router.push("/");
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
              <form>
                <fieldset className="fieldset space-y-2">
                  {/* Email  */}
                  <div>
                    <label className="label">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      // disabled={authLoading}
                      // {...register("email", {
                      //   required: "Your email is required",
                      // })}
                      type="email"
                      className="input-style border"
                      // placeholder="Email"
                    />
                    {/* {errors.email?.type === "required" && (
                    <p className="text-red-600 mt-1 tracking-wide">
                      {errors.email?.message}
                    </p>
                  )} */}
                  </div>

                  {/* Password  */}
                  <div>
                    <label className="label">
                      Password<span className="text-red-500">*</span>
                    </label>
                    <input
                      // disabled={authLoading}
                      type="password"
                      className="input-style"
                      placeholder="Password"
                      // {...register("password", {
                      //   required: "Password is required",
                      //   pattern: {
                      //     value:
                      //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$#!%*?&]{6,}$/,
                      //     message:
                      //       "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long",
                      //   },
                      // })}
                    />
                    {/* {errors.password?.type === "required" && (
                    <p className="text-red-600 mt-1 tracking-wide">
                      {errors.password?.message}
                    </p>
                  )} */}
                    {/* {errors.password?.type === "pattern" && (
                    <p className="text-red-600 mt-1 tracking-wide">
                      {errors.password?.message}
                    </p>
                  )} */}
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
                    <button
                      // disabled={authLoading}
                      className="btn btn-primary my-2 w-full disabled:bg-primary disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {false ? (
                        <div className="flex items-center gap-2">
                          <span className="loading loading-spinner"></span>
                          Loading...
                        </div>
                      ) : (
                        "Sign In"
                      )}
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
