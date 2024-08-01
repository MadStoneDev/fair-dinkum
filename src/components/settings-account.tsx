import SettingsBlock from "@/components/settings-block";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";

export default function SettingsAccount() {
  return (
    <>
      {/* Disable Account */}
      <SettingsBlock
        blockTitle="Disable Account"
        blockDesc="Disabling your account will hide it from the public but will not delete any of your data. Logging in again will automatically re-enable your account."
        action={
          <>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Disable Account</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] text-sm">
                <DialogHeader>
                  <DialogTitle>Disable Your Account</DialogTitle>
                  <DialogDescription>
                    If you are sure you want to disable your account, please
                    enter your username exactly as it is shown on your profile.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="grid gap-1">
                    <Label htmlFor="username" className="text-left font-medium">
                      Username
                    </Label>
                    <Input id="username" defaultValue="" className="" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant={"outline"}>
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit" variant={"destructive"}>
                    Continuing Disabling
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        }
      />

      {/* Separator */}
      <div className={`w-full h-[0.05rem] bg-dark/10`}></div>

      {/* Delete Account */}
      <SettingsBlock
        blockTitle="Delete Account"
        blockDesc="Deleting your account will remove your account and delete all of your data. You will not be able to recover your account."
        action={
          <>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] text-sm">
                <DialogHeader>
                  <DialogTitle>Delete Your Account</DialogTitle>
                  <DialogDescription>
                    If you are sure you want to delete your account, please
                    enter your username exactly as it is shown on your profile.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="grid gap-1">
                    <Label htmlFor="username" className="text-left font-medium">
                      Username
                    </Label>
                    <Input id="username" defaultValue="" className="" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant={"outline"}>
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit" variant={"destructive"}>
                    Continuing Deleting
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        }
      />
    </>
  );
}
