//This is the Link API
import Layout from '../comps/MyLayout.js';
import Link from 'next/link';

function getPosts() {
    return [
        { id: "hello-nextjs", title: "Hello Next.js" },
        { id: "learn-nextjs", title: "Learn Next.js is awesome" },
        { id: "deploy-nextjs", title: "Deploy apps with Zeit" }
    ]
}

export default function Blog(){
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                {getPosts().map( post => (
                    <li key={post.id}>
                        <Link href="/p/[id]" as={`/p/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <style jsx>{`
                h1, a {
                font-family: 'Arial'
                }

                ul {
                    padding: 0;
                }

                li {
                    list-style: none;
                    margin: none;
                }

                a {
                    text-decoration: none;
                    color: blue;
                }

                a:hover {
                    opacity: 0.6;
                }
                `}
            </style>
        </Layout>
    );
}
