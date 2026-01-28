"use client";

import React, { useState } from "react";
import clsx from "clsx";

type Props = {
  peopleDesc: string;
  maxLines?: number;
};

const PeopleDesc = ({ peopleDesc, maxLines = 3 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!peopleDesc) return null;

  return (
    <div className="mt-3 w-full rounded-xl bg-muted/70 mr-2 h-32 p-4 text-sm">
      <p
        className={clsx(
          "whitespace-pre-line leading-relaxed transition-all",
          !expanded && `line-clamp-${maxLines}`,
        )}
      >
        {`Finding For ${peopleDesc}`}
      </p>

      {peopleDesc.length > 150 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-xs font-medium uppercase text-gray-600 hover:text-black"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default PeopleDesc;
