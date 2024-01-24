// match.model.ts

export interface Match {
  team1: {
    countryCode: string;
    score: number;
  };
  team2: {
    countryCode: string;
    score: number;
  };
  group: string;
}
