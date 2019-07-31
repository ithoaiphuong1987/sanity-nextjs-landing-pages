export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d41d96141df1401796dfc51',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bqmshzso',
                  apiId: 'cbd620e9-d079-4fa9-9996-2cdcef127ca2'
                },
                {
                  buildHookId: '5d41d96163332d017a4060ae',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fqtiuhhm',
                  apiId: '32e8080c-1aea-40e6-92b9-d617ef81b683'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ithoaiphuong1987/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fqtiuhhm.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
