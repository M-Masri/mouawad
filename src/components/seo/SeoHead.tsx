type SeoHeadProps = {
  title: string
  description?: string
}

export function SeoHead({ title, description }: SeoHeadProps) {
  return (
    <>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
    </>
  )
}
