import styles from './styles.module.css';


const selectCls = (colorName: string) => {
    switch (colorName) {
        case 'red':
            return styles.red;
        case 'pink':
            return styles.pink;
        case 'grey':
            return styles.grey;
        case 'brown':
            return styles.brown;
        case 'orange':
            return styles.orange;
        case 'yellow':
            return styles.yellow;
        case 'green':
            return styles.green;
        case 'blue':
            return styles.blue;
        case 'purple':
            return styles.purple;
        default:
            return styles.default;
    }
}

export default function ColoredCode({children, color}): JSX.Element {
    return (
        <code className={ selectCls(color) }>{children}</code>
    )
}