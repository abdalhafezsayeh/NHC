import React from "react";
import CardSkeleton from "@/components/skeletons/CardSkeleton";

function CardsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-3/4 m-auto mt-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}

export default CardsSkeleton;
