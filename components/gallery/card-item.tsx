"use client";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

type CardProps = {
  billboard: string;
  category: string;
};

const CardItem = ({ billboard, category }: CardProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // Use logo as placeholder image
  const imageUrl = "/logo.png";

  return (
    <Card>
      <CardContent className="flex aspect-square justify-center relative ">
        <Image
          src={imageUrl}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "5px",
          }}
          fill
          alt="Image"
          sizes="any"
        />
        <div className="absolute left-8 bottom-8 flex gap-2 flex-col w-24">
          <p className="text-black font-bold text-2xl">
            {category[0].toUpperCase() + category.slice(1)}
          </p>
          <Button>Shop</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;