import '../styles/globals.css'
import Menu from '../components/menu/Menu';
import Layout from '../components/layout/Layout';
import CommonLayout from '../components/layout/commonLayout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Menu {...pageProps}/>
      <CommonLayout>
        <Component {...pageProps} />
      </CommonLayout>
    </Layout>
  )
}

export default MyApp
