"use client";

import { Button } from "@/components/ui/button";

/* ----------------------------------
   Share type (same as Prisma enum)
----------------------------------- */
type ShareType =
  | "HOURS_BY_HOURS"
  | "DAYS_BY_DAYS"
  | "DAY_OR_NIGHT"
  | "SPLIT_STORE";

/* ----------------------------------
   Props Interface
----------------------------------- */
interface ReserveCardProps {
  price: number;
  sharetype: ShareType;
  partnerBussiness?: string;

  // Conditional fields
  startTime?: string;
  endTime?: string;
  days?: string[];
  dayOrNight?: "Day" | "Night";
}

/* ----------------------------------
   Component
----------------------------------- */
export default function ReserveCard(props: ReserveCardProps) {
  const {
    price,
    sharetype,
    partnerBussiness,
    startTime,
    endTime,
    days,

    dayOrNight,
  } = props;

  /* ----------------------------------
     Render details based on share type
  ----------------------------------- */
  const renderShareDetails = () => {
    switch (sharetype) {
      case "HOURS_BY_HOURS":
        return (
          <p className="mt-2 text-sm text-muted-foreground">
            Time: <span className="font-medium">{startTime}</span> –{" "}
            <span className="font-medium">{endTime}</span>
          </p>
        );

      case "DAYS_BY_DAYS":
        return (
          <div className="mt-2">
            <p className="text-sm text-muted-foreground mb-1">Available Days</p>
            <div className="flex flex-wrap gap-2">
              {days.map((day) => (
                <span
                  key={day}
                  className="rounded-full border px-3 py-1 text-xs font-medium"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
        );

      case "DAY_OR_NIGHT":
        return (
          <p className="mt-2 text-sm text-muted-foreground">
            Slot: <span className="font-medium">{dayOrNight}</span>
          </p>
        );

      case "SPLIT_STORE":
        return (
          <p className="mt-2 text-sm text-muted-foreground">
            Partner Business:{" "}
            <span className="font-medium">{partnerBussiness}</span>
          </p>
        );

      default:
        return null;
    }
  };

  /* ----------------------------------
     JSX
  ----------------------------------- */
  return (
    <div className="w-full  rounded-2xl p-8 shadow-lg border">
      {/* Price */}
      <div className="mb-2 text-lg font-semibold">
        ₹ {price} <span className="text-sm font-normal">/ month</span>
      </div>

      {/* Share Type */}
      <div className="text-sm font-medium text-gray-700">
        {sharetype.replaceAll("_", " ")}
        {partnerBussiness && ` | ${partnerBussiness}`}
      </div>

      {/* Conditional Details */}
      {renderShareDetails()}

      {/* Reserve Button */}
      <Button className="mt-6 w-full rounded-full py-6 text-base font-semibold bg-blue-500 hover:bg-blue-600">
        Chat with Partner
      </Button>

      {/* Footer */}
      <p className="mt-2 text-center text-sm text-muted-foreground">
        You won&apos;t be charged yet
      </p>

      <button className="mt-4 w-full text-center text-sm underline text-muted-foreground">
        Report this listing
      </button>
    </div>
  );
}
