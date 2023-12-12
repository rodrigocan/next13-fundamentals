import { Suspense } from 'react'

import { GithubProfile } from '@/components/github-profile'
import { LongWaitComponent } from '@/components/long-wait-component'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <div>
      <h1>Home!</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis at, id,
        ratione saepe culpa maxime officia iusto dolorum, dicta debitis atque
        voluptate consequuntur laudantium illo voluptatum pariatur obcaecati?
        Delectus, atque.
      </p>

      <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
