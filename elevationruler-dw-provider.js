Hooks.once("setup", () => {
  const walk = {
    name: "Walk",
    color: Color.from(0x00ff00),
    multiplier: 1
  };
  const dash = {
    name: "Dash",
    color: Color.from(0xffff00),
    multiplier: 2
  };
  const run = {
    name: "Run",
    color: Color.from(0xff8000),
    multiplier: 4
  };
  const max = {
    name: "Maximum",
    color: Color.from(0xff0000),
    multiplier: Infinity
  };

  CONFIG.elevationruler.SPEED.CATEGORIES.splice(
    0,
    CONFIG.elevationruler.SPEED.CATEGORIES.length,
    ...[walk, dash, run, max]
  );

  CONFIG.elevationruler.MOVEMENT_TYPES.SWIM = 3; // Increment by 1 from the highest-valued movement type

  // This label is from Font Awesome
  CONFIG.elevationruler.MOVEMENT_BUTTONS[
    CONFIG.elevationruler.MOVEMENT_TYPES.SWIM
  ] = "person-swimming";
  CONFIG.elevationruler.SPEED.ATTRIBUTES.SWIM =
    "actor.system.props.walkingSpeed"; 

  CONFIG.elevationruler.pathfindingCheckTerrains = true;

  CONFIG.elevationruler.SPEED.useFontAwesome = true;
  CONFIG.elevationruler.SPEED.terrainSymbol = "\uf071";
});