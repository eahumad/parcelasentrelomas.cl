find ./src/img -name "*.jpeg" | parallel -eta cwebp -near_lossless 40 {} -o {.}.webp
find ./src/img -name "*.jpg" | parallel -eta cwebp -q 95 {} -o {.}.webp
find ./src/img -name "*.png" | parallel -eta cwebp -near_lossless 50 {} -o {.}.webp

find ./src/img/cercano/mobile -name "*.jpeg" | parallel -eta cwebp -near_lossless 40 {} -o {.}.webp
find ./src/img/cercano/mobile -name "*.jpg" | parallel -eta cwebp -q 95 {} -o {.}.webp
find ./src/img/cercano/mobile -name "*.png" | parallel -eta cwebp -near_lossless 50 {} -o {.}.webp

find ./src/img/cercano/web -name "*.jpeg" | parallel -eta cwebp -near_lossless 40 {} -o {.}.webp
find ./src/img/cercano/web -name "*.jpg" | parallel -eta cwebp -q 95 {} -o {.}.webp
find ./src/img/cercano/web -name "*.png" | parallel -eta cwebp -near_lossless 50 {} -o {.}.webp

find ./src/img/iconos -name "*.jpeg" | parallel -eta cwebp -near_lossless 40 {} -o {.}.webp
find ./src/img/iconos -name "*.jpg" | parallel -eta cwebp -q 95 {} -o {.}.webp
find ./src/img/iconos -name "*.png" | parallel -eta cwebp -near_lossless 50 {} -o {.}.webp

find ./src/img/galeria -name "*.jpeg" | parallel -eta cwebp -near_lossless 40 {} -o {.}.webp
find ./src/img/galeria -name "*.jpg" | parallel -eta cwebp -q 95 {} -o {.}.webp
find ./src/img/galeria -name "*.png" | parallel -eta cwebp -near_lossless 50 {} -o {.}.webp