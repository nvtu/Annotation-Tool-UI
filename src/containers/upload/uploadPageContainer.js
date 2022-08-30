import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { UPLOAD_API } from '../../constants/servers';
import { connect } from 'react-redux'


const { Dragger } = Upload;


function UploadPageContainer(props) {


    const validationBeforeUpload = (file) => {
        const FILE_TYPE = [
            'application/zip',
            'application/octet-stream',
            'application/x-zip-compressed',
            'multipart/x-zip'
        ]
        if (FILE_TYPE.indexOf(file.type) === -1) {
            message.error("Upload file must be zip file.");
            return false
        }

        return true
    }


    const onChange = (info) => {
        const { status } = info.file;

        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }

        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }

    const onDrop = (e) => {
        console.log('Dropped files', e.dataTransfer.files);
    }

    return (
        <div
            style={{
                position: "absolute",
                right: 90,
                left: 80,
                marginTop: 50,
            }}
        >
            <Dragger
                onChange={onChange}
                beforeUpload={validationBeforeUpload}
                multiple={false}
                action={UPLOAD_API}
                onDrop={onDrop}
                headers={{
                    token: props.user.accessToken
                }}
                progress={{
                    strokeColor: {
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    },
                    strokeWidth: 3,
                    format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,

                }}
            >
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                </p>
            </Dragger>
        </div>
    )
}


const mapStatesToProps = (state) => ({
    user: state.user
})

export default connect(mapStatesToProps)(UploadPageContainer);