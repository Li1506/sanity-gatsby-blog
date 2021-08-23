export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61238cbf8aa47c13274f28b3",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-f3ea8rvz",
                  apiId: "b00d9cd0-70f3-48cd-a269-e74e04b8aafe",
                },
                {
                  buildHookId: "61238cbfde1929125afaf547",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ky3kswja",
                  apiId: "5bfebadb-0ce8-4e13-8986-0b040401a5df",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Li1506/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ky3kswja.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
