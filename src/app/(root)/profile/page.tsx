"use client";
import React from "react";
import { useClerk } from "@clerk/nextjs";
import { toast } from "sonner";
import CustomToast from "@/components/root/custom-toast";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/lib/utils";

const Page = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  const { CurrentUser, setCurrentUser } = useCurrentUser();

  const handleSignOut = async () => {
    try {
      if (!CurrentUser) {
        // toast.error("No user data found");
        toast.custom(
          (t) => (
            <CustomToast variant={"error"} metadata={t}>
              No user data found
            </CustomToast>
          ),
          {
            position: "top-center",
          },
        );

        router.push("/sign-up");
      }
      if (!setCurrentUser) {
        // toast.error("No setter function found");
        toast.custom(
          (t) => (
            <CustomToast variant={"error"} metadata={t}>
              No setter function found
            </CustomToast>
          ),
          {
            position: "top-center",
          },
        );

        router.push("/");
        return;
      }
      await signOut();
      // Reset the shared context to its default state
      setCurrentUser({
        name: "",
        email: "",
        clerkId: "",
        college_name: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        id: "",
        role: "",
        POCId: null,
        accomodation: false,
      });
      // toast.error("Signed Out Successfully");
      toast.custom(
        (t) => (
          <CustomToast variant={"info"} metadata={t}>
            Signed Out Successfully
          </CustomToast>
        ),
        {
          position: "top-center",
        },
      );
    } catch (error) {
      toast.custom(
        (t) => (
          <CustomToast variant={"error"} metadata={t}>
            Error signing out
          </CustomToast>
        ),
        {
          position: "top-center",
        },
      );
      // toast.error(`Error signing out`);
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
      {CurrentUser && CurrentUser.clerkId !== "" && (
        <div className="m-4 flex scale-150 flex-col gap-4">
          <button
            className="border-2 p-2"
            disabled={CurrentUser?.clerkId === ""}
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          {/*//TODO: Shift this to home page after it has been redisgned*/}
          {CurrentUser.role === "Ambassador" ? (
            <div className="border-2 p-2">Ambassador Token : {}</div>
          ) : (
            <button
              className="border-2 p-2"
              onClick={() => router.push("/ambassador")}
            >
              Register as campus ambassador
            </button>
          )}
        </div>
      )}
    </div>
  );
};
export default Page;
