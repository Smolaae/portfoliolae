// Types pour Next.js 15
declare module "next" {
  export interface PageProps {
    params: Promise<Record<string, string>>
    searchParams: Promise<Record<string, string | string[] | undefined>>
  }
}
