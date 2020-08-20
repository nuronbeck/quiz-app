# s3cmd -c ~/.s3cfg_frontendmatter_demos sync -MP static/images/ s3://www.lumalms.com/images/

s3cmd -c ~/.s3cfg_frontendmatter_demos del s3://www.lumalms.com/**/**/* &&
s3cmd -c ~/.s3cfg_frontendmatter_demos sync -MP dist/ s3://www.lumalms.com/ &&
s3cmd -c ~/.s3cfg_frontendmatter_demos put -P --mime-type=text/css dist/_nuxt/*.css s3://www.lumalms.com/_nuxt/