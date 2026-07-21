import { cn } from '@/lib/cn'

type HeritageTextureProps = {
  tone?: 'dark' | 'light'
  className?: string
}

/** Soft engraved / distressed grain overlay for heritage character. */
export function HeritageTexture({
  tone = 'dark',
  className,
}: HeritageTextureProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 mix-blend-overlay',
        tone === 'dark'
          ? 'texture-engraved opacity-[0.14]'
          : 'texture-engraved-light opacity-[0.2]',
        className,
      )}
    />
  )
}
