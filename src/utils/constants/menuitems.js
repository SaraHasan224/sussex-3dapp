export const MENUITEMS = [
  {
    title: "Our Company",
    type: "sub",
    children: [
      { path: "/layouts/Beauty", title: "Purpose & Company Vision", type: "link" },
      { path: "/layouts/Furniture", title: "The CocaCola System", type: "link" },
      { path: "/layouts/Vegetables", title: "Leadership", type: "link" },
      { path: "/layouts/Watch", title: "Our Board of Directors", type: "link" },
      {
        title: "Coca Cola History",
        type: "sub",
        tag: "new",
        children: [
          { path: "/layouts/Tools", title: "Our Origins", type: "link" },
          { path: "/layouts/Christmas", title: "Our First Bottle", type: "link" },
          { path: "/layouts/Marketplace", title: "Sustainablity History", type: "link" },
          { path: "/layouts/Game", title: "Advertising History", type: "link" },
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
          { path: "/", title: "Coca-Cola", type: "link" },
          { path: "/layouts/Fashion2", title: "Diet Coke", type: "link" },
          { path: "/layouts/Fashion3", title: "Fanta", type: "link" },
          { path: "/layouts/Kids", title: "Sprite", type: "link" },
        ],
      },
      {
        title: "Hydration",
        type: "sub",
        children: [
          { path: "/layouts/Basics/Lookbook", title: "AHA", type: "link" },
          { path: "/layouts/Basics/Video", title: "BODYARMOR", type: "link" },
          { path: "/layouts/Basics/Parallax", title: "Dasani", type: "link" },
          { path: "/layouts/Basics/Fullpage", title: "Powerade", type: "link" },
          { path: "/layouts/Basics/Fullpage", title: "smartwater", type: "link" },
          { path: "/layouts/Basics/Fullpage", title: "Topo Chico", type: "link" },
        ],
      },
      {
        title: "Coffee & Tea",
        type: "sub",
        children: [
          { path: "/layouts/Basics/Lookbook", title: "Costa Coffee", type: "link", tag: "new" },
          { path: "/layouts/Basics/Video", title: "FuzeTea", type: "link" },
          { path: "/layouts/Basics/Parallax", title: "Gold Peak Tea", type: "link" },
          { path: "/layouts/Basics/Fullpage", title: "Peace Tea", type: "link" },
        ],
      },
      {
        title: "Juices & Dairy",
        type: "sub",
        children: [
          { path: "/layouts/Basics/Lookbook", title: "fairlife", type: "link" },
          { path: "/layouts/Basics/Video", title: "innocent", type: "link" },
          { path: "/layouts/Basics/Parallax", title: "Minute Maid", type: "link" },
          { path: "/layouts/Basics/Fullpage", title: "Simply", type: "link" },
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
            { path: "/portfolio/grid-2", title: "Leadership Council", type: "link", icon: "alert" },
            { path: "/portfolio/grid-3", title: "Employee Groups", type: "link", icon: "layout-accordion-merged" },
          ],
        },
        {
          title: "People & Communities",
          type: "sub",
          children: [
            { path: "/layouts/Nursery", title: "Women Empowerment", type: "link", icon: "list" },
            { path: "/layouts/Vegetables", title: "Project Last Mile", type: "link", icon: "gallery" },
          ],
        },
        // { path: "/portfolio/title", title: "Coca-Cola Foundation", type: "link" },
        {
          title: "Human Rights",
          type: "sub",
          children: [
            { path: "/portfolio/title", title: "Human Right Governance", type: "link", icon: "bar-chart" },
            { path: "/portfolio/collection-banner", title: "Stories of Impact", type: "link", icon: "headphone" },
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
            { path: "/page/vendor/vendor-dashboard", title: "Culture", type: "link" },
            { path: "/page/vendor/vendor-profile", title: "Benefits", type: "link" },
            { path: "/page/vendor/become-vendor", title: "Career Development", type: "link" },
          ],
        },
        {
          title: "Career Areas",
          type: "sub",
          children: [
            { path: "/page/account/wishlist", title: "Early Career", type: "link" },
            { path: "/page/account/cart", title: "Experienced Professionals", type: "link" },
            { path: "/page/account/dashboard", title: "Military", type: "link" },
            { path: "/page/account/login", title: "Accessible Workplace", type: "link" },
          ],
        },
        {
          title: "Hiring Process",
          type: "sub",
          children: [
            { path: "/page/compare", title: "Application process", type: "link" },
            { path: "/page/compare-2", title: "Interview", type: "link", tag: "new" },
            { path: "/page/compare-2", title: "Offers", type: "link", tag: "new" },
          ],
        },
      ],
    },
    {
      title: "Media Center",
      type: "link",
    },
  ];
  