webpackJsonp([69504633912515],{401:function(n,e){n.exports={data:{remark:{html:'<h2 id="the-context-object"><a href="#the-context-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The <code class="language-text">Context</code> Object</h2>\n<p>Whereas the <code class="language-text">Build</code> object is the same for all hooks (except the <code class="language-text">build</code> hook\nwhich constructs it) within an individual build, the <code class="language-text">Context</code> object changes for\neach hook. Different hooks have different values available to them on the <code class="language-text">Context</code>\nobject and sadly we\'ve not documented all these yet so you may have to do some\ninspection!</p>\n<p>The main ones are:</p>\n<h3 id="scope"><a href="#scope" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">scope</code></h3>\n<p>An object based on the third argument to <code class="language-text">newWithHooks</code> or <code class="language-text">fieldWithHooks</code> -\nthis is useful for filtering which objects a particular hook should apply to.</p>\n<p>For deeper hooks (such as <code class="language-text">GraphQLObjectType:fields:field</code>) the scope from\nshallower hooks (such as <code class="language-text">GraphQLObjectType</code>) are merged in.</p>\n<p>For example you might use a hook such as this to add a description to the\n<code class="language-text">clientMutationId</code> field on all mutation input objects:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">builder<span class="token punctuation">.</span><span class="token function">hook</span><span class="token punctuation">(</span><span class="token string">"GraphQLInputObjectType:fields:field"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span>\n    field<span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> extend <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="gatsby-highlight-code-line">    <span class="token punctuation">{</span> scope<span class="token punctuation">:</span> <span class="token punctuation">{</span> isMutationInput<span class="token punctuation">,</span> fieldName <span class="token punctuation">}</span> <span class="token punctuation">}</span>\n</span>  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token operator">!</span>isMutationInput <span class="token operator">||</span>\n</span><span class="gatsby-highlight-code-line">      fieldName <span class="token operator">!==</span> <span class="token string">"clientMutationId"</span> <span class="token operator">||</span>\n</span><span class="gatsby-highlight-code-line">      field<span class="token punctuation">.</span>description <span class="token operator">!=</span> <span class="token keyword">null</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span>      <span class="token keyword">return</span> field<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token function">extend</span><span class="token punctuation">(</span>field<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      description<span class="token punctuation">:</span> <span class="token string">"An arbitrary string value with no semantic meaning. "</span> <span class="token operator">+</span>\n        <span class="token string">"Will be included in the payload verbatim. "</span> <span class="token operator">+</span>\n        <span class="token string">"May be used to track mutations by the client."</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="self"><a href="#self" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">Self</code></h3>\n<p>Whilst only available on hooks that are called after the object is created\n(e.g. <code class="language-text">GraphQLObjectType:fields</code>), this field is useful because it contains the\nobject that has been created; allowing circular references to be built. A\ncommon use-case for this is the root <code class="language-text">Query</code> object referencing itself with the\n<code class="language-text">query</code> field to work around some issues in Relay 1.</p>\n<h3 id="fieldwithhooksfieldname-spec-scope--"><a href="#fieldwithhooksfieldname-spec-scope--" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">fieldWithHooks(fieldName, spec, scope = {})</code></h3>\n<p>Available on hooks <code class="language-text">GraphQLObjectType:fields</code> and\n<code class="language-text">GraphQLInputObjectType:fields</code>, this function is useful for adding hooks early\n(for example if you need to call <code class="language-text">addDataGenerator(...)</code>). If you don\'t call\nthis, it will be called for you at a later time.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">builder<span class="token punctuation">.</span><span class="token function">hook</span><span class="token punctuation">(</span><span class="token string">"GraphQLInputObjectType:fields"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span>\n    fields<span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> extend<span class="token punctuation">,</span> resolveAlias <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="gatsby-highlight-code-line">    <span class="token punctuation">{</span> fieldWithHooks <span class="token punctuation">}</span>\n</span>  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// TODO: if (...) return fields;</span>\n    <span class="token keyword">return</span> <span class="token function">extend</span><span class="token punctuation">(</span>fields<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">      id<span class="token punctuation">:</span> <span class="token function">fieldWithHooks</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> addDataGenerator <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token function">addDataGenerator</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> alias <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">          <span class="token keyword">return</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">            map<span class="token punctuation">:</span> obj <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token punctuation">[</span>alias<span class="token punctuation">]</span><span class="token punctuation">:</span> obj<span class="token punctuation">.</span><span class="token constant">ID</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">          <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">          type<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">GraphQLNonNull</span><span class="token punctuation">(</span>GraphQLString<span class="token punctuation">)</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">          resolve<span class="token punctuation">:</span> resolveAlias<span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n</span>    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>See also: <a href="/graphile-build/look-ahead/#when-creating-an-individual-field">Look ahead</a>.</p>\n<!-- TODO: add more context properties -->',frontmatter:{path:"/graphile-build/context-object/",title:"The Context Object",showExamples:null}},nav:{edges:[{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [0] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides",subpages:[]},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides",subpages:[]},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides",subpages:[]},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides",subpages:[]},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference",subpages:[]},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference",subpages:[]},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference",subpages:[]},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference",subpages:[]},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides",subpages:[]},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference",subpages:[]},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference",subpages:[]},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference",subpages:[]},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"plugin-reference",subpages:[]}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [1] >>> JSON",name:"postgraphile",sections:[{id:"overview",title:"Overview"},{id:"basics",title:"Operation"},{id:"customising",title:"Customising"},{id:"guides",title:"Guides"},{id:"community",title:"Community"},{id:"faq",title:"FAQ"}],pages:[{to:"/postgraphile/introduction/",title:"Introduction",sectionId:"overview",subpages:[]},{to:"/postgraphile/examples/",title:"EXAMPLES",sectionId:"overview",subpages:[]},{to:"/postgraphile/usage/",title:"Usage",sectionId:"overview",subpages:[{to:"/postgraphile/usage-cli/",title:"CLI Usage",sectionId:"overview"},{to:"/postgraphile/usage-library/",title:"Library Usage",sectionId:"overview"},{to:"/postgraphile/usage-schema/",title:"Schema-only Usage",sectionId:"overview"}]},{to:"/postgraphile/performance/",title:"Performance",sectionId:"overview",subpages:[]},{to:"/postgraphile/requirements/",title:"Requirements",sectionId:"overview",subpages:[]},{to:"/postgraphile/quick-start-guide/",title:"Quick Start Guide",sectionId:"basics",subpages:[]},{to:"/postgraphile/namespaces/",title:"Namespaces",sectionId:"basics",subpages:null},{to:"/postgraphile/inflection/",title:"Inflection",sectionId:"basics",subpages:null},{to:"/postgraphile/tables/",title:"Tables",sectionId:"basics",subpages:[{to:"/postgraphile/relations/",title:"Relations",sectionId:"basics"},{to:"/postgraphile/connections/",title:"Connections",sectionId:"basics"},{to:"/postgraphile/filtering/",title:"Filtering",sectionId:"basics"},{to:"/postgraphile/crud-mutations/",title:"CRUD Mutations",sectionId:"basics"},{to:"/postgraphile/node-id/",title:"nodeId / id",sectionId:"basics"}]},{to:"/postgraphile/functions/",title:"Functions",sectionId:"basics",subpages:[{to:"/postgraphile/computed-columns/",title:"Computed Columns",sectionId:"basics"},{to:"/postgraphile/custom-queries/",title:"Custom Queries",sectionId:"basics"},{to:"/postgraphile/custom-mutations/",title:"Custom Mutations",sectionId:"basics"},{to:"/postgraphile/function-restrictions/",title:"Function Restrictions",sectionId:"basics"}]},{to:"/postgraphile/postgresql-indexes/",title:"PostgreSQL Indexes",sectionId:"basics",subpages:[]},{to:"/postgraphile/security/",title:"Security",sectionId:"basics",subpages:[]},{to:"/postgraphile/subscriptions/",title:"Subscriptions",sectionId:"basics",subpages:[]},{to:"/postgraphile/reserved-keywords/",title:"Reserved Keywords",sectionId:"basics",subpages:[]},{to:"/postgraphile/debugging/",title:"Debugging",sectionId:"basics",subpages:[]},{to:"/postgraphile/smart-comments/",title:"Smart Comments",sectionId:"customising",subpages:[]},{to:"/postgraphile/extending/",title:"Schema Plugins",sectionId:"customising",subpages:[{to:"/postgraphile/make-extend-schema-plugin/",title:"makeExtendSchemaPlugin",sectionId:"customising"},{to:"/postgraphile/make-add-inflectors-plugin/",title:"makeAddInflectorsPlugin",sectionId:"customising"},{to:"/postgraphile/extending-raw/",title:"Graphile Engine",sectionId:"customising"}]},{to:"/postgraphile/plugins/",title:"Server Plugins",sectionId:"customising",subpages:[]},{to:"/postgraphile/evaluating/",title:"Evaluating for your Project",sectionId:"guides",subpages:[]},{to:"/postgraphile/postgresql-schema-design/",title:"PostgreSQL Schema Design",sectionId:"guides",subpages:[]},{to:"/postgraphile/production/",title:"Production Considerations",sectionId:"guides",subpages:[]},{to:"/postgraphile/jwt-guide/",title:"PostGraphile JWT Guide",sectionId:"guides",subpages:[]},{to:"/postgraphile/default-role/",title:"The Default Role",sectionId:"guides",subpages:[]},{to:"/postgraphile/v4-new-features/",title:"v4 Feature Guide",sectionId:"guides",subpages:[]},{to:"/postgraphile/v3-migration/",title:"v3 → v4 Migration Guide",sectionId:"guides",subpages:[]},{to:"/postgraphile/testing-jest/",title:"Testing with Jest",sectionId:"guides",subpages:[]},{to:"/postgraphile/community-plugins/",title:"Community Plugins",sectionId:"community",subpages:[]},{to:"/postgraphile/community-chat/",title:"Community Chat",sectionId:"community",subpages:[]},{to:"/postgraphile/code-of-conduct/",title:"Code of Conduct",sectionId:"community",subpages:[]},{to:"/postgraphile/introspection/",title:"Introspection?",sectionId:"faq",subpages:[]},{to:"/postgraphile/why-nullable/",title:"Why is it nullable?",sectionId:"faq",subpages:[]}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [2] >>> JSON",name:"graphile-build-pg",sections:[{id:"overview",title:"Usage"}],pages:[{to:"/graphile-build-pg/settings/",title:"Settings",sectionId:"overview",subpages:[]}]}}]},examples:{edges:[{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [0] >>> JSON",title:"Basic",examples:[{title:"Forums",query:"{\n  allForums {\n    nodes {\n      nodeId\n      id\n      slug\n      name\n      description\n    }\n  }\n}\n",result:'{\n  "allForums": {\n    "nodes": [\n      {\n        "nodeId": "WyJmb3J1bXMiLDFd",\n        "id": 1,\n        "slug": "cat-life",\n        "name": "Cat Life",\n        "description":\n          "A forum all about cats and how fluffy they are and how they completely ignore their owners unless there is food. Or yarn."\n      },\n      {\n        "nodeId": "WyJmb3J1bXMiLDJd",\n        "id": 2,\n        "slug": "dog-life",\n        "name": "Dog Life",\n        "description": ""\n      },\n      {\n        "nodeId": "WyJmb3J1bXMiLDNd",\n        "id": 3,\n        "slug": "slug-life",\n        "name": "Slug Life",\n        "description": ""\n      }\n    ]\n  }\n}\n'},{title:"Forum by slug",query:'{\n  forumBySlug(slug: "slug-life") {\n    nodeId\n    id\n    slug\n    name\n    description\n  }\n}\n',result:'{\n  "forumBySlug": {\n    "nodeId": "WyJmb3J1bXMiLDNd",\n    "id": 3,\n    "slug": "slug-life",\n    "name": "Slug Life",\n    "description": ""\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [1] >>> JSON",title:"Collections",examples:[{title:"First offset",query:"{\n  allForums(first: 1, offset: 1) {\n    nodes {\n      nodeId\n      id\n      name\n    }\n  }\n}\n",result:'{\n  "allForums": {\n    "nodes": [\n      {\n        "nodeId": "WyJmb3J1bXMiLDJd",\n        "id": 2,\n        "name": "Dog Life"\n      }\n    ]\n  }\n}\n'},{title:"Relation condition",query:'{\n  forumBySlug(slug: "cat-life") {\n    nodeId\n    id\n    name\n    topics(\n      condition: { authorId: 1 }\n    ) {\n      nodes {\n        nodeId\n        id\n        title\n      }\n    }\n  }\n}\n',result:'{\n  "forumBySlug": {\n    "nodeId": "WyJmb3J1bXMiLDFd",\n    "id": 1,\n    "name": "Cat Life",\n    "topics": {\n      "nodes": [\n        {\n          "nodeId":\n            "WyJ0b3BpY3MiLDFd",\n          "id": 1,\n          "title": "cats cats cats"\n        },\n        {\n          "nodeId":\n            "WyJ0b3BpY3MiLDJd",\n          "id": 2,\n          "title": "snooze life"\n        },\n        {\n          "nodeId":\n            "WyJ0b3BpY3MiLDNd",\n          "id": 3,\n          "title": "too hot"\n        }\n      ]\n    }\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [2] >>> JSON",title:"Relations",examples:[{title:"Forums topics posts",query:"{\n  forumById(id: 1) {\n    name\n    topics(\n      first: 1\n      orderBy: [CREATED_AT_ASC]\n    ) {\n      nodes {\n        id\n        title\n        bodySummary\n        author {\n          id\n          username\n        }\n        posts(\n          first: 1\n          orderBy: [ID_DESC]\n        ) {\n          nodes {\n            id\n            author {\n              id\n              username\n            }\n            body\n          }\n        }\n      }\n    }\n  }\n}\n",result:'{\n  "forumById": {\n    "name": "Cat Life",\n    "topics": {\n      "nodes": [\n        {\n          "id": 1,\n          "title": "cats cats cats",\n          "bodySummary":\n            "lets discuss cats because t...",\n          "author": {\n            "id": 1,\n            "username": "user"\n          },\n          "posts": {\n            "nodes": [\n              {\n                "id": 3,\n                "author": {\n                  "id": 1,\n                  "username": "user"\n                },\n                "body":\n                  "I love it when they completely ignore you until they want something. So much better than dogs am I rite?"\n              }\n            ]\n          }\n        }\n      ]\n    }\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [3] >>> JSON",title:"Mutations",examples:[{title:"Create",query:'mutation {\n  createTopic(\n    input: {\n      topic: {\n        forumId: 1\n        title: "My question relates to mutations..."\n        body: "How do you write them?"\n      }\n    }\n  ) {\n    topic {\n      nodeId\n      id\n      forumId\n      title\n      body\n    }\n  }\n}\n',result:'{\n  "createTopic": {\n    "topic": {\n      "nodeId": "WyJ0b3BpY3MiLDRd",\n      "id": 4,\n      "forumId": 1,\n      "title":\n        "My question relates to mutations...",\n      "body": "How do you write them?"\n    }\n  }\n}\n'},{title:"Update",query:"mutation {\n  updateTopicById(\n    input: {\n      id: 1\n      topicPatch: {\n        title: \"My (edited) title\"\n      }\n    }\n  ) {\n    topic {\n      nodeId\n      id\n      title\n      body\n    }\n  }\n}\n\n# Works for a table like:\n#\n#   create table app_public.topics (\n#     id serial primary key,\n#     forum_id integer NOT NULL references app_public.forums on delete cascade,\n#     title text NOT NULL,\n#     body text DEFAULT ''::text NOT NULL\n#   );\n",result:'{\n  "updateTopicById": {\n    "topic": {\n      "nodeId": "WyJ0b3BpY3MiLDFd",\n      "id": 1,\n      "title": "My (edited) title",\n      "body":\n        "lets discuss cats because theyre totally cool"\n    }\n  }\n}\n'},{title:"Delete",query:"mutation {\n  deleteTopicById(input: { id: 1 }) {\n    deletedTopicId\n  }\n}\n",result:'{\n  "deleteTopicById": {\n    "deletedTopicId":\n      "WyJ0b3BpY3MiLDFd"\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [4] >>> JSON",title:"Custom queries",examples:[{title:"Single scalar",query:"{\n  randomNumber\n}\n\n# Generated by SQL like:\n#\n#  create function app_public.random_number() returns int\n#  language sql stable\n#  as $$\n#    select 4; -- Chosen by fair dice roll. Guaranteed to be random. XKCD#221\n#  $$;\n#\n",result:'{ "randomNumber": 4 }\n'},{title:"Single row",query:"{\n  currentUser {\n    nodeId\n    id\n    username\n  }\n}\n\n# Added to the GraphQL schema via\n# this SQL:\n#\n#   create function current_user()\n#   returns app_public.users\n#   language sql stable\n#   as $$\n#     select users.*\n#     from app_public.users\n#     where id = current_user_id();\n#   $$;\n",result:'{\n  "currentUser": {\n    "nodeId": "WyJ1c2VycyIsMV0=",\n    "id": 1,\n    "username": "user"\n  }\n}\n'},{title:"Rows connection",query:"{\n  forumsAboutCats {\n    nodes {\n      nodeId\n      id\n      name\n      slug\n    }\n  }\n}\n\n# Created from SQL like:\n#\n#  create function app_public.forums_about_cats()\n#  returns setof app_public.forums\n#  language sql stable\n#  as $$\n#    select *\n#    from app_public.forums\n#    where slug like 'cat-%';\n#  $$;\n",result:'{\n  "forumsAboutCats": {\n    "nodes": [\n      {\n        "nodeId": "WyJmb3J1bXMiLDFd",\n        "id": 1,\n        "name": "Cat Life",\n        "slug": "cat-life"\n      }\n    ]\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [5] >>> JSON",title:"Custom mutations",examples:[{title:"Forgot password",query:"mutation {\n  forgotPassword(\n    input: {\n      email: \"user@example.com\"\n    }\n  ) {\n    success\n  }\n}\n\n# Generated with SQL like this:\n#\n#  create function forgot_password(email text)\n#  returns boolean\n#  language plpgsql volatile\n#  as $$\n#    ...\n#  $$;\n#\n#  -- Optionally rename the result field:\n#  comment on function\n#    forgot_password(email text)\n#    is '@resultFieldName success';\n",result:'{\n  "forgotPassword": {\n    "success": true\n  }\n}\n'}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/examples.json absPath of file [6] >>> JSON",title:"Computed columns",examples:[{title:"Topic summary",query:"{\n  topicById(id: 2) {\n    body\n    bodySummary\n  }\n}\n\n# Generated by SQL like:\n#\n#  create function app_public.topics_body_summary(\n#    t app_public.topics,\n#    max_length int = 30\n#  )\n#  returns text\n#  language sql stable\n#  as $$\n#    select case\n#      when length(t.body) > max_length\n#      then left(t.body, max_length - 3)\n#             || '...'\n#      else t.body\n#      end;\n#  $$;\n",result:'{\n  "topicById": {\n    "body":\n      "do you find your cat just sleeps everywhere",\n    "bodySummary":\n      "do you find your cat just s..."\n  }\n}\n'},{title:"Topic summary with arg",query:"{\n  topicById(id: 2) {\n    body\n    bodySummary(maxLength: 20)\n  }\n}\n\n# Generated by SQL like:\n#\n#  create function app_public.topics_body_summary(\n#    t app_public.topics,\n#    max_length int = 30\n#  )\n#  returns text\n#  language sql stable\n#  as $$\n#    select case\n#      when length(t.body) > max_length\n#      then left(t.body, max_length - 3)\n#             || '...'\n#      else t.body\n#      end;\n#  $$;\n",result:'{\n  "topicById": {\n    "body":\n      "do you find your cat just sleeps everywhere",\n    "bodySummary":\n      "do you find your ..."\n  }\n}\n'}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---graphile-build-context-object-2fc66d725f014a476f4e.js.map