import theme from "@theme/index";

const { COLORS } = theme;

export function getColor(variant: string) {
  if (variant === "inDiet") {
    return {
      background: COLORS.GREEN_LIGHT,
      arrow: COLORS.GREEN_DARK,
    };
  }

  if (variant === "outDiet") {
    return {
      background: COLORS.RED_LIGHT,
      arrow: COLORS.RED_DARK,
    };
  }

  return {
    background: COLORS.GRAY_500,
    arrow: COLORS.GRAY_200,
  };
}
