export const MENUITEMS = [
  {
    title: "Our Company",
    type: "sub",
    children: [
      { path: "/#", title: "Purpose & Company Vision", type: "link" },
      { path: "/#", title: "The CocaCola System", type: "link" },
      { path: "/#", title: "Leadership", type: "link" },
      { path: "/#", title: "Our Board of Directors", type: "link" },
      {
        title: "Coca Cola History",
        type: "sub",
        tag: "new",
        children: [
          { path: "/#", title: "Our Origins", type: "link" },
          { path: "/#", title: "Our First Bottle", type: "link" },
          { path: "/#", title: "Sustainablity History", type: "link" },
          { path: "/#", title: "Advertising History", type: "link" },
        ],
      },
    ],
  },
  {
    title: "Brands",
    megaMenu: true,
    megaMenuType: "small",
    type: "sub",
    children: [
      {
        title: "Sparkling",
        type: "sub",
        children: [
          { path: "/#", title: "Coca-Cola", type: "link" },
          { path: "/#", title: "Diet Coke", type: "link" },
          { path: "/#", title: "Fanta", type: "link" },
          { path: "/#", title: "Sprite", type: "link" },
        ],
      },
      {
        title: "Hydration",
        type: "sub",
        children: [
          { path: "/#", title: "AHA", type: "link" },
          { path: "/#", title: "BODYARMOR", type: "link" },
          { path: "/#", title: "Dasani", type: "link" },
          { path: "/#", title: "Powerade", type: "link" },
          { path: "/#", title: "smartwater", type: "link" },
          { path: "/#", title: "Topo Chico", type: "link" },
        ],
      },
      {
        title: "Coffee & Tea",
        type: "sub",
        children: [
          { path: "/#", title: "Costa Coffee", type: "link", tag: "new" },
          { path: "/#", title: "FuzeTea", type: "link" },
          { path: "/#", title: "Gold Peak Tea", type: "link" },
          { path: "/#", title: "Peace Tea", type: "link" },
        ],
      },
      {
        title: "Juices & Dairy",
        type: "sub",
        children: [
          { path: "/#", title: "fairlife", type: "link" },
          { path: "/#", title: "innocent", type: "link" },
          { path: "/#", title: "Minute Maid", type: "link" },
          { path: "/#", title: "Simply", type: "link" },
        ],
      },
    ],
  },
    {
      title: "Sustainablity",
      type: "link",
    },
    {
      title: "Social",
      megaMenu: true,
      megaMenuType: "small",
      type: "sub",
      children: [
        {
          title: "Diversity, equity and inclusion",
          type: "sub",
          children: [
            { path: "/#", title: "Leadership Council", type: "link", icon: "alert" },
            { path: "/#", title: "Employee Groups", type: "link", icon: "layout-accordion-merged" },
          ],
        },
        {
          title: "People & Communities",
          type: "sub",
          children: [
            { path: "/#", title: "Women Empowerment", type: "link", icon: "list" },
            { path: "/#", title: "Project Last Mile", type: "link", icon: "gallery" },
          ],
        },
        // { path: "/portfolio/title", title: "Coca-Cola Foundation", type: "link" },
        {
          title: "Human Rights",
          type: "sub",
          children: [
            { path: "/#", title: "Human Right Governance", type: "link", icon: "bar-chart" },
            { path: "/#", title: "Stories of Impact", type: "link", icon: "headphone" },
          ],
        },
        // { path: "/portfolio/product-box", title: "Partnerships", type: "link", icon: "bar-chart" },
      ],
    },
    {
      title: "Careers",
      type: "sub",
      megaMenu: true,
      megaMenuType: "small",
      children: [
        {
          title: "Life at Coca-Cola",
          type: "sub",
          tag: "new",
          children: [
            { path: "/#", title: "Culture", type: "link" },
            { path: "/#", title: "Benefits", type: "link" },
            { path: "/#", title: "Career Development", type: "link" },
          ],
        },
        {
          title: "Career Areas",
          type: "sub",
          children: [
            { path: "/#", title: "Early Career", type: "link" },
            { path: "/#", title: "Experienced Professionals", type: "link" },
            { path: "/#", title: "Military", type: "link" },
            { path: "/#", title: "Accessible Workplace", type: "link" },
          ],
        },
        {
          title: "Hiring Process",
          type: "sub",
          children: [
            { path: "/#", title: "Application process", type: "link" },
            { path: "/#", title: "Interview", type: "link", tag: "new" },
            { path: "/#", title: "Offers", type: "link", tag: "new" },
          ],
        },
      ],
    },
    {
      title: "Media Center",
      type: "link",
    },
  ];
  