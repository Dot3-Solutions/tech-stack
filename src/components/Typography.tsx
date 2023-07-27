
export type TypographyProps = {
    fontSize: string,
    fontWeight: string,
    lineHeight: string,
    color: string,
    text: string,
    className?: string,
};

export const Typography = ({
    fontSize,
    fontWeight,
    lineHeight,
    color,
    text,
    className,
}: TypographyProps) => {

    const size = `${fontSize}`
    const weight = `${fontWeight}`
    const line = `${lineHeight}`
    const textColor = `${color}`
    return (
        <div className={`${className} ${size} ${weight} ${line} ${textColor}`}>{text} </div>
    );
};