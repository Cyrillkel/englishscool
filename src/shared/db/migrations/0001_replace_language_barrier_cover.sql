-- One-off content fix: the first post went live with a placeholder cover.
-- Point it at the illustration shipped in public/covers. The old cover is part
-- of the condition, so a cover uploaded through the admin since is left alone.
UPDATE `posts`
SET `cover_image` = '/covers/language-barrier.jpg'
WHERE `slug` = 'pochemu-yazykovoy-barer-eto-ne-pro-yazyk'
	AND `cover_image` = '/uploads/a5e180e8-5d6c-4fa8-9044-4cc2cd4d3a3b.jpg';
