import { OreType, OreInfo, GameEvent } from '../types';

export const ORES: Record<OreType, OreInfo> = {
  [OreType.COAL]: {
    type: OreType.COAL,
    name: 'Coal',
    color: '#2c2c2c',
    value: 5,
    rarity: 1.0,
    minStrength: 1
  },
  [OreType.IRON]: {
    type: OreType.IRON,
    name: 'Iron',
    color: '#a19d94',
    value: 20,
    rarity: 0.5,
    minStrength: 2
  },
  [OreType.GOLD]: {
    type: OreType.GOLD,
    name: 'Gold',
    color: '#ffd700',
    value: 100,
    rarity: 0.15,
    minStrength: 5
  },
  [OreType.SAPPHIRE]: {
    type: OreType.SAPPHIRE,
    name: 'Sapphire',
    color: '#0000ff',
    value: 350,
    rarity: 0.08,
    minStrength: 10
  },
  [OreType.RUBY]: {
    type: OreType.RUBY,
    name: 'Ruby',
    color: '#ff0000',
    value: 400,
    rarity: 0.07,
    minStrength: 12
  },
  [OreType.EMERALD]: {
    type: OreType.EMERALD,
    name: 'Emerald',
    color: '#50c878',
    value: 1200,
    rarity: 0.04,
    minStrength: 20
  },
  [OreType.DIAMOND]: {
    type: OreType.DIAMOND,
    name: 'Diamond',
    color: '#b9f2ff',
    value: 3000,
    rarity: 0.02,
    minStrength: 25
  },
  [OreType.OBSIDIAN]: {
    type: OreType.OBSIDIAN,
    name: 'Obsidian',
    color: '#1a1a1a',
    value: 8000,
    rarity: 0.01,
    minStrength: 40
  },
  [OreType.MYTHRIL]: {
    type: OreType.MYTHRIL,
    name: 'Mythril',
    color: '#4fc3f7',
    value: 25000,
    rarity: 0.005,
    minStrength: 60
  },
  [OreType.ADAMANTITE]: {
    type: OreType.ADAMANTITE,
    name: 'Adamantite',
    color: '#8bc34a',
    value: 100000,
    rarity: 0.001,
    minStrength: 100
  },
  [OreType.CRYSTAL]: {
    type: OreType.CRYSTAL,
    name: 'Crystal',
    color: '#e0b0ff',
    value: 500000,
    rarity: 0.0002,
    minStrength: 250
  }
};

export const UPGRADE_CONFIGS = {
  strength: {
    name: 'Pickaxe Strength',
    description: 'Increases the speed of mining and allows mining harder ores.',
    baseCost: 50,
    multiplier: 2.2 // Increased from 1.8
  },
  luck: {
    name: 'Luck Charm',
    description: 'Higher chance to find rare ores while mining.',
    baseCost: 100,
    multiplier: 2.5 // Increased from 2.2
  },
  backpack: {
    name: 'Backpack Capacity',
    description: 'Carry more resources at once.',
    baseCost: 30,
    multiplier: 1.8, // Increased from 1.5
    increment: 5
  },
  multiMine: {
    name: 'Drill Efficiency',
    description: 'Mine multiple ores per click.',
    baseCost: 250000, // Increased from 50,000
    multiplier: 12 // Increased from 10
  }
};

export const CRAFTING_RECIPES = [
  {
    id: 'basic_refinery',
    name: 'Auto-Refinery',
    description: 'Increases value of all ores by 10%.',
    cost: { [OreType.COAL]: 500, [OreType.IRON]: 250 },
    effect: 'value_mult:1.1'
  },
  {
    id: 'luck_pendant',
    name: 'Ancient Luck Pendant',
    description: 'Permanently increases luck by 5 levels.',
    cost: { [OreType.IRON]: 1000, [OreType.GOLD]: 250 },
    effect: 'luck_add:5'
  },
  {
    id: 'void_bag',
    name: 'Void Bag',
    description: 'Adds 100 to backpack capacity.',
    cost: { [OreType.GOLD]: 500, [OreType.DIAMOND]: 50 },
    effect: 'backpack_add:100'
  },
  {
    id: 'plasma_drill',
    name: 'Plasma Drill',
    description: '+50% Mining Strength.',
    cost: { [OreType.OBSIDIAN]: 100, [OreType.MYTHRIL]: 20 },
    effect: 'strength_mult:1.5'
  },
  {
    id: 'void_core',
    name: 'Void Core',
    description: '2x Luck and 2x XP permanently.',
    cost: { [OreType.MYTHRIL]: 100, [OreType.ADAMANTITE]: 50, [OreType.CRYSTAL]: 5 },
    effect: 'luck_mult:2.0,xp_mult:2.0'
  },
  {
    id: 'singularity_pick',
    name: 'Singularity Pick',
    description: '10x Mining Strength permanently.',
    cost: { [OreType.ADAMANTITE]: 200, [OreType.CRYSTAL]: 25 },
    effect: 'strength_mult:10.0'
  }
];

