// Types pour Next.js 15
declare global {
  namespace Next {
    interface PageProps {
      params: Promise<Record<string, string>>
      searchParams?: Promise<Record<string, string | string[] | undefined>>
    }
  }
}

export {}
