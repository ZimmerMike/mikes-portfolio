"use client";
import { useEffect, useState } from "react";

export default function Chip(props: { tag: string }) {
  return (
    <div className="bg-purple-800 rounded-full px-4 py-1 w-fit text-nowrap text-sm text-white" >
      <span>{props.tag}</span>
    </div>
  );
}
