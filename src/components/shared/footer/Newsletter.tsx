import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <div className="flex flex-col   items-center gap-2">
      <p className="font-semibold">Join our newsletter</p>
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  );
}
