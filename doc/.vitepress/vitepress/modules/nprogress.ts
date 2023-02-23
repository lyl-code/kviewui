import NProgress from 'nprogress'
// import { type UserModule } from '~/types'

export const install: any = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from) => {
      if (to.path !== from.path)
        NProgress.start()
    })
    router.afterEach(() => { NProgress.done() })
  }
}
