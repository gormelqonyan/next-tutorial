import Image from "next/image";
import React from "react";

import Theme from "@/components/navigation/navbar/Theme";

const Navbar = () => {
  return (
    <nav
      className={
        "flex-between background-light900_dark200 shadow-light-100 fixed z-50 w-full gap-5 p-6 dark:shadow-none"
      }
    >
      <div className={"flex items-center gap-1"}>
        <Image
          src="/images/site-logo.svg"
          alt="Dev overflow"
          width={18}
          height={18}
        />
        <p
          className={
            "h2-bold font-space-grotesk text-dark-100 dark:text-light-900 flex items-center max-sm:hidden"
          }
        >
          Dev <span className={"text-primary-500"}>Overflow</span>
        </p>
      </div>
      <div>search</div>
      <div>
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
