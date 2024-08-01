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

export default function SettingsProfile() {
  return (
    <>
      {/* Username */}
      <SettingsBlock
        blockTitle="Username"
        blockDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi"
        blockInfo={"username"}
        action={
          <>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Edit</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] text-sm">
                <DialogHeader>
                  <DialogTitle>Change Username</DialogTitle>
                  <DialogDescription>
                    Try a new username for your account and enter your existing
                    password to confirm.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="grid gap-1">
                    <Label htmlFor="username" className="text-left font-medium">
                      Username
                    </Label>
                    <Input id="username" defaultValue="username" className="" />
                  </div>
                  <div className="grid gap-1">
                    <Label htmlFor="password" className="text-left font-medium">
                      Current Password
                    </Label>
                    <Input
                      id="password"
                      defaultValue=""
                      type="password"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant={"outline"}>
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit">Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        }
      />

      {/* Separator */}
      <div className={`w-full h-[0.05rem] bg-dark/10`}></div>

      {/* Email */}
      <SettingsBlock
        blockTitle="Email"
        blockDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi"
        blockInfo={"******@email.com"}
        action={
          <>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Edit</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] text-sm">
                <DialogHeader>
                  <DialogTitle>Change your email address</DialogTitle>
                  <DialogDescription>
                    Choose a new email address for your account. We will send an
                    email to your current email address to confirm this change.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="grid gap-1">
                    <Label htmlFor="email" className="text-left font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      defaultValue="email@email.com"
                      className=""
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant={"outline"}>
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit">Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        }
      />

      {/* Separator */}
      <div className={`w-full h-[0.05rem] bg-dark/10`}></div>

      {/* Password */}
      <SettingsBlock
        blockTitle="Password"
        blockDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi"
        action={
          <>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Change Password</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] text-sm">
                <DialogHeader>
                  <DialogTitle>Update your password</DialogTitle>
                  <DialogDescription>
                    Enter your current password to confirm the change and a new
                    secure password.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="grid gap-1">
                    <Label
                      htmlFor="current-username"
                      className="text-left font-medium"
                    >
                      Current Password
                    </Label>
                    <Input id="current-username" defaultValue="" className="" />
                  </div>
                  <div className="grid gap-1">
                    <Label
                      htmlFor="new-password"
                      className="text-left font-medium"
                    >
                      New Password
                    </Label>
                    <Input
                      id="new-password"
                      defaultValue=""
                      type="password"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid gap-1">
                    <Label
                      htmlFor="confirm-password"
                      className="text-left font-medium"
                    >
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirm-password"
                      defaultValue=""
                      type="password"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant={"outline"}>
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit">Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        }
      />
    </>
  );
}
