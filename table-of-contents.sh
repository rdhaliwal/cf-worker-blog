 #!/bin/bash

rm -f toc-temp.txt
touch toc-temp.txt

for FILENAME in `ls -lt posts | awk '{print $9}' | tail -r | sed 's/\.md//g'`;
do
	MARKDOWN_NAME="- [posts/${FILENAME}](posts/${FILENAME})"
	echo ${MARKDOWN_NAME} >> toc-temp.txt
done

BLOG_POSTS="$(cat toc-temp.txt)" envsubst < home_template.md > home.md
rm -f toc-temp.txt


