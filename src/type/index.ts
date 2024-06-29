const eventNames = ["minimize", "close", "maximize", "is:maximize"] as const;

export type EventNames = (typeof eventNames)[number];
