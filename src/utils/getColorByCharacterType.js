import { POKEMON_TYPE_COLORS } from "./constants";

const getColorByCharacterType = (type) =>
  POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByCharacterType;
