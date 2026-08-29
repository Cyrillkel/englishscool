"use client";

import { useState, type ChangeEvent } from "react";

export function CoverImageInput({
  existingImage,
}: {
  existingImage?: string | null;
}) {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      setPreview(null);
      setFileName(null);
      return;
    }

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  const displayImage = preview ?? existingImage;

  return (
    <div>
      {displayImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={displayImage}
          alt=""
          className="mb-3 aspect-video w-full max-w-xs rounded-xl object-cover"
        />
      )}
      <input
        id="coverImage"
        name="coverImage"
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        onChange={handleChange}
        className="block text-sm"
      />
      {fileName ? (
        <p className="mt-1 text-xs font-semibold text-teal">
          ✓ Прикреплено: {fileName}
        </p>
      ) : (
        <p className="mt-1 text-xs text-ink-soft">
          {existingImage
            ? "Оставьте пустым, чтобы сохранить текущую обложку."
            : "JPEG, PNG, WebP или GIF, до 8 МБ."}
        </p>
      )}
    </div>
  );
}
