export interface ThemeEntity {
    breakpoint: {
      xs: number,
      sm: number,
      md: number,
      lg: number,
      xl: number,
    },
    media: {
      xsAbove: string,
      xsBelow: string,
      smAbove: string,
      smBelow: string,
      mdAbove: string,
      mdBelow: string,
      lgAbove: string,
      lgBelow: string,
      xlAbove: string,
      xlBelow: string,
    },
    maxContainerWidth: {
      xs: number,
      sm: number,
      md: number,
      lg: number,
      xl: number,
    },
    elevation: {
      dp1: string, 
      dp2: string,
      dp3: string,
      dp4: string,
      dp5: string,
      dp6: string,
      dp7: string,
      dp8: string,
      dp9: string,
      dp10: string,
      dp11: string,
      dp12: string,
      dp13: string,
      dp14: string,
      dp15: string,
      dp16: string,
      dp17: string,
      dp18: string,
      dp19: string,
      dp20: string,
      dp21: string,
      dp22: string,
      dp23: string,
      dp24: string,
    },
    elevationSpecial: {
      dp1: string;
      dp4: string;
      dp8: string;
    }
  }
  
  export const theme = {} as ThemeEntity;
  
  theme.breakpoint = {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1550,
  };
  
  theme.media = {
    xsAbove: `@media (min-width: ${theme.breakpoint.xs}px)`,
    xsBelow: `@media (max-width: ${theme.breakpoint.xs - 1}px)`,
    smAbove: `@media (min-width: ${theme.breakpoint.sm}px)`,
    smBelow: `@media (max-width: ${theme.breakpoint.sm - 1}px)`,
    mdAbove: `@media (min-width: ${theme.breakpoint.md}px)`,
    mdBelow: `@media (max-width: ${theme.breakpoint.md - 1}px)`,
    lgAbove: `@media (min-width: ${theme.breakpoint.lg}px)`,
    lgBelow: `@media (max-width: ${theme.breakpoint.lg - 1}px)`,
    xlAbove: `@media (min-width: ${theme.breakpoint.xl}px)`,
    xlBelow: `@media (max-width: ${theme.breakpoint.xl - 1}px)`,
  };
  
  theme.maxContainerWidth = {
    xs: 540,
    sm: 720,
    md: 960,
    lg: 1184,
    xl: 1400,
  };

  theme.elevation = {
    dp1: `0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);`,
    dp2: `0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);`,
    dp3: `0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);`,
    dp4: `0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);`,
    dp5: `0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);`,
    dp6: `0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);`,
    dp7: `0 4px 5px -2px rgba(0,0,0,.2), 0 7px 10px 1px rgba(0,0,0,.14), 0 2px 16px 1px rgba(0,0,0,.12);`,
    dp8: `0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);`,
    dp9: `0 5px 6px -3px rgba(0,0,0,.2), 0 9px 12px 1px rgba(0,0,0,.14), 0 3px 16px 2px rgba(0,0,0,.12);`,
    dp10: `0 6px 6px -3px rgba(0,0,0,.2), 0 10px 14px 1px rgba(0,0,0,.14), 0 4px 18px 3px rgba(0,0,0,.12);}`,
    dp11: `0 6px 7px -4px rgba(0,0,0,.2), 0 11px 15px 1px rgba(0,0,0,.14), 0 4px 20px 3px rgba(0,0,0,.12);`,
    dp12: `0 7px 8px -4px rgba(0,0,0,.2), 0 12px 17px 2px rgba(0,0,0,.14), 0 5px 22px 4px rgba(0,0,0,.12);`,
    dp13: `0 7px 8px -4px rgba(0,0,0,.2), 0 13px 19px 2px rgba(0,0,0,.14), 0 5px 24px 4px rgba(0,0,0,.12);`,
    dp14: `0 7px 9px -4px rgba(0,0,0,.2), 0 14px 21px 2px rgba(0,0,0,.14), 0 5px 26px 4px rgba(0,0,0,.12);`,
    dp15: `0 8px 9px -5px rgba(0,0,0,.2), 0 15px 22px 2px rgba(0,0,0,.14), 0 6px 28px 5px rgba(0,0,0,.12)`,
    dp16: `0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12)`,
    dp17: `0 8px 11px -5px rgba(0,0,0,.2), 0 17px 26px 2px rgba(0,0,0,.14), 0 6px 32px 5px rgba(0,0,0,.12)`,
    dp18: `0 9px 11px -5px rgba(0,0,0,.2), 0 18px 28px 2px rgba(0,0,0,.14), 0 7px 34px 6px rgba(0,0,0,.12)`,
    dp19: `0 9px 12px -6px rgba(0,0,0,.2), 0 19px 29px 2px rgba(0,0,0,.14), 0 7px 36px 6px rgba(0,0,0,.12)`,
    dp20: `0 10px 13px -6px rgba(0,0,0,.2), 0 20px 31px 3px rgba(0,0,0,.14), 0 8px 38px 7px rgba(0,0,0,.12)`,
    dp21: `0 10px 13px -6px rgba(0,0,0,.2), 0 21px 33px 3px rgba(0,0,0,.14), 0 8px 40px 7px rgba(0,0,0,.12)`,
    dp22: `0 10px 14px -6px rgba(0,0,0,.2), 0 22px 35px 3px rgba(0,0,0,.14), 0 8px 42px 7px rgba(0,0,0,.12)`,
    dp23: `0 11px 14px -7px rgba(0,0,0,.2), 0 23px 36px 3px rgba(0,0,0,.14), 0 9px 44px 8px rgba(0,0,0,.12)`,
    dp24: `0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)`,
};

theme.elevationSpecial = {
    dp1: `0 2px 1px -1px rgba(214, 51, 132,.2), 0 1px 1px 0 rgba(214, 51, 132,.14), 0 1px 3px 0 rgba(214, 51, 132,.12);`,
    dp4: `0 2px 4px -1px rgba(214, 51, 132,.2), 0 4px 5px 0 rgba(214, 51, 132,.14), 0 1px 10px 0 rgba(214, 51, 132,.12);`,
    dp8: `0 5px 5px -3px rgba(214, 51, 132,.2), 0 8px 10px 1px rgba(214, 51, 132,.14), 0 3px 14px 2px rgba(214, 51, 132,.12);`,
};
  
  // export default theme;
  