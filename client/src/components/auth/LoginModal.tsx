import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
  

const LoginModal = () => {

    const handleLogin = () => {
        signIn("google", { callbackUrl: "/dashboard", redirect: true });
    }

    return (
        <Dialog>
            <DialogTrigger className="bg-gray-700 py-2 px-3 rounded-lg text-white">
                Getting Start
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-2xl">Welcome to Bavarder</DialogTitle>
                <DialogDescription>
                    Bavarder makes it effortless to create
                    secure chat links and start conversations in seconds.
                </DialogDescription>
                </DialogHeader>
                <Button variant={"outline"} onClick={handleLogin}>
                    <Image 
                        src={"/images/google.png"}
                        alt={"Google Logo"}
                        width={25}
                        height={25}
                        className="mr-4"
                    />
                    Continue with Google
                </Button>
            </DialogContent>
        </Dialog>

    );
}



export default LoginModal;