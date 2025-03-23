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
  

const LoginModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
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
                <Button variant={"outline"}>
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