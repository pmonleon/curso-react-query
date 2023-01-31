import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { sleep } from '../helpers/slepp';
import { Issue, State, Type, AuthorAssociation } from '../issues/interfaces/githubIssues';

const dataMock:Issue[] = [
    {
        "url": "https://api.github.com/repos/facebook/react/issues/26053",
        "repository_url": "https://api.github.com/repos/facebook/react",
        "labels_url": "https://api.github.com/repos/facebook/react/issues/26053/labels{/name}",
        "comments_url": "https://api.github.com/repos/facebook/react/issues/26053/comments",
        "events_url": "https://api.github.com/repos/facebook/react/issues/26053/events",
        "html_url": "https://github.com/facebook/react/pull/26053",
        "id": 1557994997,
        "node_id": "PR_kwDOAJy2Ks5IlVe6",
        "number": 26053,
        "title": "Bump ua-parser-js from 0.7.20 to 0.7.33",
        "user": {
            "login": "dependabot[bot]",
            "id": 49699333,
            "node_id": "MDM6Qm90NDk2OTkzMzM=",
            "avatar_url": "https://avatars.githubusercontent.com/in/29110?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/dependabot%5Bbot%5D",
            "html_url": "https://github.com/apps/dependabot",
            "followers_url": "https://api.github.com/users/dependabot%5Bbot%5D/followers",
            "following_url": "https://api.github.com/users/dependabot%5Bbot%5D/following{/other_user}",
            "gists_url": "https://api.github.com/users/dependabot%5Bbot%5D/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/dependabot%5Bbot%5D/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/dependabot%5Bbot%5D/subscriptions",
            "organizations_url": "https://api.github.com/users/dependabot%5Bbot%5D/orgs",
            "repos_url": "https://api.github.com/users/dependabot%5Bbot%5D/repos",
            "events_url": "https://api.github.com/users/dependabot%5Bbot%5D/events{/privacy}",
            "received_events_url": "https://api.github.com/users/dependabot%5Bbot%5D/received_events",
            "type": Type.Bot,
            "site_admin": false
        },
        "labels": [
            {
                "id": 196858374,
                "node_id": "MDU6TGFiZWwxOTY4NTgzNzQ=",
                "url": "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
                "name": "CLA Signed",
                "color": "e7e7e7",
                "default": false,
                "description": null
            },
            {
                "id": 1757816973,
                "node_id": "MDU6TGFiZWwxNzU3ODE2OTcz",
                "url": "https://api.github.com/repos/facebook/react/labels/dependencies",
                "name": "dependencies",
                "color": "0366d6",
                "default": false,
                "description": "Pull requests that update a dependency file"
            }
        ],
        "state": State.Open,
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2023-01-26T11:23:56Z",
        "updated_at": "2023-01-26T11:24:01Z",
        "closed_at": null,
        "author_association": AuthorAssociation.Contributor,
        "active_lock_reason": null,
        "draft": false,
        "pull_request": {
            "url": "https://api.github.com/repos/facebook/react/pulls/26053",
            "html_url": "https://github.com/facebook/react/pull/26053",
            "diff_url": "https://github.com/facebook/react/pull/26053.diff",
            "patch_url": "https://github.com/facebook/react/pull/26053.patch",
            "merged_at": null
        },
        "body": "Bumps [ua-parser-js](https://github.com/faisalman/ua-parser-js) from 0.7.20 to 0.7.33.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a href=\"https://github.com/faisalman/ua-parser-js/blob/master/changelog.md\">ua-parser-js's changelog</a>.</em></p>\n<blockquote>\n<h2>Version 0.7.33 / 1.0.33</h2>\n<ul>\n<li>Add new browser : Cobalt</li>\n<li>Identify Macintosh as an Apple device</li>\n<li>Fix ReDoS vulnerability</li>\n</ul>\n<h1>Version 0.8</h1>\n<p>Version 0.8 was created by accident. This version is now deprecated and no longer maintained, please update to version 0.7 / 1.0.</p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a href=\"https://github.com/faisalman/ua-parser-js/commit/f2d0db001d87da15de7b9b1df7be9f2eacefd8c5\"><code>f2d0db0</code></a> Bump version 0.7.33</li>\n<li><a href=\"https://github.com/faisalman/ua-parser-js/commit/a6140a17dd0300a35cfc9cff999545f267889411\"><code>a6140a1</code></a> Remove unsafe regex in trim() function</li>\n<li><a href=\"https://github.com/faisalman/ua-parser-js/commit/a88660493568d6144a551424a8139d6c876635f6\"><code>a886604</code></a> Fix <a href=\"https://github-redirect.dependabot.com/faisalman/ua-parser-js/issues/605\">#605</a> - Identify Macintosh as Apple device</li>\n<li><a href=\"https://github.com/faisalman/ua-parser-js/commit/b814bcd79198e730936c82462e2d729eb5423e3c\"><code>b814bcd</code></a> Merge pull request <a href=\"https://github-redirect.dependabot.com/faisalman/ua-parser-js/issues/606\">#606</a> from rileyjshaw/patch-1</li>\n<li><a href=\"https://github.com/faisalman/ua-parser-js/commit/7f71024161399b7aa5d5cd10dba9e059f0218262\"><code>7f71024</code></a> Fix documentation</li>\n<li><a href=\"https://github.com/faisalman/ua-parser-js/commit/c239ac5167abd574a635cb809a2b4fa35810d23b\"><code>c239ac5</code></a> Merge pull request <a href=\"https://github-redirect.dependabot.com/faisalman/ua-parser-js/issues/604\">#604</a> from obecerra3/master</li>\n<li><a href=\"https://github.com/faisalman/ua-parser-js/commit/8d3c2d327cf540ff2c050f1cc67bca8c6f8e4458\"><code>8d3c2d3</code></a> Add new browser: Cobalt</li>\n<li><a href=\"https://github.com/faisalman/ua-parser-js/commit/d11fc47dc9b6acc0f89fc10c120cea08e10cd31a\"><code>d11fc47</code></a> Bump version 0.7.32</li>\n<li><a href=\"https://github.com/faisalman/ua-parser-js/commit/b490110109de586deab96c775c9ef0dfc9c919c4\"><code>b490110</code></a> Merge branch 'develop' of github.com:faisalman/ua-parser-js</li>\n<li><a href=\"https://github.com/faisalman/ua-parser-js/commit/cb5da5ea4b220d5b60fe209e123b7f911d8e0d4a\"><code>cb5da5e</code></a> Merge pull request <a href=\"https://github-redirect.dependabot.com/faisalman/ua-parser-js/issues/600\">#600</a> from moekm/develop</li>\n<li>Additional commits viewable in <a href=\"https://github.com/faisalman/ua-parser-js/compare/0.7.20...0.7.33\">compare view</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=ua-parser-js&package-manager=npm_and_yarn&previous-version=0.7.20&new-version=0.7.33)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits that have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after your CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge and block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating it. You can achieve the same result by closing it manually\n- `@dependabot ignore this major version` will close this PR and stop Dependabot creating any more for this major version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop Dependabot creating any more for this minor version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop Dependabot creating any more for this dependency (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot use these labels` will set the current labels as the default for future PRs for this repo and language\n- `@dependabot use these reviewers` will set the current reviewers as the default for future PRs for this repo and language\n- `@dependabot use these assignees` will set the current assignees as the default for future PRs for this repo and language\n- `@dependabot use this milestone` will set the current milestone as the default for future PRs for this repo and language\n\nYou can disable automated security fix PRs for this repo from the [Security Alerts page](https://github.com/facebook/react/network/alerts).\n\n</details>",
        "reactions": {
            "url": "https://api.github.com/repos/facebook/react/issues/26053/reactions",
            "total_count": 0,
            "+1": 0,
            "-1": 0,
            "laugh": 0,
            "hooray": 0,
            "confused": 0,
            "heart": 0,
            "rocket": 0,
            "eyes": 0
        },
        "timeline_url": "https://api.github.com/repos/facebook/react/issues/26053/timeline",
        "performed_via_github_app": null,
        "state_reason": null
    },
    {
        "url": "https://api.github.com/repos/facebook/react/issues/26052",
        "repository_url": "https://api.github.com/repos/facebook/react",
        "labels_url": "https://api.github.com/repos/facebook/react/issues/26052/labels{/name}",
        "comments_url": "https://api.github.com/repos/facebook/react/issues/26052/comments",
        "events_url": "https://api.github.com/repos/facebook/react/issues/26052/events",
        "html_url": "https://github.com/facebook/react/issues/26052",
        "id": 1557625884,
        "node_id": "I_kwDOAJy2Ks5c13wc",
        "number": 26052,
        "title": "[DevTools Bug]: event.metaKey + f to focus SearchInput doesn't work on Windows",
        "user": {
            "login": "kamranayub",
            "id": 563819,
            "node_id": "MDQ6VXNlcjU2MzgxOQ==",
            "avatar_url": "https://avatars.githubusercontent.com/u/563819?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/kamranayub",
            "html_url": "https://github.com/kamranayub",
            "followers_url": "https://api.github.com/users/kamranayub/followers",
            "following_url": "https://api.github.com/users/kamranayub/following{/other_user}",
            "gists_url": "https://api.github.com/users/kamranayub/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/kamranayub/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/kamranayub/subscriptions",
            "organizations_url": "https://api.github.com/users/kamranayub/orgs",
            "repos_url": "https://api.github.com/users/kamranayub/repos",
            "events_url": "https://api.github.com/users/kamranayub/events{/privacy}",
            "received_events_url": "https://api.github.com/users/kamranayub/received_events",
            "type": Type.User,
            "site_admin": false
        },
        "labels": [
            {
                "id": 40929151,
                "node_id": "MDU6TGFiZWw0MDkyOTE1MQ==",
                "url": "https://api.github.com/repos/facebook/react/labels/Type:%20Bug",
                "name": "Type: Bug",
                "color": "b60205",
                "default": false,
                "description": null
            },
            {
                "id": 155984160,
                "node_id": "MDU6TGFiZWwxNTU5ODQxNjA=",
                "url": "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
                "name": "Status: Unconfirmed",
                "color": "d4c5f9",
                "default": false,
                "description": "A potential issue that we haven't yet confirmed as a bug"
            },
            {
                "id": 710573595,
                "node_id": "MDU6TGFiZWw3MTA1NzM1OTU=",
                "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Developer%20Tools",
                "name": "Component: Developer Tools",
                "color": "fbca04",
                "default": false,
                "description": null
            }
        ],
        "state": State.Open,
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2023-01-26T04:46:27Z",
        "updated_at": "2023-01-26T04:47:10Z",
        "closed_at": null,
        "author_association": AuthorAssociation.None,
        "active_lock_reason": null,
        "body": "### Website or app\r\n\r\nhttps://beta.reactjs.org/\r\n\r\n### Repro steps\r\n\r\n1. Open React Dev Tools -> Components\r\n2. Try hitting (Windows Key) + f\r\n\r\nOn Windows 10/11, the Feedback Hub opens up. It will not focus on the search input.\r\n\r\nI understand this probably works fine on Mac, but on Windows it'd be great to use a key that won't be intercepted by Windows. Like `Shift + f`. or `Ctrl + Alt + f`. Or, perhaps as soon as I start typing (unless I'm typing in another focused input). Or, if I press `/`. Something!\r\n\r\nI thought at first DevTools didn't have a keyboard shortcut but then I looked at the source code and saw it uses [`metaKey`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/metaKey) which _totally_ doesn't work on Firefox in Windows.\r\n\r\n### How often does this bug happen?\r\n\r\nEvery time\r\n\r\n### DevTools package (automated)\r\n\r\n_No response_\r\n\r\n### DevTools version (automated)\r\n\r\n_No response_\r\n\r\n### Error message (automated)\r\n\r\n_No response_\r\n\r\n### Error call stack (automated)\r\n\r\n_No response_\r\n\r\n### Error component stack (automated)\r\n\r\n_No response_\r\n\r\n### GitHub query string (automated)\r\n\r\n_No response_",
        "reactions": {
            "url": "https://api.github.com/repos/facebook/react/issues/26052/reactions",
            "total_count": 0,
            "+1": 0,
            "-1": 0,
            "laugh": 0,
            "hooray": 0,
            "confused": 0,
            "heart": 0,
            "rocket": 0,
            "eyes": 0
        },
        "timeline_url": "https://api.github.com/repos/facebook/react/issues/26052/timeline",
        "performed_via_github_app": null,
        "state_reason": null
    },
    {
        "url": "https://api.github.com/repos/facebook/react/issues/26051",
        "repository_url": "https://api.github.com/repos/facebook/react",
        "labels_url": "https://api.github.com/repos/facebook/react/issues/26051/labels{/name}",
        "comments_url": "https://api.github.com/repos/facebook/react/issues/26051/comments",
        "events_url": "https://api.github.com/repos/facebook/react/issues/26051/events",
        "html_url": "https://github.com/facebook/react/issues/26051",
        "id": 1557462226,
        "node_id": "I_kwDOAJy2Ks5c1PzS",
        "number": 26051,
        "title": "[DevTools Bug]: Can not work on devtools, instructions lead to error",
        "user": {
            "login": "sroussey",
            "id": 127349,
            "node_id": "MDQ6VXNlcjEyNzM0OQ==",
            "avatar_url": "https://avatars.githubusercontent.com/u/127349?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/sroussey",
            "html_url": "https://github.com/sroussey",
            "followers_url": "https://api.github.com/users/sroussey/followers",
            "following_url": "https://api.github.com/users/sroussey/following{/other_user}",
            "gists_url": "https://api.github.com/users/sroussey/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/sroussey/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/sroussey/subscriptions",
            "organizations_url": "https://api.github.com/users/sroussey/orgs",
            "repos_url": "https://api.github.com/users/sroussey/repos",
            "events_url": "https://api.github.com/users/sroussey/events{/privacy}",
            "received_events_url": "https://api.github.com/users/sroussey/received_events",
            "type": Type.User,
            "site_admin": false
        },
        "labels": [
            {
                "id": 40929151,
                "node_id": "MDU6TGFiZWw0MDkyOTE1MQ==",
                "url": "https://api.github.com/repos/facebook/react/labels/Type:%20Bug",
                "name": "Type: Bug",
                "color": "b60205",
                "default": false,
                "description": null
            },
            {
                "id": 155984160,
                "node_id": "MDU6TGFiZWwxNTU5ODQxNjA=",
                "url": "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
                "name": "Status: Unconfirmed",
                "color": "d4c5f9",
                "default": false,
                "description": "A potential issue that we haven't yet confirmed as a bug"
            },
            {
                "id": 710573595,
                "node_id": "MDU6TGFiZWw3MTA1NzM1OTU=",
                "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Developer%20Tools",
                "name": "Component: Developer Tools",
                "color": "fbca04",
                "default": false,
                "description": null
            }
        ],
        "state": State.Open,
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2023-01-26T00:43:30Z",
        "updated_at": "2023-01-26T00:43:30Z",
        "closed_at": null,
        "author_association": AuthorAssociation.None,
        "active_lock_reason": null,
        "body": "### Website or app\n\nhttps://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en\n\n### Repro steps\n\nBecause react requires java, not on macos (but assumes brew installed!):\r\n```\r\nbrew update && brew install java\r\nsudo ln -sfn /usr/local/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk\r\nexport PATH=\"/usr/local/opt/openjdk/bin:$PATH\"' >> ~/.zshrc\r\nexport PATH=\"/usr/local/opt/openjdk/bin:$PATH\" >> ~/.zshrc\r\nexport PATH=\"/usr/local/opt/openjdk/bin:$PATH\"\r\n```\r\n\r\nBecause react requires node before v17 (but assuming you have nvm installed!):\r\n```\r\nnvm install 16\r\n```\r\n\r\nthen the real stuff (directions inside folders like ./chrome/ are quite wrong):\r\n```\r\ngit clone https://github.com/facebook/react.git\r\ncd react\r\nyarn install\r\nyarn build-for-devtools\r\ncd packages/react-devtools-extensions\r\nyarn build:chrome\r\nyarn build:chrome:local\r\nyarn run test:chrome\r\n```\r\n\r\nNow inside devtools:\r\n\r\n```\r\nUncaught EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: \"script-src 'self' 'wasm-unsafe-eval'\".\r\n\r\n    at ./src/contentScripts/prepareInjection.js (prepareInjection.js:133:1)\r\n    at __webpack_require__ (prepareInjection.js:20:30)\r\n    at prepareInjection.js:84:18\r\n    at prepareInjection.js:87:10\r\n```\r\n\r\nWhat exactly are you doing that works in order to build, test, and develop this extension?\n\n### How often does this bug happen?\n\nEvery time\n\n### DevTools package (automated)\n\n_No response_\n\n### DevTools version (automated)\n\n_No response_\n\n### Error message (automated)\n\n_No response_\n\n### Error call stack (automated)\n\n_No response_\n\n### Error component stack (automated)\n\n_No response_\n\n### GitHub query string (automated)\n\n_No response_",
        "reactions": {
            "url": "https://api.github.com/repos/facebook/react/issues/26051/reactions",
            "total_count": 0,
            "+1": 0,
            "-1": 0,
            "laugh": 0,
            "hooray": 0,
            "confused": 0,
            "heart": 0,
            "rocket": 0,
            "eyes": 0
        },
        "timeline_url": "https://api.github.com/repos/facebook/react/issues/26051/timeline",
        "performed_via_github_app": null,
        "state_reason": null
    },
    {
        "url": "https://api.github.com/repos/facebook/react/issues/26050",
        "repository_url": "https://api.github.com/repos/facebook/react",
        "labels_url": "https://api.github.com/repos/facebook/react/issues/26050/labels{/name}",
        "comments_url": "https://api.github.com/repos/facebook/react/issues/26050/comments",
        "events_url": "https://api.github.com/repos/facebook/react/issues/26050/events",
        "html_url": "https://github.com/facebook/react/issues/26050",
        "id": 1557360343,
        "node_id": "I_kwDOAJy2Ks5c027X",
        "number": 26050,
        "title": "Bug: `react-hooks/rules-of-hooks` is tricked by MobX",
        "user": {
            "login": "gdbroman",
            "id": 29574724,
            "node_id": "MDQ6VXNlcjI5NTc0NzI0",
            "avatar_url": "https://avatars.githubusercontent.com/u/29574724?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/gdbroman",
            "html_url": "https://github.com/gdbroman",
            "followers_url": "https://api.github.com/users/gdbroman/followers",
            "following_url": "https://api.github.com/users/gdbroman/following{/other_user}",
            "gists_url": "https://api.github.com/users/gdbroman/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/gdbroman/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/gdbroman/subscriptions",
            "organizations_url": "https://api.github.com/users/gdbroman/orgs",
            "repos_url": "https://api.github.com/users/gdbroman/repos",
            "events_url": "https://api.github.com/users/gdbroman/events{/privacy}",
            "received_events_url": "https://api.github.com/users/gdbroman/received_events",
            "type": Type.User,
            "site_admin": false
        },
        "labels": [
            {
                "id": 155984160,
                "node_id": "MDU6TGFiZWwxNTU5ODQxNjA=",
                "url": "https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed",
                "name": "Status: Unconfirmed",
                "color": "d4c5f9",
                "default": false,
                "description": "A potential issue that we haven't yet confirmed as a bug"
            }
        ],
        "state": State.Open,
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2023-01-25T22:31:28Z",
        "updated_at": "2023-01-25T22:39:09Z",
        "closed_at": null,
        "author_association": AuthorAssociation.None,
        "active_lock_reason": null,
        "body": "React version: `^18.0.0`\r\neslint-plugin-react-hooks version: `^4.6.0`,\r\n\r\n## Steps To Reproduce\r\n\r\n1. Install `mobx-react`\r\n2. Wrap your component with the `observer` function / decorator\r\n3. Conditionally render a hook\r\n\r\nhttps://user-images.githubusercontent.com/29574724/214706503-6cc1ae36-54d6-4e28-a846-abe579eaf7ed.mov\r\n\r\n## The current behavior\r\n\r\nConditionally rendered hooks aren't triggering an error in components with the MobX `observer` decorator.\r\n\r\n## The expected behavior\r\n\r\nConditionally rendered hooks should always trigger an error inside components.\r\n",
        "reactions": {
            "url": "https://api.github.com/repos/facebook/react/issues/26050/reactions",
            "total_count": 0,
            "+1": 0,
            "-1": 0,
            "laugh": 0,
            "hooray": 0,
            "confused": 0,
            "heart": 0,
            "rocket": 0,
            "eyes": 0
        },
        "timeline_url": "https://api.github.com/repos/facebook/react/issues/26050/timeline",
        "performed_via_github_app": null,
        "state_reason": null
    },
]
interface UseIssuesProps {
    state?: State
    labels?: string[] 
}

export const getIssuesFromAPi = async(state?:State, labels?:string[]):Promise<Issue[]> => {

    const params = new URLSearchParams()


    if (state) {
        params.append('state', state)
    }
    if (!!labels && labels.length > 0 ) {
        const labelsString = labels.join(',')
        params.append('labels', labelsString )
    }

    params.append('page', '1')
    params.append('per_page', '5')

    await sleep(2)
    const res = await githubApi.get<Issue[]>('/issues',{
        params
    //   headers: {
    //     Authorization: null
    //   }
      
    })
        const { data } = res
        console.log({data})
        return data
    }


export const useIssues = ({state,  labels}:UseIssuesProps):  {
    issuesQuery: UseQueryResult<Issue[], unknown>;
} => {
    
        const issuesQuery = useQuery(
            ['queryIssues', {state, labels}],
            () => getIssuesFromAPi(state, labels),
            {
             // staleTime: 1000 * 60 * 60 * 1,
             // initialData: dataMock , // funciona sin el staleTime, no usa data fresh
             // placeholderData: dataMock
             // refetchInterval : 1000
            }
          )
        return {
            issuesQuery
        }
}



// ttps://api.github.com/repos/facebook/react/issues