export type Animal = {
  id: number;
  name: string;
  emoji: string;
  types: [{ type: { name: string } }];
  skills: [{ skill: { name: string; power: number } }];
  description: string;
};
