import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

interface MetricProps {
  imageUrl: string;
  title: string;
  value: string | number;
  imageStyle?: string;
  textStyle?: string;
  href?: string;
  alt: string;
  isAuthor?: boolean;
}

function Metric({
  imageUrl,
  alt,
  imageStyle,
  value = "12k",
  title,
  href,
}: MetricProps) {
  const metricContent = (
    <div className={"flex items-center gap-1"}>
      <Image
        src={imageUrl}
        alt={alt}
        width={16}
        height={16}
        className={cn(`rounded-full object-contain ${imageStyle}`)}
      />
      <p className={"text-dark400_light700 text-sm font-medium"}>{value}</p>
      <p className={"text-dark400_light700 text-xs max-sm:hidden"}>{title}</p>
    </div>
  );
  return href ? <Link href={href}>{metricContent}</Link> : <>{metricContent}</>;
}

export default Metric;
