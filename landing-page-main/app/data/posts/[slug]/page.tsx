import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetaData from '@/components/getPostMetadata';
import Image from "next/image";
import styles from './page.module.css'; // Import your CSS file

const getPostContent = (slug: string) => {
    const folder = "app/services/research/allPosts";
    const file = `${folder}/${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResults = matter(content);
    return matterResults;
}

export const generateStaticParams = async () => {
    const posts = getPostMetaData();
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

const postPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div className={styles.container}>
            <article className={styles.article}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{post.data.title}</h1>
                    <p className={styles.date}>{post.data.date}</p>
                </div>
                <Markdown className={styles.content}>{post.content}</Markdown>
            </article>
        </div>
    )
}

export default postPage;
