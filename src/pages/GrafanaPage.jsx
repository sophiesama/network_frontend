import Iframe from 'react-iframe'
import { Layout } from 'antd';
import MySider from '../components/MySider';
import { GRAFANAURL } from '../constants/urls';
export default function GrafanaPage() {
    return(
    <Layout>
        <MySider/>
        <Layout>
            <Iframe url={GRAFANAURL}
            width="100%"
            height="1080px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"/>
        </Layout>
    </Layout>
    )
}