const PROFILES = {
  CuriousExplorer: "Curious Explorer",
  ConsciousConsumer: "Conscious Consumer",
  SavvySwapper: "Savvy Swapper",
}


const PROFILE_MAP = new Map();

PROFILE_MAP.set(PROFILES.CuriousExplorer, "curious-explorer");
PROFILE_MAP.set(PROFILES.ConsciousConsumer, "conscious-consumer");
PROFILE_MAP.set(PROFILES.SavvySwapper, "savvy-swapper");

export { PROFILES, PROFILE_MAP };