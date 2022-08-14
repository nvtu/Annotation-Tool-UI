import { Typography } from 'antd'
import { TITLE_BACKGROUND_COLOR } from '../../../constants/colors';


const { Title } = Typography;

function AnnotationTitle(props) {
    return (
        <div>
            <Title level={5}
                style={{ backgroundColor: TITLE_BACKGROUND_COLOR }}
            >{props.title}</Title>
        </div>
    )
}

export default AnnotationTitle;