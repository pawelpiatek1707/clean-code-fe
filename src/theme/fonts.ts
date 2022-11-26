interface Font {
    fontSize: string
    lineHeight: string
}

export const fonts: Record<string, Font> = {
    header1: {
        fontSize: '32px',
        lineHeight: '50px'
    },
    textXL: {
        fontSize: '16px',
        lineHeight: '22px'
    },
    textL: {
        fontSize: '14px',
        lineHeight: '21px'
    }
}