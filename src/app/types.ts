export type SectionKey =
  | "general"
  | "transport"
  | "food"
  | "energy"
  | "material"
  | "waste";

export type CompletionStatus = {
  ok: boolean;
  issues: string[];
};
