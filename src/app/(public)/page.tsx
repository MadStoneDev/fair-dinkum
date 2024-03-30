import React from "react";

import HomeLockScreen from "@/components/sections/HomeLockScreen";
import HomeFeed from "@/components/sections/HomeFeed";

export default function HomePage() {
  const session = true;
  const user = true;

  return !session || !user ? <HomeLockScreen /> : <HomeFeed />;
}