export const ACHIEVEMENTS = [
  { id: 'first_coal', name: 'Black Gold', description: 'Mine your first piece of coal.', requirement: (s: any) => s.resources.coal > 0 },
  { id: 'tutorial_complete', name: 'Fresh Recruit', description: 'Complete the underground orientation.', requirement: (s: any) => s.hasCompletedTutorial },
  { id: 'first_upgrade', name: 'Progress!', description: 'Upgrade a tool for the first time.', requirement: (s: any) => Object.values(s.upgrades).some((v: any) => v > (v === s.upgrades.backpack ? 5 : 1)) },
  { id: 'rare_find', name: 'Shiny!', description: 'Collect a rare diamond.', requirement: (s: any) => s.resources.diamond > 0 },
  { id: 'boss_slayer', name: 'Gargantuan Task', description: 'Defeat your first Boss Ore.', requirement: (s: any) => s.achievements.includes('boss_defeated') },
  { id: 'millionaire', name: 'Deep State Wealth', description: 'Reach 1,000,000 money.', requirement: (s: any) => s.money >= 1000000 },
  { id: 'leaderboard_pro', name: 'Rising Star', description: 'Reach top 10 on the leaderboard.', requirement: (s: any) => s.rank && s.rank <= 10 }
];

export const TITLES = [
  { id: 'novice', name: 'Dirt Digested', minMined: 0 },
  { id: 'stable', name: 'Rock Solid', minMined: 100 },
  { id: 'expert', name: 'Deep Diver', minMined: 1000 },
  { id: 'legend', name: 'Crystal King', minMined: 10000 },
  { id: 'god', name: 'Underworld Deity', minMined: 100000 },
  { id: 'void_lord', name: 'Void Sovereign', minMined: 500000 },
  { id: 'star_eater', name: 'Star Eater', minMined: 1000000 },
  {id: 'infinity', name: 'Eternal Miner', minMined: 10000000 },
  {id: 'beyond_void', name: 'Void Walker', minMined: 50000000 },
  {id: 'galaxy_eater', name: 'Galactic Devourer', minMined: 250000000 },
  {id: 'multiverse_miner', name: 'Multiversal Architect', minMined: 1000000000 },
  {id: 'absolute_zero', name: 'Absolute Zero', minMined: 5000000000 }
];

export const XP_PER_ORE = 10;
export const XP_BASE = 500;

export const EVENTS: { [key: string]: GameEvent } = {
  crystal_rush: {
    id: 'crystal_rush',
    name: 'Crystal Rush',
    description: 'Rare ores are appearing everywhere! Luck is tripled.',
    duration: 300,
    type: 'luck',
    multiplier: 3,
    color: '#34d399'
  },
  neon_overload: {
    id: 'neon_overload',
    name: 'Neon Overload',
    description: 'The underground is glowing! All XP gains are doubled.',
    duration: 300,
    type: 'xp',
    multiplier: 2,
    color: '#a855f7'
  },
  tectonic_shift: {
    id: 'tectonic_shift',
    name: 'Tectonic Shift',
    description: 'The earth is shaking. Mining strength is doubled.',
    duration: 300,
    type: 'strength',
    multiplier: 2,
    color: '#f87171'
  },
  gold_fever: {
    id: 'gold_fever',
    name: 'Gold Fever',
    description: 'Gold veins are exploding. Sell prices are doubled.',
    duration: 300,
    type: 'gold',
    multiplier: 2,
    color: '#fbbf24'
  }
};

export const EVENT_SHOP = [
  { id: 'crystal_rush', cost: 1000000 },
  { id: 'neon_overload', cost: 2500000 },
  { id: 'tectonic_shift', cost: 5000000 },
  { id: 'gold_fever', cost: 10000000 }
];

export const MUTATIONS = [
  { id: 'greed_gene', name: 'Greed Gene', description: '+20% Sell Value.', cost: 50000000, boost: { type: 'gold', amount: 0.2 } },
  { id: 'market_aura', name: 'Market Aura', description: '+50% Sell Value.', cost: 250000000, boost: { type: 'gold', amount: 0.5 } },
  { id: 'capitalist_spirit', name: 'Capitalist Spirit', description: '+100% Sell Value.', cost: 1000000000, boost: { type: 'gold', amount: 1.0 } },
  { id: 'mortal_excess', name: 'Mortal Excess', description: '+500% Sell Value.', cost: 50000000000, boost: { type: 'gold', amount: 5.0 } },
  { id: 'cosmic_inflation', name: 'Cosmic Inflation', description: '+2000% Sell Value.', cost: 1000000000000, boost: { type: 'gold', amount: 20.0 } },
  { id: 'omega_trade', name: 'Omega Trading', description: '+10000% Sell Value.', cost: 50000000000000, boost: { type: 'gold', amount: 100.0 } },
  { id: 'reality_broker', name: 'Reality Broker', description: '+100000% Sell Value.', cost: 1000000000000000, boost: { type: 'gold', amount: 1000.0 } }
];

export const PRESTIGE_RECIPES = [
  {
    id: 'prestige_1',
    name: 'Eternal Singularity',
    description: 'Consume your existence to transcend. (Resets cash/upgrades, +1 Prestige)',
    requirements: {
      [OreType.COAL]: 50000,
      [OreType.DIAMOND]: 5000,
      [OreType.CRYSTAL]: 100
    }
  }
];

export const AVATAR_ICONS = [
  { id: 'miner', icon: 'Pickaxe' },
  { id: 'cat', icon: 'Cat' },
  { id: 'dog', icon: 'Dog' },
  { id: 'fox', icon: 'Fox' },
  { id: 'ghost', icon: 'Ghost' },
  { id: 'bot', icon: 'Bot' },
  { id: 'crown', icon: 'Crown' },
  { id: 'flame', icon: 'Flame' },
  { id: 'star', icon: 'Star' }
];
