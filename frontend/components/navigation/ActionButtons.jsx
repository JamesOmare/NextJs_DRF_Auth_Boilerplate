"use client"

import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    } from "@/components/ui/sheet"

const ActionButtons = () => {
    return ( 
    <div>
        <div className="hidden md:flex md:space-x-4">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                    className="text-md bg-black text-white"
                    variant="ghost"
                    >
                        Trigger Sheet
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when youre done.
                    </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                        Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                        Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                    </div>
                    <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>

            <Button
            className="text-md"
            >
                Sign in
            </Button>
            <Button
            className="text-md bg-blue-500">
                Get Started
            </Button>
            

        </div>
    </div> 
    );
}
 
export default ActionButtons;