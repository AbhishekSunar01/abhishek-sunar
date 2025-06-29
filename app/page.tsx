import { Button } from "@/components/ui/button";
import profile from "@/public/main.jpeg";
import Image from "next/image";

export default function Page() {
  return (
    <div className="my-16 flex items-center justify-center space-x-4 flex-col">
      <Image
        src={profile}
        alt="Profile"
        className="rounded-full"
        width={200}
        height={200}
      />
      <h1 className="text-center w-[600px] mt-6">
        Hii I am Abhishek Sunar, a Software Engineer
      </h1>
      <p className="text-muted-foreground text-xl text-center w-[700px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        consectetur molestiae minus reiciendis, voluptate sapiente explicabo
        doloremque, deleniti incidunt itaque nisi. Accusantium magnam, quae quos
        dolor ea esse provident ab?
      </p>
      <div className="my-4 flex items-center gap-6"></div>
      <Button className="mt-4 p-6 text-xl flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        Available for work
      </Button>
    </div>
  );
}
