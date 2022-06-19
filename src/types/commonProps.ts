export interface CommonProps {
    style?: object,
    className?: string,
    onClick?: () => void,
    children?: React.ReactNode,
    ref?: React.ForwardedRef<HTMLDivElement>
}