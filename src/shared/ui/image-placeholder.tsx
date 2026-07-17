/**
 * Заглушка под будущие фотографии: когда появятся картинки,
 * компонент заменяется на next/image в том же месте.
 */
export function ImagePlaceholder({
  emoji = "📷",
  label = "Фото добавим позже",
  className = "",
}: {
  emoji?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed border-ink/15 bg-cream-deep text-ink-soft ${className}`}
    >
      <span className="text-5xl" aria-hidden="true">
        {emoji}
      </span>
      <span className="px-4 text-center text-sm font-medium">{label}</span>
    </div>
  );
}
