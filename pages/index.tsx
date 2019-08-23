import { NextPage } from 'next'

interface Props {
    userAgent?: string
}

const Home: NextPage<Props> = ({userAgent}) => (
    <h1>hello world! user agent: {userAgent}</h1>
);

Home.getInitialProps = async ({req}) => {
    const userAgent = req ? req.headers['user.agent'] || '' : navigator.userAgent
    return { userAgent }
}

export default Home
