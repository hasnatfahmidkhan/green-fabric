"use client";
import Container from "@/components/Container";
import SocialLogin from "@/components/SocialLogin";
import useAuth from "@/hooks/useAuth";
import { uploadImage } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function SignUp() {
  const { googleSignIn, setAuthLoading, setUser, authLoading } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // sign up with email and password
  const onSubmit = async (data) => {
    const { image, name, email, password } = data;
    const imageFile = image[0];
    const imageUrl = await uploadImage(imageFile);
    const upadateData = {
      displayName: name,
      photoURL: imageUrl,
    };
  };

  // sign in with google
  const handleGoogleSignIn = async () => {
    try {
      const res = await googleSignIn();
      const currentUser = res.user;
      setUser(currentUser);
      console.log(currentUser);
      router.push("/");
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
                Sign Up
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset space-y-2">
                  {/* Profile photo  */}
                  <fieldset className="fieldset">
                    <legend className="label">
                      Upload a Image<span className="text-red-500">*</span>
                    </legend>
                    <input
                      type="file"
                      accept="image/*"
                      className="file-input focus:outline-none"
                      {...register("image", {
                        required: "Image is required",
                        validate: (value) => {
                          const file = value[0];
                          console.log(file);
                          if (!file.type.startsWith("image/")) {
                            return "Please upload a image";
                          }
                          if (
                            !(
                              file.type.endsWith("/jpg") ||
                              file.type.endsWith("/jpeg") ||
                              file.type.endsWith("/png")
                            )
                          ) {
                            return "Image should be png jpg jpeg ";
                          }

                          const maxSize = 2 * 1024 * 1024;
                          if (file.size > maxSize) {
                            return "Max size 2MB";
                          }

                          return true;
                        },
                      })}
                    />

                    {errors.image ? (
                      <p className="text-red-600 mt-1 text-xs tracking-wide">
                        {errors.image?.message}
                      </p>
                    ) : (
                      <label className="label ">Max size 2MB</label>
                    )}
                  </fieldset>

                  {/* Name  */}
                  <div>
                    <label className="label">
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      // disabled={authLoading}
                      {...register("name", {
                        required: "Your name is required",
                      })}
                      type="text"
                      className="input-style"
                      placeholder="Name"
                    />
                    {errors.name && (
                      <p className="text-red-600 mt-1 text-xs tracking-wide">
                        {errors.name?.message}
                      </p>
                    )}
                  </div>
                  {/* Email  */}
                  <div>
                    <label className="label">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      // disabled={authLoading}
                      {...register("email", {
                        required: "Your email is required",
                      })}
                      type="email"
                      className="input-style"
                      placeholder="Email"
                    />
                    {errors.email && (
                      <p className="text-red-600 mt-1 text-xs tracking-wide">
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
                      // disabled={authLoading}
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
                      <p className="text-red-600 mt-1 text-xs tracking-wide">
                        {errors.password?.message}
                      </p>
                    )}
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
                        "Sign Up"
                      )}
                    </button>
                    <p className="text-sm text-gray-500 mt-1 tracking-wide">
                      Already have an account?{" "}
                      <Link className="hover:underline" href={"/signUp"}>
                        Sign In
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
