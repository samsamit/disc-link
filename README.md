# DiscLink

This is a platform for selling used dickgolf stuff!

## Teckstack

When choosing a tech stack I had two main principles. First of all i wanted the tech stack to be as modern as possible to get the best development experience there is. And then also I wanted to learn and show what all the new and fancy tools there are and how to use them to build a better web app. Olso one big driver for me is that how the app actually looks visually. So I wanted to keep the customization to myself while writing as few lines of code I could.

With these in mind I decided to go for the following stack:

- [Next.js](https://nextjs.org) and more precisely the version 13 with app router
  - Im also using the experimental server actions to handle communication between client and server
- [NextAuth.js](https://next-auth.js.org) for authentication
- [Drizzle](https://orm.drizzle.team/) as choosed ORM
- [Tailwind CSS](https://tailwindcss.com) for handling css
- [NextUI](https://nextui.org/) as a component library
  - With next-themes package to handle fluid theme switching

## The bakcbone

This app is created using `create-t3-app` that uses [T3 Stack](https://create.t3.gg/). to learn more about it take a look at the [Documentation](https://create.t3.gg/)

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
