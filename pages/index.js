//This is the Link API
//import Link from 'next/link';
import Layout from '../comps/MyLayout.js';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default function Blog(){
    return (
        <Layout>
            <h1>MyBlog</h1>
            <ul>
                <PostLink title="Hello Next.js"></PostLink>
                <PostLink title="Learn Next.js is awesome"></PostLink>
                <PostLink title="Deploy apps with Zeit"></PostLink>
            </ul>
        </Layout>
    );
};
