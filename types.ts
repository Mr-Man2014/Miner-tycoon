export enum OreType {
  COAL = 'coal',
  IRON = 'iron',
  GOLD = 'gold',
  SAPPHIRE = 'sapphire',
  RUBY = 'ruby',
  EMERALD = 'emerald',
  DIAMOND = 'diamond',
  OBSIDIAN = 'obsidiana',
  MYTHRIL = 'mythril',
  ADAMANTITE = 'adamantite',
  CRYSTAL = 'crystal'
}

export type OreSize = 'Small' | 'Medium' | 'Large' | 'Gigantic';

export const ORE_SIZE_MULTIPLIERS: Record<OreSize, number> = {
  'Small': 1,
  'Medium': 1.5,
  'Large': 2.5,
  'Gigantic': 5
};

export interface OreInfo {
  type: OreType;
  name: string;
  color: string;
  value: number;
  rarity: number; // 0-1, 1 is common, 0 is rare
  minStrength: number;
}

export interface Upgrades {
  strength: number;
  luck: number;
  backpack: number;
  multiMine: number;
}

export interface BossOre {
  type: OreType;
  health: number;
  maxHealth: number;
  rewardMultiplier: number;
  name: string;
  color: string;
  difficulty: number;
}

export interface GameEvent {
  id: string;
  name: string;
  description: string;
  duration: number; // in seconds
  type: 'luck' | 'xp' | 'strength' | 'gold';
  multiplier: number;
  color: string;
}

export interface UserData {
  uid: string;
  displayName: string;
  money: number;
  resources: Record<OreType, number>;
  resourceWeights: Record<string, number>; // Store total value weight for sizes
  upgrades: Upgrades;
  achievements: string[];
  totalResourcesMined: number;
  playtime: number; // In seconds
  lastLogin: number;
  level: number;
  xp: number;
  prestige: number;
  hasCompletedTutorial?: boolean;
  nextEventTime: number;
  nextEventId: string;
  mutations: string[];
  multipliers?: {
    gold: number;
    luck: number;
    xp: number;
    strength: number;
  };
  vaultResources: Record<string, number>;
  activeEvents: { id: string, startTime: number, duration: number }[];
  profileCustomization: {
    title?: string;
    avatarColor?: string;
    avatarIcon?: string;
  };
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
  }
}
