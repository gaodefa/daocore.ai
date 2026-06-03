import rss from '@astrojs/rss';
import { getPublishedBlogPosts } from '../lib/blog';

export async function GET(context) {
  const posts = await getPublishedBlogPosts();

  return rss({
    title: 'DaoCore Blog',
    description: 'Updates and news from DaoCore — The AI that actually does things',
    site: context.site ?? 'https://daocore.ai',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}`,
    })),
  });
}
