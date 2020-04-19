# GH Glitch Hook

Push on Github repo and deploy to Glitch 🐟 project.

## On Github

- Create new repo
- Copy repo url `git@github.com:<username>/<repo>.git`

## On Glitch

- Remix [this project](https://glitch.com/~gh-glitch-hook)
- Tools -> Terminal
  `$ git remote set-url origin git@github.com:<username>/<repo>.git`
- Tools -> Import and Export -> Copy
  `https://<uuid>@api.glitch.com/git/<project-name>`

## On Desktop

- Open new terminal

```shell
$ git clone https://<uuid>@api.glitch.com/git/<project-name>
$ cd <project-name>
$ rm -rf ./.git/
$ git init
$ git remote add origin git@github.com:<username>/<repo>.git
$ npm i
```

## On Glitch

- Share -> Live App -> Copy `https://<project-name>.glitch.me`

## On Github

- Go to repo settings
- Webhooks -> Add webhook
- Set Payload URL Glitch project url and append `/hook` like this `https://<project-name>.glitch.com/hook`
- Set Content type to `application/json`
- Set Secret `<secret>` [Generate](https://randomkeygen.com/)

## On Glitch

- Edit `.env` file and add `GITHUB_WEBHOOK_SECRET=<secret>`

## On Desktop

- Make some code changes

```
$ git add .
$ git commit -m"deploy to glitch 🐟"
$ git push origin master

```

- Go to your Glitch project to see the changes 🙂
