window.onload = function() {
    //SETUP SIMPLE CMS

    //register main templates
    simpleCMS.registerTemplate( 'home',      '/client/templates/home.html',             'content' );
    simpleCMS.registerTemplate( 'blog',      '/client/templates/blog.html',             'content', { hasChild: 1 } );
    simpleCMS.registerTemplate( 'tutorials', '/client/templates/tutorials.html',        'content', { hasChild: 2 } );
    simpleCMS.registerTemplate( 'account',   '/client/templates/account.html',          'content' );

    //register sub templates
    simpleCMS.registerTemplate( 'wishes',    '/client/templates/home_wishes.html',      'subcontent', { requiredUrl: '/home/',    insertIntoParentTemplate: true } );
    simpleCMS.registerTemplate( 'authors',   '/client/templates/home_authors.html',     'subcontent', { requiredUrl: '/home/',    insertIntoParentTemplate: true } );
    simpleCMS.registerTemplate( 'patner',    '/client/templates/home_partnet.html',     'subcontent', { requiredUrl: '/home/',    insertIntoParentTemplate: true } );
    simpleCMS.registerTemplate( 'guestbook', '/client/templates/home_guestbook.html',   'subcontent', { requiredUrl: '/home/',    insertIntoParentTemplate: true } );
    simpleCMS.registerTemplate( 'contact',   '/client/templates/home_contact.html',     'subcontent', { requiredUrl: '/home/',    insertIntoParentTemplate: true } );

    simpleCMS.registerTemplate( 'register',  '/client/templates/account_register.html', 'subcontent', { requiredUrl: '/account/', insertIntoParentTemplate: true } );

    simpleCMS.init({homedir: 'home', errorPath: '/client/templates/error404.html'});
};
