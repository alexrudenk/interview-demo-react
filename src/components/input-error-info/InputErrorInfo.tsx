import './InputErrorInfo.scss';

export function InputErrorInfo(props: any) {

    return <div className="error-block">
        <small>{props.message}</small>
    </div>
}

export default InputErrorInfo;