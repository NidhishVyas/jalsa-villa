const MediaQueries = {
  t: {
    query: "only screen and (min-width:420px)",
    sizes: {
      NavbarLogo: "22.4px",
      TitleText: "20.8px",
      subTitleText: "16px",
    },
  },
  ts: {
    query: "only screen and (min-width: 320px) and (max-width: 576px)",
    sizes: {
      NavbarLogo: "22.4px",
      TitleText: "20.8px",
      subTitleText: "16px",
    },
  },
  s: {
    query: "only screen and (min-width:576px)",
    sizes: {
      NavbarLogo: "22.4px",
      TitleText: "20.8px",
      subTitleText: "16px",
    },
  },

  m: {
    query: "only screen and (min-width:768px)",
    sizes: {
      NavbarLogo: "22.4px",
      TitleText: "20.8px",
      subTitleText: "16px",
    },
  },
  mtl: {
    query: "only screen and (min-width:768px) and (max-width:992px) ",
    sizes: {
      NavbarLogo: "22.4px",
      TitleText: "20.8px",
      subTitleText: "16px",
    },
  },
  l: {
    query: "only screen and (min-width:992px)",
    sizes: {
      NavbarLogo: "22.4px",
      TitleText: "20.8px",
      subTitleText: "16px",
    },
  },
  xl: {
    query: "only screen and (min-width:1200px)",
    sizes: {
      NavbarLogo: "22.4px",
      TitleText: "20.8px",
      subTitleText: "16px",
    },
  },
  xxl: {
    query: "only screen and (min-width:1400px)",
    sizes: {
      NavbarLogo: "22.4px",
      TitleText: "20.8px",
      subTitleText: "16px",
    },
  },
};

const Fonts = {
  Abril: `'Abril Fatface', cursive`,
  Poppins: `'Poppins', sans-serif`,
  Ruthie: `'Ruthie', cursive`,
};

export const theme = {
  MediaQueries: MediaQueries,
  Fonts: Fonts,
};
