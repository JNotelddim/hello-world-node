//This is the Link API
//import Link from 'next/link';
import Layout from '../comps/MyLayout.js';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
)

export default function Blog(){
    return (
        <Layout>
            <h1>MyBlog</h1>
            <ul>
                <PostLink id="Hello Next.js"></PostLink>
                <PostLink id="Learn Next.js is awesome"></PostLink>
                <PostLink id="Deploy apps with Zeit"></PostLink>
            </ul>
        </Layout>
    );
};
